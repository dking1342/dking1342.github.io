import { InfoCardType } from '@/types/cards';
import { QuoteType } from '@/types/quotes';
import { v4 as uuid } from 'uuid';

export const quotesArray: QuoteType[] = [
  {
    id: uuid(),
    order: 'ltr',
    headshot: '/headshot-3.png',
    quote:
      'It is my greatest delight to be known as a social worker and the purpose of my life is to work for the benefits of social responsibilities. Love is meant to be unconditional and the primary focus is to serve humanity to make the world a little more happy and compassionate.',
    author: 'Latika Ahuja',
  },
  {
    id: uuid(),
    order: 'rtl',
    headshot: '/headshot-4.png',
    quote:
      'You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it. That is why no animal can feel defeated as long as Mission Compassion is around.',
    author: 'Keerthi Arya',
  },
];
export const infoCardGroupOne: InfoCardType[] = [
  {
    id: uuid(),
    theme: 'primary',
    title: '6000',
    body: 'STERILIZATIONS OF STREET CATS THE PAST 2 YEARS',
    classStyle: 'infoCard1',
  },
  {
    id: uuid(),
    theme: 'primary',
    title: '350',
    body: 'LEGS AMPUTATED OF CATS THAT HAD EITHER BROKEN OR SEVERELY DAMAGED LIMBS',
    classStyle: 'infoCard2',
  },
];
export const infoCardGroupTwo: InfoCardType[] = [
  {
    id: uuid(),
    theme: 'primary',
    title: '200',
    body: 'EYES THAT HAVE BEEN REMOVED WHICH HAS LED TO THE IMPROVED HEALTH OF CATS',
    classStyle: 'infoCard1',
  },
  {
    id: uuid(),
    theme: 'primary',
    title: '150',
    body: 'CATS THAT WERE DEWORMED AND CAN NOW HAVE PEACE OF MIND IN OUR CITY',
    classStyle: 'infoCard2',
  },
];
export const infoCardGroupThree: InfoCardType[] = [
  {
    id: uuid(),
    theme: 'primary',
    title: '100',
    body: 'CATS GIVEN AN ANTI- RABIES VACCINATION WHICH LEADS TO A HEALTHIER POPULATION',
    classStyle: 'infoCard1',
  },
  {
    id: uuid(),
    theme: 'primary',
    title: '450',
    body: 'ANIMALS GIVEN CRITICAL CARE AT OUR MUMBAI CLINCS AND HELPED SAVE THEIR LIVES',
    classStyle: 'infoCard2',
  },
  {
    id: uuid(),
    theme: 'primary',
    title: '1000+',
    body: 'DONORS THAT HAVE PLEDGED THEIR SUPPORT TO OUR CAUSE',
    classStyle: 'infoCard3',
  },
];
