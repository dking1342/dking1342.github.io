import React from 'react';
import styles from '@/styles/Faqs.module.css';
import { FaqCardType } from '@/types/cards';

type Props = {
  item: FaqCardType;
};

const FaqCard = ({ item }: Props) => {
  const { question, answer } = item;
  return (
    <div className={styles.faqsCardContainer}>
      <h2>Question:</h2>
      <p>{question}</p>
      <h2>Answer:</h2>
      <p>{answer}</p>
    </div>
  );
};

export default FaqCard;
