import Head from 'next/head';
import React from 'react';
import styles from '@/styles/Staff.module.css';
import globalStyles from '@/styles/Global.module.css';
import { staffList } from '@/data/aboutStaff';
import StaffCards from '@/components/cards/StaffCards';
import HeroAbout from '@/components/heros/HeroAbout';

type Props = {};

const staff = (props: Props) => {
  return (
    <>
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
          <StaffCards data={staffList} />
        </section>
      </main>
    </>
  );
};

export default staff;
