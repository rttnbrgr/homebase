const miscLinks = [
  //   {
  //     href: "https://www.rottenburger.com/",
  //     isLocal: false,
  //     linkText: "Portfolio"
  //   },
  {
    href: "/blog",
    isLocal: true,
    linkText: "Blog",
    showInNav: true
  },

  {
    href: "/reviews",
    isLocal: true,
    linkText: "Reviews",
    showInNav: true
  },

  {
    href: "/fullstack-design",
    isLocal: true,
    linkText: "Fullstack Design",
    showInNav: false
  },
  {
    href: "/theme",
    isLocal: true,
    linkText: "Theme",
    showInNav: true
  }
];

const socialLinks = [
  {
    href: "https://github.com/rttnbrgr",
    isLocal: false,
    linkText: "Github"
  },
  {
    href: "https://www.figma.com/@rttnbrgr",
    isLocal: false,
    linkText: "Figma"
  },
  {
    href: "https://www.linkedin.com/in/nathan-rothenberger-11765b16/",
    isLocal: false,
    linkText: "LinkedIn"
  }
];

const linkLists = [
  {
    title: "Links",
    list: miscLinks
  },
  {
    title: "Socials",
    list: socialLinks
  }
];

export { miscLinks, socialLinks, linkLists };
