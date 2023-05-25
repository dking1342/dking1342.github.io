import Head from 'next/head';
import React from 'react';
import styles from '@/styles/AnimalCare.module.css';
import globalStyles from '@/styles/Global.module.css';
import HeroAnimalCare from '@/components/HeroAnimalCare';
import MissionTexts from '@/components/MissionTexts';
import ClipDoubleSide from '@/components/ClipDoubleSide';
import { ServiceCardType } from '@/types/cards';
import { prefix } from '@/utils/prefix';
import Loading from '@/components/Loading';
import ErrorComponent from '@/components/ErrorComponent';
import Link from 'next/link';
import Image from 'next/image';
import ServiceCards from '@/components/ServiceCards';

type Props = {
  data: ServiceCardType[] | null;
  loading: boolean;
  error: string;
};

export const getServerSideProps = async (context: any) => {
  let loading = false;
  let error = '';
  let data: ServiceCardType[] | null = null;
  const url = context.req.url;
  const path = url.split('/').pop().split('.')[0];

  try {
    loading = true;
    const pref = prefix();
    const url = `${pref.url.API_URL}/api/care/`;
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

const animalCare = ({ data, loading, error }: Props) => {
  if (loading) {
    return <Loading />;
  } else if (!loading && error) {
    return <ErrorComponent error={error} />;
  } else if (!loading && data && data.length) {
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
          <HeroAnimalCare />
          {/* mission section */}
          <section className={globalStyles.missionSection}>
            <MissionTexts
              color="primary"
              text="We want to reduce animal suffering and restore a sense of compassion towards them"
              targets={[4, 6, 12]}
            />
          </section>
          <section className={globalStyles.doubleClipSection}>
            <ClipDoubleSide theme="accent">
              <ServiceCards cards={data} />
            </ClipDoubleSide>
          </section>
        </main>
      </section>
    );
  }
};

export default animalCare;
