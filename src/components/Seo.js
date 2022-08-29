import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const metadataSeoQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author {
          twitter
          avatar
        }
      }
    }
    file(sourceInstanceName: { eq: "bio" }, name: { eq: "short-bio" }) {
      childMarkdownRemark {
        rawMarkdownBody
      }
    }
  }
`;

const Seo = ({ description, lang, meta, title }) => {
  const {
    site: { siteMetadata },
    file,
  } = useStaticQuery(metadataSeoQuery);

  const metaTitle = title
    ? `${siteMetadata.title} | ${title}`
    : `${siteMetadata.title} | ${siteMetadata.description}`;

  const metaDescription =
    description || file.childMarkdownRemark.rawMarkdownBody;

  const metaElements = [
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
      property: 'og:image',
      content: siteMetadata.author.avatar,
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
      content: `@${siteMetadata.author.twitter}`,
    },
    {
      name: `twitter:creator`,
      content: `@${siteMetadata.author.twitter}`,
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

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

Seo.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  title: '',
};

export default Seo;
