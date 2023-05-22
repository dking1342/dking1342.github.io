import React from 'react';
import styles from '@/styles/HeroAbout.module.css';
import globalStyles from '@/styles/Global.module.css';
import Hero from './Hero';
import Image from 'next/image';

type Props = {
  page: string;
};

const HeroAbout = ({ page }: Props) => {
  return (
    <section className={globalStyles.heroSection}>
      <Hero image="/hero-about.png" />
      <div className={styles.heroHeaderContainer}>
        <div className={styles.heroCallContainer}>
          <h1>about</h1>
          <h2>mission</h2>
          <h3>vision</h3>
          <h4>values</h4>
          <h5>goals</h5>
          <div className={styles.heroImageContainer}>
            <Image
              src="/heart-logo-transparent.png"
              alt="mission compassion logo"
              height={100}
              width={100}
              style={{ height: '100%', width: '100%' }}
            />{' '}
          </div>
        </div>
      </div>
      <div className={styles.currentPage}>
        <h1>{page}</h1>
      </div>
    </section>
  );
};

export default HeroAbout;
