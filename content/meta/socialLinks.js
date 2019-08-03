const author = require('./author');

module.exports = [
  {
    id: 'email',
    link: `mailto:${author.email}`,
    buttonClassName: 'btn btn-icon btn-fill',
    iconClassName: 'fas fa-envelope',
  },
  {
    id: 'facebook',
    link: `https://www.facebook.com/${author.facebook}`,
    buttonClassName: 'btn btn-icon btn-fill btn-facebook',
    iconClassName: 'fab fa-facebook-f',
  },
  {
    id: 'github',
    link: `https://github.com/${author.github}`,
    buttonClassName: 'btn btn-icon btn-fill btn-github',
    iconClassName: 'fab fa-github',
  },
  {
    id: 'twitter',
    link: `https://www.twitter.com/${author.twitter}`,
    buttonClassName: 'btn btn-icon btn-fill btn-twitter',
    iconClassName: 'fab fa-twitter',
  },
  {
    id: 'stackoverflow',
    link: `https://stackoverflow.com/users/${author.stackoverflow}`,
    buttonClassName: 'btn btn-icon btn-fill btn-stack-overflow',
    iconClassName: 'fab fa-stack-overflow',
  },
  {
    id: 'rss',
    link: '/feed.xml',
    buttonClassName: 'btn btn-icon btn-fill btn-rss',
    iconClassName: 'fas fa-rss',
  },
];
