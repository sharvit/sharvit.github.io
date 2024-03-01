import { useStaticQuery, graphql } from "gatsby";
import { IAuthorProfile } from "../../../content/bio/types";

// eslint-disable-next-line no-undef
export type AuthorProfileQuery = Queries.AuthorProfileQuery;

export const mapAuthorProfileQuery = (
  data: AuthorProfileQuery,
): IAuthorProfile => {
  const { profile } = data.file?.childYaml || {};

  return {
    name: profile?.name || "",
    nickname: profile?.nickname || "",
    title: profile?.title || "",
    website: profile?.website || "",
    phone: profile?.phone || "",
    email: profile?.email || "",
    github: profile?.github || "",
    twitter: profile?.twitter || "",
    stackoverflow: profile?.stackoverflow?.toString() || "",
    disqus: profile?.disqus || "",
    avatar: profile?.avatar || "",
  };
};

export const useAuthorProfile = (): IAuthorProfile => {
  const data = useStaticQuery<AuthorProfileQuery>(graphql`
    query AuthorProfile {
      file(sourceInstanceName: { eq: "bio" }, name: { eq: "author" }) {
        childYaml {
          profile {
            name
            nickname
            title
            website
            email
            phone
            github
            twitter
            stackoverflow
            disqus
            avatar
          }
        }
      }
    }
  `);

  return mapAuthorProfileQuery(data);
};
