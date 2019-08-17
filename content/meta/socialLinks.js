const author = require('./author');

module.exports = [
  {
    id: 'email',
    label: 'Email',
    link: `mailto:${author.email}`,
    pdfLink: author.email,
    buttonClassName: 'btn btn-icon btn-fill',
    iconClassName: 'fas fa-envelope',
  },
  {
    id: 'website',
    label: 'Website',
    link: author.website,
    buttonClassName: 'hidden visible-print-block',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    link: `https://www.facebook.com/${author.facebook}`,
    buttonClassName: 'btn btn-icon btn-fill btn-facebook',
    iconClassName: 'fab fa-facebook-f',
  },
  {
    id: 'github',
    label: 'Github',
    link: `https://github.com/${author.github}`,
    buttonClassName: 'btn btn-icon btn-fill btn-github',
    iconClassName: 'fab fa-github',
  },
  {
    id: 'twitter',
    label: 'Twitter',
    link: `https://www.twitter.com/${author.twitter}`,
    buttonClassName: 'btn btn-icon btn-fill btn-twitter',
    iconClassName: 'fab fa-twitter',
  },
  {
    id: 'stackoverflow',
    label: 'Stack Overflow',
    link: `https://stackoverflow.com/users/${author.stackoverflow}`,
    buttonClassName: 'btn btn-icon btn-fill btn-stack-overflow',
    iconClassName: 'fab fa-stack-overflow',
  },
  {
    id: 'rss',
    label: 'RSS',
    link: '/feed.xml',
    buttonClassName: 'btn btn-icon btn-fill btn-rss hidden-print',
    iconClassName: 'fas fa-rss',
  },
];
