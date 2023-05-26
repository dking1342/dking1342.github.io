import React, { ReactElement } from 'react';
import styles from '@/styles/HeroMain.module.css';
import globalStyles from '@/styles/Global.module.css';
import HeroDonate from './HeroDonate';
import Hero from './Hero';

type Props = {};

const HeroMain = (props: Props) => {
  return (
    <section className={`${globalStyles.heroSection} ${styles.container}`}>
      <Hero image="/hero-main.png" />
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
      </div>
    </section>
  );
};

export default HeroMain;
