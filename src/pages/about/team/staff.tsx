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
      src: '/headshot-team-1.png',
      name: 'Amrita Patel',
      role: 'Executive',
    },
    {
      id: Math.floor(Math.random() * 10000),
      src: '/headshot-team-2.png',
      name: 'Abhishek Kaur',
      role: 'Executive',
    },
    {
      id: Math.floor(Math.random() * 10000),
      src: '/headshot-team-3.png',
      name: 'Manish Chopra',
      role: 'Volunteer',
    },
    {
      id: Math.floor(Math.random() * 10000),
      src: '/headshot-team-4.png',
      name: 'Madhuri Dalal',
      role: 'Executive',
    },
    {
      id: Math.floor(Math.random() * 10000),
      src: '/headshot-team-5.png',
      name: 'Leela Varma',
      role: 'Volunteer',
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
        <HeroAbout page="staff" />
        {/* staff list section */}
        <section className={styles.staffSection}>
          {/* <h1>our team</h1> */}
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
