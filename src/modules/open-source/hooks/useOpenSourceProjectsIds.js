import { useStaticQuery, graphql } from 'gatsby';

const useOpenSourceProjectsIds = (top) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          openSourceProjects
        }
      }
    }
  `);

  return top
    ? site.siteMetadata.openSourceProjects.slice(0, top)
    : site.siteMetadata.openSourceProjects;
};

export default useOpenSourceProjectsIds;
