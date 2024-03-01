import * as React from "react";
import { graphql, HeadProps, PageProps } from "gatsby";

import { Layout, Seo } from "../components";
import { BlogPost, mapBlogPostData, PostFileFragment } from "../blog";

import * as pageStyles from "../pages/page.module.css";

// eslint-disable-next-line no-undef
export type IPostTemplateData = Queries.GetPostFileQuery;

export interface IPostTemplateContext {
  id: string;
  postPath: string;
}

export const query = graphql`
  fragment PostFile on File {
    name
    childMarkdownRemark {
      html
      excerpt(pruneLength: 280)
      frontmatter {
        title
        coverImage {
          childImageSharp {
            ...CoverImageSharp
          }
        }
      }
    }
  }
  query GetPostFile($id: String) {
    file(id: { eq: $id }) {
      ...PostFile
    }
  }
`;

export const Head = ({ data }: HeadProps<IPostTemplateData>) => {
  const { title, excerpt } = mapBlogPostData(data.file as PostFileFragment);

  return <Seo title={title} description={excerpt} />;
};

const PostTemplate = ({
  data,
  pageContext,
}: PageProps<IPostTemplateData, IPostTemplateContext>) => {
  const { title, coverImage, html, date } = mapBlogPostData(
    data.file as PostFileFragment,
  );

  return (
    <Layout
      className={pageStyles.page}
      breadcrumbs={[
        { title: "Blog", path: "/blog" },
        { title, path: pageContext.postPath },
      ]}
      coverImage={
        coverImage && {
          alt: title,
          image: coverImage,
        }
      }
    >
      <BlogPost title={title} date={date} html={html} />
    </Layout>
  );
};

export default PostTemplate;
