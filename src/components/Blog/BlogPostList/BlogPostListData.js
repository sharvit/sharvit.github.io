import { getBlogPosts } from '../BlogData';

export const getBlogPostsList = limit => getBlogPosts().slice(0, limit);
