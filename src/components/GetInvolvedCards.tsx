import React from 'react';
import GetInvolvedCard from './GetInvolvedCard';
import { GetInvolvedCardType } from '@/types/cards';
import styles from '@/styles/GetInvolvedCards.module.css';

type Props = {};

const GetInvolvedCards = (props: Props) => {
  const cards: GetInvolvedCardType[] = [
    {
      id: Math.floor(Math.random() * 10000),
      icon: '/icon-time.png',
      title: 'with your time',
      body: 'Chose to spend your time on animals that will only benefit from it',
      link: '/get-involved/contact?type=volunteer',
    },
    {
      id: Math.floor(Math.random() * 10000),
      icon: '/icon-action.png',
      title: 'with your actions',
      body: 'Your actions speak louder than words and for cats in need this means saving them',
      link: '/get-involved/contact?type=action',
    },
    {
      id: Math.floor(Math.random() * 10000),
      icon: '/icon-donate.png',
      title: 'with your donations',
      body: 'We appreciate and are grateful for everyone that finds it in their heart to donate',
      link: '/donate',
    },
  ];

  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <GetInvolvedCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default GetInvolvedCards;
