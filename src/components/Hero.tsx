import React, { ReactElement } from 'react';
import styles from '@/styles/Hero.module.css';
import Image from 'next/image';

type Props = {
  image: string;
};

const Hero = ({ image }: Props) => {
  return (
    <div className={styles.heroImageContainer}>
      <Image src={image} alt="hero image" className={styles.heroImage} fill />
    </div>
  );
};

export default Hero;
