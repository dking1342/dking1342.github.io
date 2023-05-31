import { CoreValueType, InfoCardType } from '@/types/cards';
import { v4 as uuid } from 'uuid';

export const infoCardGroupThree: InfoCardType[] = [
  {
    id: uuid(),
    theme: 'secondary',
    title: 'MISSION',
    body: 'REDUCE THE STRAY CAT POPULATION TO INCREASE THE LOVE THEY CAN RECEIVE',
    classStyle: 'infoCard1',
  },
  {
    id: uuid(),
    theme: 'secondary',
    title: 'VISION',
    body: 'WE WANT TO PROVIDE A WIDE RANGE OF SERVICES THAT CATER TO STRAY ANIMALS IN INDIA WHICH HOLISTICALLY TREAT EACH ANIMAL PATIENT',
    classStyle: 'infoCard2',
  },
  {
    id: uuid(),
    theme: 'secondary',
    title: 'GOALS',
    body: 'OUR PRIMARY GOAL BETTER WORLD FOR IS TO CREATE A THE HELPLESS ENCOURAGE MORE ANIMALS AND PEOPLE TO ADOPT',
    classStyle: 'infoCard3',
  },
];
export const coreValues: CoreValueType[] = [
  {
    id: uuid(),
    src: '/mission.png',
    title: 'compassion',
    body: 'Compassion is in our name and it is the most important behavior we can show',
  },
  {
    id: uuid(),
    src: '/vision.png',
    title: 'change',
    body: 'We know any difference is made through positive change',
  },
  {
    id: uuid(),
    src: '/goal.png',
    title: 'action',
    body: 'Change only takes place through action that is consistent and done with compassion',
  },
];
