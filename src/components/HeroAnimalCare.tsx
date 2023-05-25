import React from 'react';
import styles from '@/styles/HeroAnimalCare.module.css';
import globalStyles from '@/styles/Global.module.css';

type Props = {};

const HeroAnimalCare = (props: Props) => {
  return (
    <section className={`${globalStyles.heroSection} ${styles.container}`}>
      <div className={styles.heroGradient}></div>
      <div className={styles.heroContainer}>
        <h1>Animal Care</h1>
      </div>
    </section>
  );
};

export default HeroAnimalCare;
