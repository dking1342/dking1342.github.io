import { InfoCardType } from '@/types/cards';
import { v4 as uuid } from 'uuid';

export const infoCardGroup: InfoCardType[] = [
  {
    id: uuid(),
    theme: 'primary',
    title: '2',
    body: 'PROVIDE CRITICAL AND AFFORDABLE LOCATIONS THAT ANIMAL CARE',
    classStyle: 'infoCard1',
  },
  {
    id: uuid(),
    theme: 'primary',
    title: '100%',
    body: 'CERTIFIED WITH GOVERNMENT AND FINANCIAL DOCUMENTATION',
    classStyle: 'infoCard2',
  },
];
