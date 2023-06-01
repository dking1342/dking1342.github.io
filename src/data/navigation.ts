import { GeneralFormValues } from '@/types/form';
import {
  CompanyInfoType,
  NavbarSitemap,
  Sitemap,
  SocialType,
} from '@/types/navigation';
import { v4 as uuid } from 'uuid';

// navbar
export const navbarSitemap: NavbarSitemap[] = [
  { id: uuid(), name: 'about', href: '/about' },
  { id: uuid(), name: 'impact', href: '/impact' },
  { id: uuid(), name: 'animal care', href: '/animal-care' },
  { id: uuid(), name: 'get involved', href: '/get-involved' },
];

// footer
export const initialState: GeneralFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};
export const robotInitialState = 0;
export const currentYear = new Date().getFullYear();
export const sitemap: Sitemap[] = [
  {
    id: uuid(),
    href: '/about',
    link: 'about',
    sublist: [
      {
        id: uuid(),
        href: '/about/overview',
        link: 'overview',
      },
      {
        id: uuid(),
        href: '/about/team',
        link: 'team',
      },
      {
        id: uuid(),
        href: '/about/team/staff',
        link: 'staff',
      },
      {
        id: uuid(),
        href: '/about/operations',
        link: 'operations',
      },
      {
        id: uuid(),
        href: '/about/faqs',
        link: 'faqs',
      },
    ],
  },
  {
    id: uuid(),
    href: '/impact',
    link: 'impact',
    sublist: [
      {
        id: uuid(),
        href: '/impact/community',
        link: 'community',
      },
      {
        id: uuid(),
        href: '/impact/partners',
        link: 'partners',
      },
      {
        id: uuid(),
        href: '/impact/customers',
        link: 'customers',
      },
      {
        id: uuid(),
        href: '/impact/animals',
        link: 'animals',
      },
      {
        id: uuid(),
        href: '/impact/media',
        link: 'media',
      },
    ],
  },
  {
    id: uuid(),
    href: '/animal-care',
    link: 'animal care',
    sublist: [
      {
        id: uuid(),
        href: '/animal-care/4df4a7ee-ec7b-434d-b372-09c609182356',
        link: 'neutering',
      },
      {
        id: uuid(),
        href: '/animal-care/38ce979a-20fc-46b5-a8a1-22e1863cda64',
        link: 'deworming',
      },
      {
        id: uuid(),
        href: '/animal-care/2e8a5082-5bbb-41f6-9ec9-183dc3eb1937',
        link: 'rabbies',
      },
      {
        id: uuid(),
        href: '/animal-care/5eaea5f5-d3df-40eb-8093-f761c512a21b',
        link: 'eyes',
      },
      {
        id: uuid(),
        href: '/animal-care/466bbab8-b716-447d-a75a-e7cdc562d184',
        link: 'critical care',
      },
      {
        id: uuid(),
        href: '/animal-care/7d742e22-24a5-491f-89ed-866fe589c132',
        link: 'amputations',
      },
    ],
  },
  {
    id: uuid(),
    href: '/get-involved',
    link: 'get involved',
    sublist: [
      {
        id: uuid(),
        href: '/get-involved/contact?type=volunteer',
        link: 'time',
      },
      {
        id: uuid(),
        href: '/get-involved/contact?type=action',
        link: 'action',
      },
      {
        id: uuid(),
        href: '/donate',
        link: 'donate',
      },
    ],
  },
];
export const companyInfo: CompanyInfoType[] = [
  {
    id: uuid(),
    icon: 'MdLocationOn',
    iconColor: 'var(--accent-color)',
    iconWidth: '50px',
    iconHeight: '100%',
    body: `FLAT NO 5, SABA BUILDING
    297, MANIPADA ROAD
    opposite centrum capital ltd
    kalina, santa cruz east
    mumbai, maharashtra
    400098
    `,
  },
  {
    id: uuid(),
    icon: 'MdLocationOn',
    iconWidth: '50px',
    iconHeight: '100%',
    iconColor: 'var(--accent-color)',
    body: `
      804
      C-WING
      PLOT-D
      ROCK AVENUE CHS LTD
      HINDUSTAN NAKA
      ABOVE ICICI BANK
      KANDIVALI WEST
      mumbai, maharashtra
      400067
    `,
  },
  {
    id: uuid(),
    icon: 'AiFillPhone',
    iconWidth: '50px',
    iconHeight: '100%',
    iconColor: 'var(--accent-color)',
    body: `
      +919892238980
      +919987438980
    `,
  },
  {
    id: uuid(),
    icon: 'AiOutlineMail',
    iconWidth: '50px',
    iconHeight: '100%',
    iconColor: 'var(--accent-color)',
    body: `MISSIONCOMPASSIONFOUNDATION@GMAIL.COM`,
  },
];

export const socials: SocialType[] = [
  {
    id: uuid(),
    icon: 'FaFacebookF',
    iconWidth: '40px',
    iconHeight: '40px',
    iconColor: '#3b5998',
    href: 'https://www.facebook.com/Pawpulation-control-109969384234652/',
  },
  {
    id: uuid(),
    icon: 'AiOutlineInstagram',
    iconWidth: '40px',
    iconHeight: '40px',
    iconColor: 'url(#insta-brg)',
    href: 'https://www.instagram.com/pawpulation_control/?hl=en',
  },
  {
    id: uuid(),
    icon: 'AiOutlineTwitter',
    iconWidth: '40px',
    iconHeight: '40px',
    iconColor: '#00acee',
    href: 'https://twitter.com/MissionCompass1',
  },
  {
    id: uuid(),
    icon: 'AiFillYoutube',
    iconWidth: '40px',
    iconHeight: '40px',
    iconColor: '#FF0000',
    href: 'https://www.youtube.com/channel/UCtpjQiongg27Ir6c_KF8orA',
  },
];
