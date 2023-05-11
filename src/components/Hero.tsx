import React, { ReactElement } from 'react';
import styles from '@/styles/Hero.module.css';

type Props = {
  image: string;
  children: ReactElement;
};

const Hero = ({ image, children }: Props) => {
  return (
    <section className={styles.container}>
      <div
        className={styles.heroImage}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {children}
    </section>
  );
};

export default Hero;
