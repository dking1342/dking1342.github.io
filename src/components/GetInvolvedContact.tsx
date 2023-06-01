import React from 'react';
import globalStyles from '@/styles/Global.module.css';
import FormContact from '@/components/forms/FormContact';
import Head from 'next/head';
import { useRouter } from 'next/router';
import HeroContact from './heros/HeroContact';

type Props = {};

const GetInvolvedContact = (props: Props) => {
  const router = useRouter();
  const query = router.query.type;
  const title = query as string;

  return (
    <section className={globalStyles.pageStyles}>
      <Head>
        <title>
          {title
            ? `Contact: ${title?.slice(0, 1).toUpperCase()}${title?.slice(1)}`
            : 'Contact'}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="mission compassion contact page" />
      </Head>
      <HeroContact type={query} />
      <FormContact formType={title} />
    </section>
  );
};

export default GetInvolvedContact;
