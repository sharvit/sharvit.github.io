import { useStaticQuery, graphql } from "gatsby";

// eslint-disable-next-line no-undef
export type AuthorCVQuery = Queries.AuthorCVQuery;

export interface IAuthorExperience {
  company: string;
  position: string;
  years: string;
  tags: string[];
  bulletPoints: string[];
}

export interface IAuthorCV {
  skills: string[];
  experiences: IAuthorExperience[];
}

export const mapAuthorCVQuery = (data: AuthorCVQuery): IAuthorCV => {
  const { cv } = data.file?.childYaml || {};

  return {
    skills: cv?.skills?.trim().split(", ") || [],
    experiences:
      cv?.experiences?.map((e) => ({
        company: e?.company || "",
        position: e?.position || "",
        years: e?.years || "",
        tags: e?.tags?.trim().split(", ") || [],
        bulletPoints: e?.bullet_points?.map((bp) => bp?.trim() || "") || [],
      })) || [],
  };
};

export const useAuthorCV = (): IAuthorCV => {
  const data = useStaticQuery<AuthorCVQuery>(graphql`
    query AuthorCV {
      file(sourceInstanceName: { eq: "bio" }, name: { eq: "author" }) {
        childYaml {
          cv {
            skills
            experiences {
              company
              position
              years
              tags
              bullet_points
            }
          }
        }
      }
    }
  `);

  return mapAuthorCVQuery(data);
};
