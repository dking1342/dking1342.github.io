import { CompanyInfo, CompanyProfile, DocumentInfo } from '@/types/cards';
import { v4 as uuid } from 'uuid';

export const companyInfo: CompanyInfo[] = [
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
export const profileInfo: CompanyProfile[] = [
  {
    id: uuid(),
    title: 'Income Tax Registration Under Section 12A',
    body: 'AAHTM8993RE20221',
  },
  {
    id: uuid(),
    title: 'Registration',
    body: 'E-36901 (Mumbai)',
  },
  {
    id: uuid(),
    title: 'Foreign Contribution (Regulation) Act,1976',
    body: 'Not Available',
  },
  {
    id: uuid(),
    title: 'Income Tax Registration Under Section 80G',
    body: 'AAHTM8993RF20221',
  },
  {
    id: uuid(),
    title: 'NITI Ayog / NGO Partnership System Registration No',
    body: 'MH/2022/0322119',
  },
  {
    id: uuid(),
    title: 'NGO Type',
    body: 'Trust (Non-Government)',
  },
  {
    id: uuid(),
    title: 'Website',
    body: 'www.missioncompassionfoundation.in',
  },
];
export const documentInfo: DocumentInfo[] = [
  {
    id: uuid(),
    icon: 'HiDocumentText',
    iconWidth: '100px',
    iconHeight: '100%',
    iconColor: 'var(--accent-color)',
    body: `
    REGISTRATION
    CERTIFICATE
    `,
    src: '/registration-certificate.png',
    alt: 'Registration Certificate',
  },
  {
    id: uuid(),
    icon: 'HiDocumentText',
    iconWidth: '100px',
    iconHeight: '100%',
    iconColor: 'var(--accent-color)',
    body: `
    12AA
    CERTIFICATION
    `,
    src: '/12aa-certification-1.png',
    src2: '/12aa-certification-2.png',
    alt: '12AA Certification',
  },
  {
    id: uuid(),
    icon: 'HiDocumentText',
    iconWidth: '100px',
    iconHeight: '100%',
    iconColor: 'var(--accent-color)',
    body: `
    80G
    CERTIFICATION
    `,
    src: '/80G-certification-1.png',
    src2: '/80G-certification-2.png',
    alt: '80G Certification',
  },
  {
    id: uuid(),
    icon: 'HiDocumentText',
    iconWidth: '100px',
    iconHeight: '100%',
    iconColor: 'var(--accent-color)',
    body: `
    ORGANIZATION
    PAN
    `,
    src: '/pan.png',
    alt: 'PAN Card',
  },
];
