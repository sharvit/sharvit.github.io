import { useStaticQuery, graphql } from "gatsby";

import { CoverImageSharp } from "../../components/Layout/components/CoverImage";

// eslint-disable-next-line no-undef
export type AboutCoverImageQuery = Queries.AboutCoverImageQuery;

export const useAboutCoverImage = (): CoverImageSharp | undefined =>
  useStaticQuery<AboutCoverImageQuery>(graphql`
    query AboutCoverImage {
      file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "about-page-cover-background" }
      ) {
        childImageSharp {
          ...CoverImageSharp
        }
      }
    }
  `).file?.childImageSharp || undefined;
