import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

// Types for various actions and states
type CartItem = { productId: number; quantity: number };
type Product = { productId: number; name: string; price: number };

type State = {
	cart: CartItem[];
	viewedProducts: number[];
	likedProducts: number[];
	products: Product[];
	isUserLoggedIn: boolean;
};

type Actions = {
	// Cart Actions
	addToCart: (productId: number, quantity: number) => void;
	removeFromCart: (productId: number) => void;
	clearCart: () => void;
	getCart: () => CartItem[];

	// Viewed Products Actions
	addViewedProduct: (productId: number) => void;
	getViewedProducts: () => number[];

	// Liked Products Actions
	likeProduct: (productId: number) => void;
	unlikeProduct: (productId: number) => void;
	getLikedProducts: () => number[];

	// Product Actions
	setProducts: (products: Product[]) => void;

	// User Session
	setUserLoggedIn: (loggedIn: boolean) => void;
	syncDataToServer: () => Promise<void>;
};

type StateAndActions = State & Actions;

type MyPersist = (
	config: StateCreator<StateAndActions>,
	options: PersistOptions<StateAndActions>
) => StateCreator<StateAndActions>;

// Initial State
const initialState: State = {
	cart: [],
	viewedProducts: [],
	likedProducts: [],
	products: [],
	isUserLoggedIn: false,
};
// Define the Zustand store
export const useStore = create<StateAndActions>(
	(persist as MyPersist)(
		(set, get) => ({
			...initialState,

			// Cart Actions
			addToCart: (productId, quantity) => {
				const { cart, isUserLoggedIn } = get();

				if (isUserLoggedIn) {
					// Send data to the server if the user is logged in
					fetch('/api/cart', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ productId, quantity }),
					});
				} else {
					// Update local state and persist in local storage
					const existingItem = cart.find(
						(item) => item.productId === productId
					);
					if (existingItem) {
						existingItem.quantity += quantity;
					} else {
						set({ cart: [...cart, { productId, quantity }] });
					}
				}
			},

			removeFromCart: (productId) => {
				const { cart, isUserLoggedIn } = get();

				if (isUserLoggedIn) {
					fetch(`/api/cart/${productId}`, { method: 'DELETE' });
				} else {
					set({ cart: cart.filter((item) => item.productId !== productId) });
				}
			},

			clearCart: () => {
				const { isUserLoggedIn } = get();

				if (isUserLoggedIn) {
					fetch('/api/cart', { method: 'DELETE' });
				} else {
					set({ cart: [] });
				}
			},

			getCart: () => get().cart,

			// Viewed Products Actions
			addViewedProduct: (productId) => {
				const { viewedProducts, isUserLoggedIn } = get();

				if (isUserLoggedIn) {
					fetch('/api/viewed', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ productId }),
					});
				} else {
					if (!viewedProducts.includes(productId)) {
						set({
							viewedProducts: [productId, ...viewedProducts].slice(0, 10), // Limit to 10
						});
					}
				}
			},

			getViewedProducts: () => get().viewedProducts,

			// Liked Products Actions
			likeProduct: (productId) => {
				const { likedProducts, isUserLoggedIn } = get();

				if (isUserLoggedIn) {
					fetch('/api/likes', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ productId }),
					});
				} else {
					if (!likedProducts.includes(productId)) {
						set({ likedProducts: [...likedProducts, productId] });
					}
				}
			},

			unlikeProduct: (productId) => {
				const { likedProducts, isUserLoggedIn } = get();

				if (isUserLoggedIn) {
					fetch(`/api/likes/${productId}`, { method: 'DELETE' });
				} else {
					set({
						likedProducts: likedProducts.filter((id) => id !== productId),
					});
				}
			},

			getLikedProducts: () => get().likedProducts,

			// Product Actions
			setProducts: (products) => {
				set({ products });
			},

			// User Session
			setUserLoggedIn: (loggedIn) => {
				set({ isUserLoggedIn: loggedIn });

				// Optionally sync data when user logs in
				if (loggedIn) {
					get().syncDataToServer();
				}
			},

			// Sync local data to server on login
			syncDataToServer: async () => {
				const { cart, viewedProducts, likedProducts } = get();

				await Promise.all([
					fetch('/api/cart/sync', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(cart),
					}),
					fetch('/api/viewed/sync', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(viewedProducts),
					}),
					fetch('/api/likes/sync', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(likedProducts),
					}),
				]);

				// Clear local storage after syncing
				set({ cart: [], viewedProducts: [], likedProducts: [] });
			},
		}),
		{
			name: 'ecommerce-storage', // Unique name for local storage
			getStorage: () => localStorage, // Use local storage
			onRehydrateStorage: () => (state) => {
				// Optional callback when rehydration occurs
				console.log('Rehydrated state:', state);
			},
		}
	)
);

// const useJobStore = create<JobState>()(
// 	persist(
// 		(set, get) => ({
// 			blogs: [],
// 			fetchBlogs: async () => {
// 				try {
// 					set({
// 						blogs: [],
// 					});
// 				} catch (error) {
// 					console.error('Error fetching blogs: ', error);
// 				}
// 			},
// 		}),
// 		{
// 			name: 'agcom-storage',
// 			partialize: (state) => ({
// 				blogs: state.blogs,
// 			}),
// 		}
// 	)
// );
