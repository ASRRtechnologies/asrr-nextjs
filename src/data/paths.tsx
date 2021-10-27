//Paths for importing markdown files for cms
export enum BasePaths {
  HOME = 'public/content/home',
  PORTFOLIO = 'public/content/portfolio',
  CASES = 'public/content/portfolio/cases',
  SERVICE_PAGE = 'public/content/services',
  SERVICES = 'public/content/services/posts',
  BLOG = 'public/content/blog',
  ARTICLE = 'public/content/blog/posts/article',
  NEWS = 'public/content/blog/posts/news',
  TUTORIAL = 'public/content/blog/posts/tutorial',
  ABOUT = 'public/content/about',
  TEAM = 'public/content/team',
  CONTACT = 'public/content/contact',
}

export const navigationPaths = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Diensten', path: '/diensten' },
  // { name: 'Over', path: '/over' },
  { name: 'Team', path: '/team' },
  { name: 'Blog', path: '/blog' },
  {
    name: 'Support',
    path: 'https://asrrtechnologies.atlassian.net/servicedesk/customer/portals',
  },
  { name: 'Contact', path: '/contact' },
];

//
// export const BasePaths = {
//     home: "public/content/home",
//     portfolio: "public/content/portfolio",
//     cases: "public/content/PORTFOLIO/cases",
//     service_page: "public/content/services",
//     services: "public/content/services/posts",
//     blog: "public/content/blog",
//     article: "public/content/blog/posts/article",
//     news: "public/content/blog/posts/news",
//     tutorial: "public/content/blog/posts/tutorial",
//     about: "public/content/about",
//     team: "public/content/team",
//     contact: "public/content/contact",
// }
