import { QuoteCardType } from '@/types/cards';
import styles from '@/styles/Quotes.module.css';
import Image from 'next/image';
import React from 'react';

type Props = {
  item: QuoteCardType;
};

const QuoteCard = ({ item }: Props) => {
  const {
    order,
    headshot,
    quote,
    author,
    quoteColor = 'primary',
    textColor = 'primary',
  } = item;
  let imageOrder = 1;
  let contentOrder = 2;

  if (order == 'ltr') {
    imageOrder = 1;
    contentOrder = 2;
  } else if (order == 'rtl') {
    imageOrder = 2;
    contentOrder = 1;
  } else {
    imageOrder = 1;
    contentOrder = 2;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer} style={{ order: `${imageOrder}` }}>
        <Image
          src={headshot}
          alt="headshot of employee"
          width={250}
          height={250}
          className={styles.image}
        />
      </div>
      <div
        className={styles.textContainer}
        style={{ order: `${contentOrder}` }}
      >
        <p className={styles[quoteColor]}>“</p>
        <p className={styles[textColor]}>{quote}</p>
        <p className={styles[textColor]}>{author}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
