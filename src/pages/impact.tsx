import Head from 'next/head';
import React from 'react';
import globalStyles from '@/styles/Global.module.css';
import styles from '@/styles/Impact.module.css';
import HeroImpact from '@/components/HeroImpact';
import MissionTexts from '@/components/MissionTexts';
import Quotes from '@/components/Quotes';
import ClipDoubleSide from '@/components/ClipDoubleSide';
import Link from 'next/link';
import ClipSlanted from '@/components/ClipSlanted';
import { InfoCardType } from '@/types/cards';
import InfoCard from '@/components/InfoCard';
import ClipV from '@/components/ClipV';
import ClipVInner from '@/components/ClipVInner';
import { QuoteType } from '@/types/quotes';

type Props = {};

const impact = (props: Props) => {
  const infoCardGroup: InfoCardType[] = [
    {
      id: Math.floor(Math.random() * 10000),
      theme: 'primary',
      title: '32',
      body: 'PROJECTS IN OUR COMMUNITY THAT HAS RESULTED IN LESS STRAYS ON THE STREETS',
      classStyle: 'infoCard1',
    },
    {
      id: Math.floor(Math.random() * 10000),
      theme: 'primary',
      title: '17',
      body: 'COMMUNITY LEADERS ADVOCATING ON OUR BEHALF TO PROMOTE SOCIAL CAUSES FOR ANIMALS',
      classStyle: 'infoCard2',
    },
  ];
  const customerQuotes: QuoteType[] = [
    {
      id: Math.floor(Math.random() * 10000),
      order: 'ltr',
      headshot: '/headshot-customer-1.png',
      quote:
        'Mission Compassion taught me how important it is to treat all animals with respect and dignity. The stray I adopted wouldn’t have survived without their compassionate care.',
      author: 'Reena Swati',
    },
    {
      id: Math.floor(Math.random() * 10000),
      order: 'rtl',
      headshot: '/headshot-customer-2.png',
      quote:
        'Mission Compassion has been exceptional at teaching me the importance of how special and unique each animal can be regardless of its afflictions',
      author: 'Malika Laghari',
    },
  ];
  const partnerQuotes: QuoteType[] = [
    {
      id: Math.floor(Math.random() * 10000),
      order: 'ltr',
      headshot: '/headshot-partner-1.png',
      quote:
        'Mission Compassion has been an excellent partner to do business with. They are extremely dedicated to their cause which translates well with our mission.',
      author: 'Vikash Senti',
    },
    {
      id: Math.floor(Math.random() * 10000),
      order: 'rtl',
      headshot: '/headshot-partner-2.png',
      quote:
        'It was a pleasure to work in conjunction with Mission Compassion during our joint projects. The amount of love and compassion they show is why they are called Mission Compassion.',
      author: 'Dimple Shah',
    },
  ];

  return (
    <section>
      <Head>
        <title>Impact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="mission compassion impact page" />
      </Head>
      <main className={globalStyles.pageStyles}>
        {/* hero section */}
        <HeroImpact page="impact" />
        {/* mission section */}
        <section className={globalStyles.missionSection}>
          <MissionTexts
            color="primary"
            text="We encourage individuals to come and help us in any way they can"
            targets={[2, 5, 7, 13]}
          />
        </section>

        <section className={globalStyles.doubleClipSection}>
          <ClipDoubleSide theme="primary">
            <div className={styles.customerImpactContainer}>
              {customerQuotes.map(({ id, headshot, order, quote, author }) => (
                <Quotes
                  key={id}
                  headshot={headshot}
                  order={order}
                  quote={quote}
                  author={author}
                  quoteColor="accent"
                  textColor="secondary"
                />
              ))}
              <Link
                href={'/impact/customers/'}
                className={`${globalStyles.linkText} ${styles.link}`}
              >
                Customer Impact
              </Link>
            </div>
          </ClipDoubleSide>
        </section>
        <section className={globalStyles.missionSection}>
          <MissionTexts
            color="primary"
            text="Over the years we discovered our true passion, which is to help humanity to be a little better"
            targets={[3, 8, 13]}
          />
        </section>
        <section className={globalStyles.clipSlanted}>
          <ClipSlanted bg="primary">
            <div className={globalStyles.slantedContainer}>
              {infoCardGroup.map(({ id, theme, title, body, classStyle }) => (
                <div className={globalStyles[classStyle]} key={id}>
                  <InfoCard theme={theme} title={title} body={body} />
                </div>
              ))}
              <div className={globalStyles.infoCard3}>
                <Link
                  href={'/impact/community'}
                  className={globalStyles.linkText}
                >
                  Community Impact
                </Link>
              </div>
            </div>
          </ClipSlanted>
        </section>
        <section>
          <ClipV>
            <ClipVInner
              src="/impact-animals-2.png"
              alt="woman feeding cat"
              title="How we impact animals?"
              body="By providing affordable and good quality treatment for Indian breeds, we encourage more people to come forward and adopt local breeds. This leads to them having a better life and fewer street animals on the streets."
              href="/impact/animals"
              btnText="animal impact"
              btnTheme="accent"
            />
          </ClipV>
        </section>
        <section className={globalStyles.missionSection}>
          <MissionTexts
            color="primary"
            text="There’s no right moment or time to start serving humanity so we have taken this as my primary responsibility"
            targets={[3, 8, 18]}
          />
        </section>
        <section className={globalStyles.doubleClipSection}>
          <ClipDoubleSide theme="primary">
            <div className={styles.customerImpactContainer}>
              {partnerQuotes.map(({ id, headshot, order, quote, author }) => (
                <Quotes
                  key={id}
                  headshot={headshot}
                  order={order}
                  quote={quote}
                  author={author}
                  quoteColor="accent"
                  textColor="secondary"
                />
              ))}
              <Link
                href={'/impact/partners'}
                className={`${globalStyles.linkText} ${styles.link}`}
              >
                Partner Impact
              </Link>
            </div>
          </ClipDoubleSide>
        </section>
        <section className={globalStyles.missionSection}>
          <MissionTexts
            color="primary"
            text="The more awareness we can create for animals, the more we can see progress"
            targets={[2, 8, 10]}
          />
        </section>
        <section>
          <ClipV>
            <ClipVInner
              src="/impact-media-1.png"
              alt="stack of newspapers"
              title="Media Presence"
              body="Any media coverage we receive is a welcoming situation to get the word out"
              href="/impact/media"
              btnText="media impact"
              btnTheme="accent"
            />
          </ClipV>
        </section>
      </main>
    </section>
  );
};

export default impact;
