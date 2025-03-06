export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Nick Garza Portfolio ",
  description:
    "Temporary Portfolio Description",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Resume",
      href: "/resume",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
