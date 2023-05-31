import Head from 'next/head';
import React from 'react';
import styles from '@/styles/Team.module.css';
import globalStyles from '@/styles/Global.module.css';
import Image from 'next/image';
import MissionTexts from '@/components/MissionTexts';
import ClipSlanted from '@/components/ClipSlanted';
import Quotes from '@/components/Quotes';
import Link from 'next/link';
import ClipDoubleSide from '@/components/ClipDoubleSide';
import InfoCard from '@/components/InfoCard';
import ClipV from '@/components/ClipV';
import ClipVInner from '@/components/ClipVInner';
import HeroAbout from '@/components/HeroAbout';
import { partnersCards, teamCards } from '@/data/aboutTeamPage';

type Props = {};

const team = (props: Props) => {
  return (
    <>
      <Head>
        <title>Team</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="mission compassion team" />
      </Head>
      <main className={globalStyles.pageStyles}>
        {/* hero section */}
        <HeroAbout page="leadership" />
        {/* mission section */}
        <section className={globalStyles.missionSection}>
          <MissionTexts
            color="primary"
            targets={[1, 6, 13, 17, 25]}
            text="Love is meant to be unconditional and the primary focus of our team is to serve humanity to make the world a little more happy and compassionate"
          />
        </section>
        {/* leadership styles */}
        <section className={styles.leadershipSection}>
          <ClipSlanted bg="primary">
            <div className={styles.leadershipContainer}>
              <h1>senior leadership</h1>
              <div className={styles.leadershipCardsContainer}>
                {teamCards.map(({ id, src, name, role }) => (
                  <div className={styles.leadershipCardContainer} key={id}>
                    <div className={styles.leadershipCardImageContainer}>
                      <Image
                        src={src}
                        alt={name}
                        width={250}
                        height={250}
                        style={{
                          borderRadius: '50%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                        }}
                      />
                    </div>
                    <div className={styles.leadershipCardContentContainer}>
                      <h2>{name}</h2>
                      <h3>{role}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ClipSlanted>
        </section>
        {/* quotes section */}
        <section className={styles.teamQuotesSection}>
          <h1>what is our team saying?</h1>
          <div className={styles.teamQuotesContainer}>
            <Quotes
              order="ltr"
              headshot="/headshot-9.png"
              quote="THE BEST PART OF MY JOB IS KNOWING I AM MAKING A SUFFERING ANIMALS DIFFERENCE IN THE LIVES OF SUFFERING ANIMALS"
              author="nirupa bhatt"
            />
            <Quotes
              order="rtl"
              headshot="/headshot-10.png"
              quote="I LOVE ANIMALS AND THIS JOB IS ALLOWING ME TO WORK WITH THE MOST ANIMAL LOVING PEOPLE"
              author="vinesh gupta"
            />
          </div>
          <div className={styles.quotesLinkContainer}>
            <Link href={'/about/team/staff'}>Meet the rest of our team</Link>
          </div>
        </section>
        {/* mission section */}
        <section className={globalStyles.missionSection}>
          <MissionTexts
            color="primary"
            targets={[3, 12, 13, 21, 27]}
            text="We are interested to tie up with companies falling under the CSR bracket to find our NGO to achieve our mission as social help towards the community"
          />
        </section>
        {/* stats section */}
        <section className={globalStyles.doubleClipSection}>
          <ClipDoubleSide theme="accent">
            <div className={globalStyles.doubleClipContainer}>
              {partnersCards.map(({ id, theme, title, body }) => (
                <div className={globalStyles.doubleClipCardContainer} key={id}>
                  <InfoCard theme={`${theme}`} title={title} body={body} />
                </div>
              ))}
            </div>
          </ClipDoubleSide>
        </section>
        {/* partners section */}
        <section>
          <ClipV>
            <ClipVInner
              src="/partners-1.png"
              alt="partners shaking hands"
              title="PARTNER WITH US"
              body=" We would love to partner with private limited companies which can donate funds and help us achieve our noble cause"
              href="/get-involved/contact?type=partner"
              btnText="CONTACT US"
              btnTheme="primary"
            />
          </ClipV>
        </section>
      </main>
    </>
  );
};

export default team;
