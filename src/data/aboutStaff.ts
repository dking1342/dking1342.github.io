import { StaffType } from '@/types/cards';
import { v4 as uuid } from 'uuid';

export const staffList: StaffType[] = [
  {
    id: uuid(),
    src: '/headshot-team-1.png',
    name: 'Amrita Patel',
    role: 'Executive',
  },
  {
    id: uuid(),
    src: '/headshot-team-2.png',
    name: 'Abhishek Kaur',
    role: 'Executive',
  },
  {
    id: uuid(),
    src: '/headshot-team-3.png',
    name: 'Manish Chopra',
    role: 'Volunteer',
  },
  {
    id: uuid(),
    src: '/headshot-team-4.png',
    name: 'Madhuri Dalal',
    role: 'Executive',
  },
  {
    id: uuid(),
    src: '/headshot-team-5.png',
    name: 'Leela Varma',
    role: 'Volunteer',
  },
];
