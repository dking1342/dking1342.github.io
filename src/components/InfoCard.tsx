import React from 'react';
import styles from '@/styles/InfoCard.module.css';

type Props = {
  theme: 'primary' | 'secondary';
  title: string;
  body: string;
};

const InfoCard = ({ theme, title, body }: Props) => {
  let color = '';
  let background = '';

  if (theme == 'primary') {
    color = '--primary-color';
    background = '--accent-color';
  } else if (theme == 'secondary') {
    color = '--accent-color';
    background = '--primary-color';
  } else {
    color = '--primary-color';
    background = '--accent-color';
  }

  return (
    <div className={styles.container} style={{ color: `var(${color})` }}>
      <hr
        className={styles.cardBorder}
        style={{ background: `var(${background})` }}
      ></hr>
      <h2 style={{ color: `var(${background})` }}>{title}</h2>
      <p>{body}</p>
      <hr
        className={styles.cardBorder}
        style={{ background: `var(${background})` }}
      ></hr>
    </div>
  );
};

export default InfoCard;
