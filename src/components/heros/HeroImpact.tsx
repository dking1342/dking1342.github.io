import React from 'react';
import styles from '@/styles/HeroImpact.module.css';
import globalStyles from '@/styles/Global.module.css';

type Props = {
  page: string;
  subtitle?: string;
};

const HeroImpact = ({ page, subtitle = '' }: Props) => {
  return (
    <section className={`${globalStyles.heroSection} ${styles.container}`}>
      <div className={styles.heroContainer}></div>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>{page}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
    </section>
  );
};

export default HeroImpact;
