import { IBlogPost, PostFileFragment } from './types';

export const getDateFromName = (name: string): Date => {
  const [year, month, day] = name.split('-');
  return new Date(`${year}-${month}-${day}`);
};

export const mapBlogPostData = (data: PostFileFragment): IBlogPost => ({
  name: data.name,
  title: data.childMarkdownRemark?.frontmatter?.title || '',
  date: getDateFromName(data.name),
  url: `/blog/${data.name}`,
  excerpt: data.childMarkdownRemark?.excerpt || '',
  html: data.childMarkdownRemark?.html || '',
  coverImage:
    data.childMarkdownRemark?.frontmatter?.coverImage?.childImageSharp ||
    undefined,
});
