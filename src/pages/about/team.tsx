import Hero from '@/components/Hero';
import Head from 'next/head';
import React from 'react';
import styles from '@/styles/Team.module.css';
import Image from 'next/image';
import MissionTexts from '@/components/MissionTexts';
import ClipSlanted from '@/components/ClipSlanted';
import Quotes from '@/components/Quotes';
import Link from 'next/link';
import ClipDoubleSide from '@/components/ClipDoubleSide';
import InfoCard from '@/components/InfoCard';
import ClipV from '@/components/ClipV';
import ClipVInner from '@/components/ClipVInner';

type Props = {};
type TeamMember = {
  id: number;
  src: string;
  name: string;
  role: string;
};
type TeamMembers = TeamMember[];
type Partner = {
  id: number;
  theme: 'primary' | 'secondary';
  title: string;
  body: string;
};
type Partners = Partner[];

const team = (props: Props) => {
  const team: TeamMembers = [
    {
      id: Math.floor(Math.random() * 10000),
      src: '/headshot-1.png',
      name: 'Meera Singh',
      role: 'President',
    },
    {
      id: Math.floor(Math.random() * 10000),
      src: '/headshot-1.png',
      name: 'Akshay Kumar',
      role: 'Vice President',
    },
    {
      id: Math.floor(Math.random() * 10000),
      src: '/headshot-1.png',
      name: 'Toptal Yuna',
      role: 'Director',
    },
    {
      id: Math.floor(Math.random() * 10000),
      src: '/headshot-1.png',
      name: 'Gurav Sita',
      role: 'Manager',
    },
  ];
  const partnersCards: Partners = [
    {
      id: Math.floor(Math.random() * 10000),
      theme: 'secondary',
      title: '7',
      body: 'PARTNERS THAT HAVE BEEN COLLABORATING WITH US TO PROVIDE ANIMAL CARE',
    },
    {
      id: Math.floor(Math.random() * 10000),
      theme: 'secondary',
      title: '250',
      body: 'HOURS SPENT EACH WEEK WITH PARTNERS',
    },
  ];

  return (
    <section>
      <Head>
        <title>Team</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="mission compassion team" />
      </Head>
      <main className={styles.teamPage}>
        <section className={styles.heroSection}>
          <Hero image="/hero-about.png">
            <div className={styles.heroHeaderContainer}>
              <h1>about</h1>
              <h2>mission</h2>
              <h3>vision</h3>
              <h4>values</h4>
              <h5>goals</h5>
              <div className={styles.heroImageContainer}>
                <Image
                  src="/heart-logo-transparent.png"
                  alt="mission compassion logo"
                  height={100}
                  width={100}
                  style={{ height: '100%', width: '100%' }}
                />
              </div>
            </div>
          </Hero>
        </section>
        <section className={styles.missionSection}>
          <MissionTexts
            color="primary"
            targets={[1, 6, 13, 17, 25]}
            text="Love is meant to be unconditional and the primary focus of our team is to serve humanity to make the world a little more happy and compassionate"
          />
        </section>
        <section className={styles.leadershipSection}>
          <ClipSlanted bg="primary">
            <div className={styles.leadershipContainer}>
              <h1>senior leadership</h1>
              <div className={styles.leadershipCardsContainer}>
                {team.map(({ id, src, name, role }) => (
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
        <section className={styles.teamQuotesSection}>
          <h1>what is our team saying?</h1>
          <div className={styles.teamQuotesContainer}>
            <Quotes
              order="ltr"
              headshot="/headshot-1.png"
              quote="THE BEST PART OF MY JOB IS KNOWING I AM MAKING A SUFFERING ANIMALS DIFFERENCE IN THE LIVES OF SUFFERING ANIMALS"
              author="nirupa bhatt"
            />
            <Quotes
              order="rtl"
              headshot="/headshot-2.png"
              quote="I LOVE ANIMALS AND THIS JOB IS ALLOWING ME TO WORK WITH THE MOST ANIMAL LOVING PEOPLE"
              author="vinesh gupta"
            />
          </div>
          <div className={styles.quotesLinkContainer}>
            <Link href={'/'}>Meet the rest of our team</Link>
          </div>
        </section>
        <section className={styles.missionSection}>
          <MissionTexts
            color="primary"
            targets={[3, 12, 13, 21, 27]}
            text="We are interested to tie up with companies falling under the CSR bracket to find our NGO to achieve our mission as social help towards the community"
          />
        </section>
        <section className={styles.statsSection}>
          <ClipDoubleSide theme="accent">
            <div className={styles.infoCardsContainer}>
              {partnersCards.map(({ id, theme, title, body }) => (
                <div className={styles.infoCardContainer} key={id}>
                  <InfoCard theme={`${theme}`} title={title} body={body} />
                </div>
              ))}
            </div>
          </ClipDoubleSide>
        </section>
        <section className={styles.partnersSection}>
          <ClipV>
            <ClipVInner
              src="/partners-1.png"
              alt="partners shaking hands"
              title="PARTNER WITH US"
              body=" We would love to partner with private limited companies which can donate funds and help us achieve our noble cause"
              href="/"
              btnText="CONTACT US"
              btnTheme="primary"
            />
          </ClipV>
        </section>
      </main>
    </section>
  );
};

export default team;
