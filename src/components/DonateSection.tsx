import React from 'react';
import styles from '@/styles/DonateSection.module.css';
import HeroDonate from './heros/HeroDonate';

type Props = {};

function DonateSection({}: Props) {
  return (
    <section className={styles.donateSection}>
      <div className={styles.donateImageContainer}></div>
      <div className={styles.heroDonateContainer}>
        <HeroDonate />
      </div>
    </section>
  );
}

export default DonateSection;
