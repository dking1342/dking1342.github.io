import React from 'react';
import globalStyles from '@/styles/Global.module.css';
import Head from 'next/head';
import MissionTexts from '@/components/cards/MissionTexts';

type Props = {};

const thanks = (props: Props) => {
  return (
    <section>
      <Head>
        <title>Thanks!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="mission compassion successful form submission page"
        />
      </Head>
      <main>
        <section className={globalStyles.missionSection}>
          <MissionTexts
            color="primary"
            text="Thank you for getting in touch with us. We value your input and will reply back soon"
            targets={[1, 2, 10, 12, 15]}
          />
        </section>
      </main>
    </section>
  );
};

export default thanks;
