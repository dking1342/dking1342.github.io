import React, { useEffect, useState } from 'react';
import globalStyles from '@/styles/Global.module.css';
import styles from '@/styles/HeroContact.module.css';
import Hero from './Hero';
import Image from 'next/image';

type Props = {
  type: string | string[] | undefined;
};

const HeroContact = ({ type }: Props) => {
  let [image, setImage] = useState('/cat-2.png');
  let [title, setTitle] = useState('');

  useEffect(() => {
    switch (type) {
      case 'volunteer':
        setImage('/volunteer.png');
        setTitle('Contact us to find out how you can volunteer');
        break;
      case 'partner':
        setImage('/partners-1.png');
        setTitle('We would love to hear from a potential partner');
        break;
      case 'action':
        setImage('/cat-2.png');
        setTitle('Let us know how you would like to take action with us');
        break;
      default:
        break;
    }
  }, [type]);

  return (
    <section className={globalStyles.heroSection}>
      <div className={styles.heroImageContainer}>
        <Image
          src={image}
          alt="hero image"
          className={styles.heroImage}
          fill
          priority
        />
      </div>
      <div className={styles.heroContainer}>
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default HeroContact;
