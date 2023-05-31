import React from 'react';
import styles from '@/styles/HeroAnimalCare.module.css';
import globalStyles from '@/styles/Global.module.css';
import Hero from './Hero';
import Image from 'next/image';

type Props = {};

const HeroAnimalCare = (props: Props) => {
  return (
    <section className={`${globalStyles.heroSection} ${styles.container}`}>
      <div className={styles.heroGradient}>
        <Image
          src={'/hero-animal-7.png'}
          priority
          width={500}
          height={100}
          alt="hero image"
          style={{
            position: 'absolute',
            height: 'auto',
            minWidth: '250px',
            maxWidth: '750px',
            width: '100%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        />
      </div>
      {/* <div className={styles.heroContainer}>
        <h1>Animal Care</h1>
      </div> */}
    </section>
  );
};

export default HeroAnimalCare;
