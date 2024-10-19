import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface JobState {
	blogs: any;
	fetchBlogs: () => Promise<void>;
}

const useJobStore = create<JobState>()(
	persist(
		(set, get) => ({
			blogs: [],
			fetchBlogs: async () => {
				try {
					set({
						blogs: [],
					});
				} catch (error) {
					console.error('Error fetching blogs: ', error);
				}
			},
		}),
		{
			name: 'agcom-storage',
			partialize: (state) => ({
				blogs: state.blogs,
			}),
		}
	)
);

export default useJobStore;
