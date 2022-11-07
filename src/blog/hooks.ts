import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';

import { GetBlogPostsQuery, IBlogPost, PostFileFragment } from './types';
import { mapBlogPostData } from './utils';

export const useGetBlogPostsQuery = (top?: number) => {
  const postFileFragments = useStaticQuery<GetBlogPostsQuery>(graphql`
    query GetBlogPosts {
      allFile(
        filter: { sourceInstanceName: { eq: "posts" } }
        sort: { order: DESC, fields: name }
        limit: 10000
      ) {
        nodes {
          ...PostFile
        }
      }
    }
  `).allFile.nodes as PostFileFragment[];

  return useMemo(() => {
    if (top) {
      return postFileFragments.slice(0, top);
    }
    return postFileFragments;
  }, [postFileFragments, top]);
};

export const useBlogPosts = (top?: number): IBlogPost[] => {
  const data = useGetBlogPostsQuery(top);

  return data.map(mapBlogPostData);
};
