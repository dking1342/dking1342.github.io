import { ServiceCardType } from '@/types/cards';
import { prefix } from '@/utils/prefix';
import React from 'react';
import AnimalCarePage from '@/components/AnimalCarePage';

type Props = {
  data: ServiceCardType[] | null;
  loading: boolean;
  error: string;
};

export const getServerSideProps = async (context: any) => {
  let loading = false;
  let error = '';
  let data: ServiceCardType[] | null = null;
  const id = context.params.id;
  try {
    loading = true;
    const pref = prefix();
    const url = `${pref.url.API_URL}/api/care/?id=${id}`;
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

const care = ({ data, loading, error }: Props) => {
  return <AnimalCarePage data={data} loading={loading} error={error} />;
};

export default care;
