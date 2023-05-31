import { InfoCardType } from '@/types/cards';
import { QuoteType } from '@/types/quotes';
import { v4 as uuid } from 'uuid';

export const infoCardGroup: InfoCardType[] = [
  {
    id: uuid(),
    theme: 'primary',
    title: '32',
    body: 'PROJECTS IN OUR COMMUNITY THAT HAS RESULTED IN LESS STRAYS ON THE STREETS',
    classStyle: 'infoCard1',
  },
  {
    id: uuid(),
    theme: 'primary',
    title: '17',
    body: 'COMMUNITY LEADERS ADVOCATING ON OUR BEHALF TO PROMOTE SOCIAL CAUSES FOR ANIMALS',
    classStyle: 'infoCard2',
  },
];
export const customerQuotes: QuoteType[] = [
  {
    id: uuid(),
    order: 'ltr',
    headshot: '/headshot-customer-1.png',
    quote:
      'Mission Compassion taught me how important it is to treat all animals with respect and dignity. The stray I adopted wouldn’t have survived without their compassionate care.',
    author: 'Reena Swati',
  },
  {
    id: uuid(),
    order: 'rtl',
    headshot: '/headshot-customer-2.png',
    quote:
      'Mission Compassion has been exceptional at teaching me the importance of how special and unique each animal can be regardless of its afflictions',
    author: 'Malika Laghari',
  },
];
export const partnerQuotes: QuoteType[] = [
  {
    id: uuid(),
    order: 'ltr',
    headshot: '/headshot-partner-1.png',
    quote:
      'Mission Compassion has been an excellent partner to do business with. They are extremely dedicated to their cause which translates well with our mission.',
    author: 'Vikash Senti',
  },
  {
    id: uuid(),
    order: 'rtl',
    headshot: '/headshot-partner-2.png',
    quote:
      'It was a pleasure to work in conjunction with Mission Compassion during our joint projects. The amount of love and compassion they show is why they are called Mission Compassion.',
    author: 'Dimple Shah',
  },
];
