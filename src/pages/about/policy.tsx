import Head from 'next/head';
import React from 'react';
import styles from '@/styles/Policy.module.css';
import globalStyles from '@/styles/Global.module.css';
import HeroAbout from '@/components/heros/HeroAbout';
import MissionTexts from '@/components/cards/MissionTexts';
import { policies } from '@/data/aboutPolicy';

type Props = {};

const policy = (props: Props) => {
  return (
    <>
      <Head>
        <title>Policies</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="mission compassion company policies page"
        />
      </Head>
      <main className={globalStyles.pageStyles}>
        {/* hero section */}
        <HeroAbout page="policy" />
        {/* mission section */}
        <section className={globalStyles.missionSection}>
          <MissionTexts
            color="primary"
            targets={[2, 4]}
            text="Please review our policies"
          />
        </section>
        {/* policies info section */}
        <section className={styles.section}>
          {policies.map((item) => (
            <div key={item.id} className={styles.policies}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
              {item.list ? (
                <ul>
                  {item.list.map((li) => (
                    <li key={li.id}>{li.text}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
          <div className={styles.policies}></div>
        </section>
      </main>
    </>
  );
};

export default policy;
