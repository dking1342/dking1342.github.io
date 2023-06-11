import Image from 'next/image';
import React from 'react';
import styles from '@/styles/HeroDonate.module.css';

type Props = {};

const HeroDonate = (props: Props) => {
  return (
    <section className={styles.container}>
      <Image
        src={'/hero-donate.png'}
        alt="donation hero image"
        className={styles.image}
        width={100}
        height={100}
        priority
      />
    </section>
  );
};

export default HeroDonate;
