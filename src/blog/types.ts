import { CoverImageSharp } from '../components/Layout/components/CoverImage';

// eslint-disable-next-line no-undef
export type GetBlogPostsQuery = Queries.GetBlogPostsQuery;
// eslint-disable-next-line no-undef
export type PostFileFragment = Queries.PostFileFragment;

export interface IBlogPost {
  name: string;
  title: string;
  date: Date;
  url: string;
  excerpt: string;
  html: string;
  coverImage?: CoverImageSharp;
}
