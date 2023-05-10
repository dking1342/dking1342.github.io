import React, { ReactElement } from 'react';
import styles from '@/styles/HeroMain.module.css';

type Props = {
  image: string;
  children: ReactElement;
};

const HeroMain = ({ image, children }: Props) => {
  return (
    <section className={styles.container}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={styles.heroImage}
      ></div>
      {children}
    </section>
  );
};

export default HeroMain;
