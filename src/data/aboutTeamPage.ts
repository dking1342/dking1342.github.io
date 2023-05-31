import { PartnerType, TeamMemberType } from '@/types/cards';
import { v4 as uuid } from 'uuid';

export const teamCards: TeamMemberType[] = [
  {
    id: uuid(),
    src: '/headshot-5.png',
    name: 'Meera Singh',
    role: 'President',
  },
  {
    id: uuid(),
    src: '/headshot-6.png',
    name: 'Akshay Kumar',
    role: 'Vice President',
  },
  {
    id: uuid(),
    src: '/headshot-7.png',
    name: 'Kavita Chawla',
    role: 'Director',
  },
  {
    id: uuid(),
    src: '/headshot-8.png',
    name: 'Gurav Kohli',
    role: 'Manager',
  },
];
export const partnersCards: PartnerType[] = [
  {
    id: uuid(),
    theme: 'secondary',
    title: '7',
    body: 'PARTNERS THAT HAVE BEEN COLLABORATING WITH US TO PROVIDE ANIMAL CARE',
  },
  {
    id: uuid(),
    theme: 'secondary',
    title: '250',
    body: 'HOURS SPENT EACH WEEK WITH PARTNERS',
  },
];
