import React from 'react';
import styles from '@/styles/Staff.module.css';
import { StaffType } from '@/types/cards';
import StaffCard from './StaffCard';

type Props = {
  data: StaffType[];
};

const StaffCards = ({ data }: Props) => {
  return (
    <div className={styles.staffCardsContainer}>
      {data.map((item) => (
        <StaffCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default StaffCards;
