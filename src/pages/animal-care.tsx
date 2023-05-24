import Head from 'next/head';
import React from 'react';
import globalStyles from '@/styles/Global.module.css';

type Props = {};

const animalCare = (props: Props) => {
  return (
    <section>
      <Head>
        <title>Animal Care</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="mission compassion animal care page"
        />
      </Head>
      <main className={globalStyles.pageStyles}>
        {/* hero section */}
        <h1>animal care</h1>
      </main>
    </section>
  );
};

export default animalCare;
