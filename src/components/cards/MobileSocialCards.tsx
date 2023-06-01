import React from 'react';
import styles from '@/styles/Navbar.module.css';
import { SocialType } from '@/types/navigation';
import MobileSocialCard from './MobileSocialCard';

type Props = {
  data: SocialType[];
};

const MobileSocialCards = ({ data }: Props) => {
  return (
    <>
      <div className={styles.socialContainer}>
        <h2>follow us</h2>
        <ul className={styles.sociallist}>
          {data.map((item) => (
            <MobileSocialCard item={item} key={item.id} />
          ))}
        </ul>
      </div>
      <svg width="0" height="0">
        <radialGradient id="insta-rg" r="150%" cx="30%" cy="107%">
          <stop stopColor="#fdf497" offset="0" />
          <stop stopColor="#fdf497" offset="0.05" />
          <stop stopColor="#fd5949" offset="0.45" />
          <stop stopColor="#d6249f" offset="0.6" />
          <stop stopColor="#285AEB" offset="0.9" />
        </radialGradient>
      </svg>
    </>
  );
};

export default MobileSocialCards;
