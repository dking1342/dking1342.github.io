import React from 'react';
import globalStyles from '@/styles/Global.module.css';
import Head from 'next/head';
import MissionTexts from '@/components/cards/MissionTexts';

type Props = {};

const contactError = (props: Props) => {
  return (
    <section>
      <Head>
        <title>Error</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="mission compassion unsuccessful form submission page"
        />
      </Head>
      <main>
        <section className={globalStyles.missionSection}>
          <MissionTexts
            color="primary"
            text="There was an error when sending your information. Please try again or email us at our email address in the footer, or give us a call"
            targets={[4, 6, 8, 11, 13, 21, 26]}
          />
        </section>
      </main>
    </section>
  );
};

export default contactError;
