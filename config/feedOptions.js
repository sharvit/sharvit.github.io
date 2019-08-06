const siteMetadata = require('../content/meta/siteMetadata');

const query = `
  {
    site {
      siteMetadata {
        title
        description
        siteUrl
        site_url: siteUrl
      }
    }
  }
`;

const feeds = [
  {
    serialize: ({ query: { site, allFile } }) =>
      allFile.edges.map(({ node: { name, childMarkdownRemark } }) => {
        const { frontmatter, excerpt, html } = childMarkdownRemark;
        const [year, month, day, ...nameWithoutDate] = name.split('-');
        const postUrl = `${siteMetadata.siteUrl}/blog/${nameWithoutDate.join(
          '-'
        )}`;

        return {
          title: frontmatter.title,
          description: excerpt,
          date: `${year}-${month}-${day}`,
          url: postUrl,
          guid: postUrl,
          custom_elements: [{ 'content:encoded': html }],
        };
      }),
    query: `
      {
        allFile(
          filter: {sourceInstanceName: {eq: "posts"}},
          sort: {order: DESC, fields: name},
          limit: 10000
        ) {
          edges {
            node {
              name
              childMarkdownRemark {
                frontmatter {
                  title
                }
                excerpt
                html
              }
            }
          }
        }
      }
    `,
    output: '/feed.xml',
    title: `${siteMetadata.title} Blog's RSS Feed`,
    match: '^/blog/',
  },
];

module.exports = { query, feeds };
