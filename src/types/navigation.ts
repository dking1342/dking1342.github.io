export type Sublist = {
  id: string;
  href: string;
  link: string;
};
export type Sitemap = {
  id: string;
  href: string;
  link: string;
  sublist: Sublist[];
};
export type NavbarSitemap = {
  id: string;
  name: string;
  href: string;
};
export type CompanyInfoType = {
  id: string;
  icon: string;
  iconWidth: string;
  iconHeight: string;
  iconColor: string;
  body: string;
};
export type SocialType = {
  id: string;
  icon: string;
  iconWidth: string;
  iconHeight: string;
  iconColor: string;
  href: string;
};
