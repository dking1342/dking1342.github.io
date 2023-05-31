import Head from 'next/head';
import React from 'react';
import styles from '@/styles/Faqs.module.css';
import globalStyles from '@/styles/Global.module.css';
import HeroAbout from '@/components/HeroAbout';
import { faqsArr } from '@/data/aboutFaqsPage';

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
          <div className={styles.faqsContainer}>
            {faqsArr.map(({ id, question, answer }) => (
              <div className={styles.faqsCardContainer} key={id}>
                <h2>Question:</h2>
                <p>{question}</p>
                <h2>Answer:</h2>
                <p>{answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default faqs;
