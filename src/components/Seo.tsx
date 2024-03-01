import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { useAuthorProfile } from "../profile/hooks";

// eslint-disable-next-line no-undef
export type RawShortBioQuery = Queries.RawShortBioQuery;

export interface SeoMeta {
  name?: string;
  property?: string;
  content: string;
}

export interface SeoProps {
  title?: string;
  description?: string;
  meta?: SeoMeta[];
}

export const Seo = ({ title, description, meta = [] }: SeoProps) => {
  const { file } = useStaticQuery<RawShortBioQuery>(graphql`
    query RawShortBio {
      file(sourceInstanceName: { eq: "bio" }, name: { eq: "short-bio" }) {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
  `);

  const profile = useAuthorProfile();

  const metaTitle = title
    ? `${profile.name} | ${title}`
    : `${profile.name} | ${profile.title}`;

  const metaDescription =
    description || (file?.childMarkdownRemark?.rawMarkdownBody as string);

  const metaElements: SeoMeta[] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: metaTitle,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: "og:image",
      content: profile.avatar,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:site`,
      content: profile.twitter,
    },
    {
      name: `twitter:creator`,
      content: profile.twitter,
    },
    ...meta,
  ];

  return (
    <>
      <title>{metaTitle}</title>
      {metaElements.map(({ name, property, content }) => (
        <meta
          key={name || property}
          name={name}
          property={property}
          content={content}
        />
      ))}
    </>
  );
};
