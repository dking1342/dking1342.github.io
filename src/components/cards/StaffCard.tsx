import React from 'react';
import styles from '@/styles/Staff.module.css';
import { StaffType } from '@/types/cards';
import Image from 'next/image';

type Props = {
  item: StaffType;
};

const StaffCard = ({ item }: Props) => {
  const { src, name, role } = item;

  return (
    <div className={styles.staffCardContainer}>
      <div className={styles.staffCardImageContainer}>
        <Image
          src={src}
          alt={name}
          height={100}
          width={100}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: '50%',
          }}
        />
      </div>
      <div className={styles.staffCardContentContainer}>
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default StaffCard;
