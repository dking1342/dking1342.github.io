import { ReactElement, ReactFragment, ReactPortal } from 'react';

// info cards
export type InfoCardType = {
  id: string;
  theme: 'primary' | 'secondary';
  title: string;
  body: string;
  classStyle: string;
};

// core values cards
export type CoreValueType = {
  id: string;
  src: string;
  title: string;
  body: string;
};

// team member cards
export type TeamMemberType = {
  id: string;
  src: string;
  name: string;
  role: string;
};

// partner cards
export type PartnerType = {
  id: string;
  theme: 'primary' | 'secondary';
  title: string;
  body: string;
};

// staff cards
export type StaffType = {
  id: string;
  src: string;
  name: string;
  role: string;
};

// impact cards
export type ImpactCardType = {
  id: string;
  img: string;
  header: string;
  body: string;
  name: string;
  date: string;
  type: 'customers' | 'community' | 'animals' | 'partners' | 'media';
};

// service cards
export type ServiceCardType = {
  id: string;
  icon: string;
  title: string;
  body: string;
  img: string;
};

// get involved cards
export type GetInvolvedCardType = {
  id: number;
  icon: string;
  title: string;
  body: string;
  link: string;
};

// operation cards
export type CompanyInfo = {
  id: string;
  icon: string;
  iconColor: string;
  iconWidth: string;
  iconHeight: string;
  body: ReactElement | string;
};
export type CompanyProfile = {
  id: string;
  title: string;
  body: string;
};
export type DocumentInfo = {
  id: string;
  icon: string;
  iconWidth: string;
  iconHeight: string;
  iconColor: string;
  body: string;
  src: string;
  src2?: string;
  alt: string;
};

// faq cards
export type FaqCardType = {
  id: string;
  question: string;
  answer: string;
};
