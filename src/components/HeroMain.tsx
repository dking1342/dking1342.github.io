import React, { ReactElement } from 'react';
import styles from '@/styles/HeroMain.module.css';
import globalStyles from '@/styles/Global.module.css';
import Hero from './Hero';
import Image from 'next/image';

type Props = {};

const HeroMain = (props: Props) => {
  return (
    <section className={`${globalStyles.heroSection} ${styles.container}`}>
      <Hero image="/bg.png" />
      <div className={styles.heroContent}>
        <h1>
          <span className={styles.heroTitleSide}>
            for <br></br> the
          </span>
          <span className={styles.heroTitle}>felines</span>
        </h1>
        <p className={styles.heroSubtitle}>
          We exist to create a better world for helpless felines and to
          encourage more people to adopt
        </p>
        <Image
          src={'/heart-logo-transparent.png'}
          alt="mission compassion logo"
          width={60}
          height={50}
        />
      </div>
    </section>
  );
};

export default HeroMain;
