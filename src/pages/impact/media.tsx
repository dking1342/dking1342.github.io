import Head from 'next/head';
import React from 'react';
import globalStyles from '@/styles/Global.module.css';
import HeroImpact from '@/components/HeroImpact';
import ImpactCards from '@/components/ImpactCards';
import { ImpactCardType } from '@/types/cards';
import Loading from '@/components/Loading';
import ErrorComponent from '@/components/ErrorComponent';
import { prefix } from '@/utils/prefix';
import ImpactTopicPage from '@/components/ImpactTopicPage';

type Props = {
  data: ImpactCardType[] | null;
  loading: boolean;
  error: string;
};

export const getServerSideProps = async (context: any) => {
  let loading = false;
  let error = '';
  let data: ImpactCardType[] | null = null;
  const url = context.req.url;
  const path = url.split('/').pop().split('.')[0];
  try {
    loading = true;
    const pref = prefix();
    const url = `${pref.url.API_URL}/api/impact/?type=${path}`;
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

const media = ({ data, loading, error }: Props) => {
  return (
    <ImpactTopicPage data={data} loading={loading} error={error} name="Media" />
  );
};

export default media;
