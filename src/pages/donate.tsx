import Head from 'next/head';
import React from 'react';
import styles from '@/styles/Donate.module.css';
import HeroDonate from '@/components/heros/HeroDonate';
import FormDonate from '@/components/forms/FormDonate';
import { prefix } from '@/utils/prefix';

type Props = {
  data: any;
  loading: boolean;
  error: string;
};

export const getServerSideProps = async (context: any) => {
  let loading = false;
  let error = '';
  let data: any[] | null = null;
  // const url = context.req.url;
  // const path = url.split('/').pop().split('.')[0];

  try {
    loading = true;
    const pref = prefix();
    const url = `${pref.url.API_URL}/api/donate/`;
    const response = await fetch(url);
    const payload = await response.json();

    if (payload && payload.data) {
      data = payload.data;
    } else {
      error = 'Error when fetching';
    }
  } catch (e) {
    let err = e as Error;
    error = err.message;
  } finally {
    loading = false;
  }

  return {
    props: {
      data,
      loading,
      error,
    },
  };
};

const donate = ({ data, loading, error }: Props) => {
  console.log({ data, loading, error });
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
