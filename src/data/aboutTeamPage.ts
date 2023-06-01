import {
  InfoCardType,
  PartnerType,
  QuoteCardType,
  TeamMemberType,
} from '@/types/cards';
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
export const partnersCards: InfoCardType[] = [
  {
    id: uuid(),
    theme: 'secondary',
    title: '7',
    body: 'PARTNERS THAT HAVE BEEN COLLABORATING WITH US TO PROVIDE ANIMAL CARE',
    classStyle: 'infoCard1',
  },
  {
    id: uuid(),
    theme: 'secondary',
    title: '250',
    body: 'HOURS SPENT EACH WEEK WITH PARTNERS',
    classStyle: 'infoCard2',
  },
];

export const quoteCards: QuoteCardType[] = [
  {
    id: uuid(),
    headshot: '/headshot-9.png',
    order: 'ltr',
    quote:
      'The best part of my job is knowing I am making a suffering animals difference in the lives of suffering animals',
    author: 'Nirupa Bhatt',
  },
  {
    id: uuid(),
    headshot: '/headshot-10.png',
    order: 'rtl',
    quote:
      'I love animals and this job is allowing me to work with the most animal loving people',
    author: 'Vinesh Gupta',
  },
];
