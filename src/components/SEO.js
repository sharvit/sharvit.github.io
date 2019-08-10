/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title }) {
  const {
    site: { siteMetadata },
    file,
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              twitter
            }
          }
        }
        file(sourceInstanceName: { eq: "bio" }, name: { eq: "short-bio" }) {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
    `
  );

  const titleTemplate = title ? `${siteMetadata.title} | %s` : '%s';

  const metaTitle =
    title || `${siteMetadata.title} | ${siteMetadata.description}`;

  const metaDescription =
    description || file.childMarkdownRemark.rawMarkdownBody;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={titleTemplate}
      meta={[
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
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
