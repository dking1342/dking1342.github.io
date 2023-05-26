import { GetInvolvedCardType } from '@/types/cards';
import React from 'react';
import styles from '@/styles/GetInvolvedCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  card: GetInvolvedCardType;
};

const GetInvolvedCard = ({ card }: Props) => {
  const { id, icon, title, body, link } = card;

  return (
    <div className={styles.container}>
      <header>
        <Image src={icon} alt={title} width={100} height={100} />
      </header>
      <div className={styles.body}>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <footer className={styles.footer}>
        <Link href={link}>learn more</Link>
      </footer>
    </div>
  );
};

export default GetInvolvedCard;
