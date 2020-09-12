const author = require('./author');
const socialLinks = require('./socialLinks');
const openSourceProjects = require('./openSourceProjects');

module.exports = {
  title: 'Avi Sharvit',
  description: 'Expert Full Stack Developer',
  siteUrl: author.website,
  author,
  socialLinks,
  openSourceProjects,
};
