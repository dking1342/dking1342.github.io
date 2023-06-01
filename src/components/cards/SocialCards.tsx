import { SocialType } from '@/types/navigation';
import React from 'react';
import styles from '@/styles/Footer.module.css';
import SocialCard from './SocialCard';

type Props = {
  data: SocialType[];
};

const SocialCards = ({ data }: Props) => {
  return (
    <ul className={`${styles.ul} ${styles.socialsUl}`}>
      {data.map((item) => (
        <SocialCard item={item} key={item.id} />
      ))}
      <svg width="0" height="0">
        <radialGradient id="insta-brg" r="150%" cx="30%" cy="107%">
          <stop stopColor="#fdf497" offset="0" />
          <stop stopColor="#fdf497" offset="0.05" />
          <stop stopColor="#fd5949" offset="0.45" />
          <stop stopColor="#d6249f" offset="0.6" />
          <stop stopColor="#285AEB" offset="0.9" />
        </radialGradient>
      </svg>
    </ul>
  );
};

export default SocialCards;
