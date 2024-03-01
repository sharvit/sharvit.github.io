import { useStaticQuery, graphql } from "gatsby";

import { CoverImageSharp } from "../../components/Layout/components/CoverImage";

// eslint-disable-next-line no-undef
export type HomeCoverImageQuery = Queries.HomeCoverImageQuery;

export const useHomeCoverImage = (): CoverImageSharp | undefined =>
  useStaticQuery<HomeCoverImageQuery>(graphql`
    query HomeCoverImage {
      file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "home-cover-background" }
      ) {
        childImageSharp {
          ...CoverImageSharp
        }
      }
    }
  `).file?.childImageSharp || undefined;
