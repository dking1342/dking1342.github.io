import { ImpactCardType } from '@/types/cards';
import React from 'react';
import ImpactCard from './ImpactCard';
import styles from '@/styles/ImpactCards.module.css';
import globalStyles from '@/styles/Global.module.css';
import { MdOutlineArrowBack } from 'react-icons/md';
import { useRouter } from 'next/router';

type Props = {
  cards: ImpactCardType[];
};

const ImpactCards = ({ cards }: Props) => {
  const router = useRouter();

  return (
    <section className={styles.container}>
      <div>
        <button
          className={globalStyles.link}
          onClick={() => router.push('/impact')}
        >
          <MdOutlineArrowBack height={24} /> Back
        </button>
      </div>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <ImpactCard key={card.id} data={card} />
        ))}
      </div>
    </section>
  );
};

export default ImpactCards;
