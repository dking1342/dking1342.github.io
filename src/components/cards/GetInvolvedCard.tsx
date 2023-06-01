import { GetInvolvedCardType } from '@/types/cards';
import React from 'react';
import styles from '@/styles/GetInvolvedCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../icons/Icon';

type Props = {
  item: GetInvolvedCardType;
};

const GetInvolvedCard = ({ item }: Props) => {
  const { icon, iconWidth, iconHeight, iconColor, title, body, link } = item;

  return (
    <div className={styles.container}>
      <header>
        <Icon
          name={icon}
          width={iconWidth}
          height={iconHeight}
          color={iconColor}
        />
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
