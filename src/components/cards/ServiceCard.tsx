import { ServiceCardType } from '@/types/cards';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/ServiceCard.module.css';
import Image from 'next/image';

type Props = {
  data: ServiceCardType;
};

const ServiceCard = ({ data }: Props) => {
  const { id, icon, title } = data;
  return (
    <Link href={`/animal-care/${id}`} className={styles.cardContainer}>
      <hr className={styles.cardBorder}></hr>
      <div className={styles.cardImg}>
        <Image src={icon} alt={title} fill priority sizes="100%" />
      </div>
      <div className={styles.cardBody}>
        <h1 className={styles.header}>{title}</h1>
      </div>
      <hr className={styles.cardBorder}></hr>
    </Link>
  );
};

export default ServiceCard;
