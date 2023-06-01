import { InfoCardType } from '@/types/cards';
import React from 'react';
import InfoCard from './InfoCard';
import styles from '@/styles/InfoCard.module.css';

type Props = {
  data: InfoCardType[];
};

const InfoCards = ({ data }: Props) => {
  return (
    <>
      {data.map((item) => (
        <InfoCard item={item} key={item.id} />
      ))}
    </>
  );
};

export default InfoCards;
