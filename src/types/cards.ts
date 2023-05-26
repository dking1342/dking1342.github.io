export type InfoCardType = {
  id: number;
  theme: 'primary' | 'secondary';
  title: string;
  body: string;
  classStyle: string;
};

export type CoreValueType = {
  id: number;
  src: string;
  title: string;
  body: string;
};

export type TeamMemberType = {
  id: number;
  src: string;
  name: string;
  role: string;
};

export type PartnerType = {
  id: number;
  theme: 'primary' | 'secondary';
  title: string;
  body: string;
};

export type StaffType = {
  id: number;
  src: string;
  name: string;
  role: string;
};

export type ImpactCardType = {
  id: number;
  img: string;
  header: string;
  body: string;
  name: string;
  date: string;
  type: 'customers' | 'community' | 'animals' | 'partners' | 'media';
};

export type ServiceCardType = {
  id: number;
  icon: string;
  title: string;
  body: string;
  link: string;
  img: string;
};

export type GetInvolvedCardType = {
  id: number;
  icon: string;
  title: string;
  body: string;
  link: string;
};
