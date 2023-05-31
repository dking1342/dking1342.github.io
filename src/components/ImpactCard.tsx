import { ImpactCardType } from '@/types/cards';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/ImpactCard.module.css';
import { useRouter } from 'next/router';

type Props = {
  data: ImpactCardType;
};

const ImpactCard = ({ data }: Props) => {
  const router = useRouter();
  const { id, img, header, body, name, date, type } = data;

  return (
    <Link href={`/impact/${type}/${id}`} className={styles.cardContainer}>
      <div className={styles.cardImg}>
        <Image src={img} alt={header} fill priority sizes="100%" />
      </div>
      <div className={styles.cardBody}>
        {header.length > 20 ? (
          <h1 className={styles.header}>{header.slice(0, 20)}...</h1>
        ) : (
          <h1 className={styles.header}>{header}</h1>
        )}
        {body.length > 200 ? (
          <p className={styles.body}>{body.slice(0, 200)}...</p>
        ) : (
          <p className={styles.body}>{body}</p>
        )}
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.logoContainer}>
          <Image
            src={'/heart-logo-transparent.png'}
            alt="logo"
            width={60}
            height={50}
          />
        </span>
        {name.length > 14 ? (
          <span className={styles.name}>{name.slice(0, 12)}...</span>
        ) : (
          <span className={styles.name}>{name}</span>
        )}

        <span className={styles.divider}>|</span>
        <span className={styles.date}>{date}</span>
      </div>
    </Link>
  );
};

export default ImpactCard;
