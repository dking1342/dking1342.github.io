import Head from 'next/head';
import React from 'react';
import styles from '@/styles/Faqs.module.css';
import globalStyles from '@/styles/Global.module.css';
import { faqsArr } from '@/data/aboutFaqsPage';
import FaqCards from '@/components/cards/FaqCards';
import HeroAbout from '@/components/heros/HeroAbout';

type Props = {};

const faqs = (props: Props) => {
  return (
    <>
      <Head>
        <title>FAQs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="mission compassion frequently asked page"
        />
      </Head>
      <main className={globalStyles.pageStyles}>
        {/* hero section */}
        <HeroAbout page="FAQs" />
        <section className={styles.faqsSection}>
          <h1>
            Frequently Asked{' '}
            <span className={globalStyles.highlight}>Questions</span>
          </h1>
          <FaqCards data={faqsArr} />
        </section>
      </main>
    </>
  );
};

export default faqs;
