import Head from 'next/head';
import React from 'react';
import globalStyles from '@/styles/Global.module.css';
import formStyles from '@/styles/InfoCard.module.css';
import styles from '@/styles/Impact.module.css';
import ClipDoubleSide from '@/components/ui/ClipDoubleSide';
import Link from 'next/link';
import {
  customerQuotes,
  partnerQuotes,
  infoCardGroup,
} from '@/data/impactPage';
import MissionTexts from '@/components/cards/MissionTexts';
import QuoteCards from '@/components/cards/QuoteCards';
import InfoCards from '@/components/cards/InfoCards';
import HeroImpact from '@/components/heros/HeroImpact';
import ClipSlanted from '@/components/ui/ClipSlanted';
import ClipV from '@/components/ui/ClipV';
import ClipVInner from '@/components/ui/ClipVInner';

type Props = {};

const impact = (props: Props) => {
  return (
    <>
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
              <QuoteCards data={customerQuotes} />
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
              <InfoCards data={infoCardGroup} />
              <div className={formStyles.infoCard3}>
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
              <QuoteCards data={partnerQuotes} />
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
    </>
  );
};

export default impact;
