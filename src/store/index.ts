import { likeAnItem } from '@/actions/interactions';
import { toast } from 'sonner';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type States = {
	cart: any;
};

type Actions = {
	onLiked: (id: string) => void;
};

type StateAndActions = States & Actions;

const useStore = create<StateAndActions>()(
	persist(
		(set, get) => ({
			cart: [],
			onLiked: async (id) => {
				try {
					const res = await likeAnItem(id);
					if (res?.error) {
						toast.error(res.error);
					}
					toast.success(res.res);
					return;
				} catch (error) {
					console.error('Error occured', error);
					toast.error('Error occured');
				}
			},
		}),
		{
			name: 'grace-storage',
			partialize: (state) => ({
				cart: state.cart,
			}),
		}
	)
);

export default useStore;
