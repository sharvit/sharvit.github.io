import path from 'path';
import { CreatePagesArgs } from 'gatsby';

interface GetPostFilesQuery {
  allFile: {
    edges: {
      node: {
        id: string;
        name: string;
      };
    }[];
  };
}

const getPostFiles = async ({ graphql }: CreatePagesArgs) => {
  const result = await graphql<GetPostFilesQuery>(`
    query GetPostFiles {
      allFile(
        filter: { sourceInstanceName: { eq: "posts" } }
        sort: { order: DESC, fields: name }
        limit: 10000
      ) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.log(result.errors); // eslint-disable-line no-console
    throw new Error('Things broke, see console output above');
  }

  if (result.data === undefined) throw new Error('No pages');

  return result.data;
};

export const createBlogPostPages = async (createPageArgs: CreatePagesArgs) => {
  const { allFile: postFiles } = await getPostFiles(createPageArgs);

  for (const edge of postFiles.edges) {
    const postPath = `/blog/${edge.node.name}`;

    createPageArgs.actions.createPage({
      component: path.resolve(`./src/templates/post.tsx`),
      path: postPath,
      context: { id: edge.node.id, postPath },
    });
  }
};
