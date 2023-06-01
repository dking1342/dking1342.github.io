import React from 'react';
import GetInvolvedCard from './GetInvolvedCard';
import { GetInvolvedCardType } from '@/types/cards';
import styles from '@/styles/GetInvolvedCards.module.css';

type Props = {
  data: GetInvolvedCardType[];
};

const GetInvolvedCards = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <GetInvolvedCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default GetInvolvedCards;
