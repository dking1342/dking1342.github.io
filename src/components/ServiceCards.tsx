import { ServiceCardType } from '@/types/cards';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '@/styles/ServiceCards.module.css';
import ServiceCard from './ServiceCard';

type Props = {
  cards: ServiceCardType[];
};

const ServiceCards = ({ cards }: Props) => {
  const router = useRouter();

  return (
    <section className={styles.container}>
      {cards.map((card) => (
        <ServiceCard key={card.id} data={card} />
      ))}
    </section>
  );
};

export default ServiceCards;
