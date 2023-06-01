import { GetInvolvedCardType } from '@/types/cards';

export const getInvolvedCards: GetInvolvedCardType[] = [
  {
    id: '0571cc0b-6ca4-4846-af2e-1183a6c692c7',
    icon: 'AiOutlineFieldTime',
    iconWidth: '100px',
    iconHeight: '100px',
    iconColor: 'var(--primary-color)',
    title: 'with your time',
    body: 'Chose to spend your time on animals that will only benefit from it',
    link: '/get-involved/contact?type=volunteer',
  },
  {
    id: '9b0676d6-dc25-4bd9-81fc-664685435b62',
    icon: 'FaRunning',
    iconWidth: '100px',
    iconHeight: '100px',
    iconColor: 'var(--primary-color)',
    title: 'with your actions',
    body: 'Your actions speak louder than words and for cats in need this means saving them',
    link: '/get-involved/contact?type=action',
  },
  {
    id: '020cc8a8-e336-4036-9c0d-966a1f3e4a1e',
    icon: 'MdOutlineHandshake',
    iconWidth: '100px',
    iconHeight: '100px',
    iconColor: 'var(--primary-color)',
    title: 'with your donations',
    body: 'We appreciate and are grateful for everyone that finds it in their heart to donate',
    link: '/donate',
  },
];
