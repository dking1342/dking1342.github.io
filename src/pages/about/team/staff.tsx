import Head from 'next/head';
import React from 'react';
import styles from '@/styles/Staff.module.css';
import globalStyles from '@/styles/Global.module.css';
import Image from 'next/image';
import { StaffType } from '@/types/cards';
import HeroAbout from '@/components/HeroAbout';

type Props = {};

const staff = (props: Props) => {
  const staffList: StaffType[] = [
    {
      id: Math.floor(Math.random() * 10000),
      src: '/headshot-1.png',
      name: 'Rahul Patel',
      role: 'Operations',
    },
    {
      id: Math.floor(Math.random() * 10000),
      src: '/headshot-1.png',
      name: 'Rahul Patel',
      role: 'Operations',
    },
    {
      id: Math.floor(Math.random() * 10000),
      src: '/headshot-1.png',
      name: 'Rahul Patel',
      role: 'Operations',
    },
    {
      id: Math.floor(Math.random() * 10000),
      src: '/headshot-1.png',
      name: 'Rahul Patel',
      role: 'Operations',
    },
    {
      id: Math.floor(Math.random() * 10000),
      src: '/headshot-1.png',
      name: 'Rahul Patel',
      role: 'Operations',
    },
  ];
  return (
    <section>
      <Head>
        <title>Staff</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="mission compassion staff" />
      </Head>
      <main className={globalStyles.pageStyles}>
        {/* hero section */}
        <HeroAbout />
        {/* staff list section */}
        <section className={styles.staffSection}>
          <h1>our team</h1>
          <div className={styles.staffCardsContainer}>
            {staffList.map(({ id, src, name, role }) => (
              <div className={styles.staffCardContainer} key={id}>
                <div className={styles.staffCardImageContainer}>
                  <Image
                    src={src}
                    alt={name}
                    height={100}
                    width={100}
                    style={{
                      height: '100%',
                      width: '100%',
                      borderRadius: '50%',
                    }}
                  />
                </div>
                <div className={styles.staffCardContentContainer}>
                  <h2>{name}</h2>
                  <p>{role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
};

export default staff;
