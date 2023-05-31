import React from 'react';
import { ImpactCardType } from '@/types/cards';
import { prefix } from '@/utils/prefix';
import ImpactPage from '@/components/ImpactPage';

type Props = {
  data: ImpactCardType[] | null;
  loading: boolean;
  error: string;
};

export const getServerSideProps = async (context: any) => {
  let loading = false;
  let error = '';
  let data: ImpactCardType[] | null = null;
  const id = context.params.id;
  try {
    loading = true;
    const pref = prefix();
    const url = `${pref.url.API_URL}/api/impact/?type=animals&id=${id}`;
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

const animal = ({ data, loading, error }: Props) => {
  return <ImpactPage data={data} loading={loading} error={error} />;
};

export default animal;
