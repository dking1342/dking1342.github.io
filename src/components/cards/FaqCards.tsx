import { FaqCardType } from '@/types/cards';
import React from 'react';
import FaqCard from './FaqCard';
import styles from '@/styles/Faqs.module.css';

type Props = {
  data: FaqCardType[];
};

const FaqCards = ({ data }: Props) => {
  return (
    <div className={styles.faqsContainer}>
      {data.map((item) => (
        <FaqCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default FaqCards;
