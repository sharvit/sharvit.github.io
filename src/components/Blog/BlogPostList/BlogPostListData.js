import { useBlogPosts } from '../BlogData';

export const useBlogPostsList = (limit) => useBlogPosts().slice(0, limit);
