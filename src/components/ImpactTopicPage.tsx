import { ImpactCardType } from '@/types/cards';
import React from 'react';
import Loading from './Loading';
import ErrorComponent from './ErrorComponent';
import Head from 'next/head';
import HeroImpact from './HeroImpact';
import ImpactCards from './ImpactCards';
import globalStyles from '@/styles/Global.module.css';

type Props = {
  data: ImpactCardType[] | null;
  loading: boolean;
  error: string;
  name: string;
};

const ImpactTopicPage = ({ data, loading, error, name }: Props) => {
  if (loading) {
    return <Loading />;
  } else if (!loading && error) {
    return <ErrorComponent error={error} />;
  } else if (!loading && data && data.length) {
    return (
      <>
        <Head>
          <title>Impact: {name}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content={`mission compassion impact page for the ${name}`}
          />
        </Head>
        <main
          className={`${globalStyles.pageStyles} ${globalStyles.impactGradient}`}
        >
          {/* hero section */}
          <HeroImpact page="impact" subtitle={name} />
          {/* customer impacts */}
          <ImpactCards cards={data} />
        </main>
      </>
    );
  } else {
    return <ErrorComponent error="not found" />;
  }
};

export default ImpactTopicPage;
