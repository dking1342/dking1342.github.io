import Head from 'next/head';
import React from 'react';
import styles from '@/styles/Donate.module.css';
import HeroDonate from '@/components/heros/HeroDonate';
import FormDonate from '@/components/forms/FormDonate';

type Props = {};

const donate = (props: Props) => {
  return (
    <>
      <Head>
        <title>Donate</title>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="description" content="mission compassion donation page" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <main className={styles.pageContainer}>
        {/* hero section */}
        <HeroDonate />
        <section className={styles.section}>
          <div className={styles.content}>
            <h1>give the cats the life they deserve to live</h1>
            <p>
              the love we show to these animals can be done with your help in
              the form of this donation
            </p>
          </div>
          <FormDonate />
        </section>
      </main>
    </>
  );
};

export default donate;
