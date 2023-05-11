import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import MissionTexts from '@/components/MissionTexts';
import HeroDonate from '@/components/HeroDonate';
import HeroMain from '@/components/HeroMain';
import ClipSlanted from '@/components/ClipSlanted';
import InfoCard from '@/components/InfoCard';
import MissionText from '@/components/MissionText';
import Quotes from '@/components/Quotes';
import ImageSection from '@/components/ImageSection';
import ClipV from '@/components/ClipV';
import Link from 'next/link';
import ClipVInner from '@/components/ClipVInner';
import ClipDoubleSide from '@/components/ClipDoubleSide';

type Props = {
  mobileToggle: boolean;
};
type InfoCard = {
  id: number;
  theme: 'primary' | 'secondary';
  title: string;
  body: string;
};
type InfoCards = InfoCard[];

type Quote = {
  id: number;
  order: 'ltr' | 'rtl';
  headshot: string;
  quote: string;
  author: string;
};
type QuoteArray = Quote[];

export default function Home({ mobileToggle }: Props) {
  const quotesArray: QuoteArray = [
    {
      id: 1,
      order: 'ltr',
      headshot: '/headshot-1.png',
      quote:
        'It is my greatest delight to be known as a social worker and the purpose of my life is to work for the benefits of social responsibilities. Love is meant to be unconditional and the primary focus is to serve humanity to make the world a little more happy and compassionate.',
      author:
        'Michelle McSwain live in Mumbai with their cat, Julep, and their new son. Michelle is a professional photographer who has voluntarily lent her talents to Mission Compassion. She is a generous Mission Compassion donor, working alongside us to achieve a shared mission.',
    },
    {
      id: 2,
      order: 'rtl',
      headshot: '/headshot-2.png',
      quote:
        'It is my greatest delight to be known as a social worker and the purpose of my life is to work for the benefits of social responsibilities. Love is meant to be unconditional and the primary focus is to serve humanity to make the world a little more happy and compassionate.',
      author:
        'Michelle McSwain live in Mumbai with their cat, Julep, and their new son. Michelle is a professional photographer who has voluntarily lent her talents to Mission Compassion. She is a generous Mission Compassion donor, working alongside us to achieve a shared mission.',
    },
  ];
  const infoCardGroupOne: InfoCards = [
    {
      id: 1,
      theme: 'primary',
      title: '6000',
      body: 'STERILIZATIONS OF STREET CATS THE PAST 2 YEARS',
    },
    {
      id: 2,
      theme: 'primary',
      title: '350',
      body: 'LEGS AMPUTATED OF CATS THAT HAD EITHER BROKEN OR SEVERELY DAMAGED LIMBS',
    },
  ];
  const infoCardGroupTwo: InfoCards = [
    {
      id: 1,
      theme: 'primary',
      title: '200',
      body: 'EYES THAT HAVE BEEN REMOVED WHICH HAS LED TO THE IMPROVED HEALTH OF CATS',
    },
    {
      id: 2,
      theme: 'primary',
      title: '150',
      body: 'CATS THAT WERE DEWORMED AND CAN NOW HAVE PEACE OF MIND IN OUR CITY',
    },
  ];
  const infoCardGroupThree: InfoCards = [
    {
      id: 1,
      theme: 'primary',
      title: '100',
      body: 'CATS GIVEN AN ANTI- RABIES VACCINATION WHICH LEADS TO A HEALTHIER POPULATION',
    },
    {
      id: 2,
      theme: 'primary',
      title: '450',
      body: 'ANIMALS GIVEN CRITICAL CARE AT OUR MUMBAI CLINCS AND HELPED SAVE THEIR LIVES',
    },
    {
      id: 3,
      theme: 'primary',
      title: '1000+',
      body: 'DONORS THAT HAVE PLEDGED THEIR SUPPORT TO OUR CAUSE',
    },
  ];

  return (
    <>
      <Head>
        <title>Mission Compassion</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="mission compassion" />
      </Head>
      <main className={styles.homePage}>
        <section className={styles.heroSection}>
          <HeroMain image="main-hero-1.png">
            <div className={styles.heroContent}>
              <div className={styles.heroTitleContainer}>
                <h1>
                  <span className={styles.heroTitleSide}>
                    for <br></br> the
                  </span>
                  <span className={styles.heroTitle}>felines</span>
                </h1>
                <p className={styles.heroSubtitle}>
                  We exist to create a better world for helpless felines and to
                  encourage more people to adopt
                </p>
              </div>
              <div className={styles.heroMainDonateContainer}>
                <HeroDonate />
              </div>
            </div>
          </HeroMain>
        </section>
        <section className={styles.missionSection}>
          <MissionTexts
            text="Reduce the stray cat population to increase the love they can receive"
            targets={[1, 9]}
            color="primary"
          />
        </section>
        <section className={styles.infoSectionSlanted}>
          <ClipSlanted bg={'primary'}>
            <div className={styles.slantedContainer}>
              {infoCardGroupOne.map(({ id, theme, title, body }) => (
                <div className={styles.slantedCardContainer} key={id}>
                  <InfoCard theme={theme} title={title} body={body} />
                </div>
              ))}
              <div className={styles.slantedCardContainer}>
                <MissionText
                  text={
                    'We aim to improve the conditions for street animals in our city'
                  }
                  targets={[4, 9]}
                  color="secondary"
                />
              </div>
            </div>
          </ClipSlanted>
        </section>
        <section className={styles.imageSection}>
          <ImageSection url={'stray-cat-image-1.png'} />
        </section>
        <section className={styles.quotesSection}>
          <h3>
            Meet our{' '}
            <span>
              <Image
                src={'/heart-logo-transparent.png'}
                alt="logo"
                width={40}
                height={40}
              />
            </span>{' '}
            people
          </h3>
          {quotesArray.map((q) => (
            <Quotes
              key={q.id}
              order={q.order}
              headshot={q.headshot}
              quote={q.quote}
              author={q.author}
            />
          ))}
        </section>
        <section className={styles.impactSection}>
          <h3>our impact</h3>
          <ClipV>
            <ClipVInner
              src="/stray-cat-image-2.png"
              alt="impact image of cat"
              title="TAKING ACTION IN OUR COMMUNITY"
              body="We actively participate in events and awareness that brings
              people’s attention to the underserved and abandoned stray
              animals"
              href="impact"
              btnText="learn more"
              btnTheme="accent"
            />
          </ClipV>
        </section>
        <section className={styles.missionSection}>
          <MissionTexts
            text="We strive to provide give affordable treatment to injured animals in our city"
            targets={[2, 9, 17, 21]}
            color="primary"
          />
        </section>
        <section className={styles.infoSectionSlanted}>
          <ClipSlanted bg="primary">
            <div className={styles.slantedContainer}>
              {infoCardGroupTwo.map(({ id, theme, title, body }) => (
                <div className={styles.slantedCardContainer} key={id}>
                  <InfoCard theme={theme} title={title} body={body} />
                </div>
              ))}
              <div className={styles.slantedCardContainer}>
                <Link href={'about'} className={styles.getToKnowLink}>
                  Get to know us
                </Link>
              </div>
            </div>
          </ClipSlanted>
        </section>
        <section className={styles.donateSection}>
          <div className={styles.donateImageContainer}></div>
          <div className={styles.heroDonateContainer}>
            <HeroDonate />
          </div>
        </section>
        <section className={styles.missionSection}>
          <MissionTexts
            text="We encourage more people to adopt local breeds"
            targets={[2, 6]}
            color="primary"
          />
        </section>
        <section className={styles.servicesSection}>
          <ClipV>
            <ClipVInner
              src="/cat-services-2.png"
              alt="services image for felines"
              title="ANIMALS NEED DIRE ATTENTION"
              body="We specialize in providing the critical care that animals deserve and need. We offer an animal care that includes amputations, sterilizations and more."
              href="services"
              btnText="our services"
              btnTheme="accent"
            />
          </ClipV>
        </section>
        <section className={styles.missionSection}>
          <MissionTexts
            text="We provide good quality treatment that leads to fewer street animals"
            targets={[4, 9, 14]}
            color="primary"
          />
        </section>
        <section className={styles.statsSection}>
          <ClipDoubleSide theme="primary">
            <div className={styles.doubleSideContainer}>
              {infoCardGroupThree.map(({ id, theme, title, body }) => (
                <div className={styles.doubleSideCardContainer} key={id}>
                  <InfoCard theme={theme} title={title} body={body} />
                </div>
              ))}
            </div>
          </ClipDoubleSide>
        </section>
        <section className={styles.getinvolvedSection}>
          <ClipV>
            <ClipVInner
              src="/volunteer-2.png"
              alt="volunteering image"
              title="join us"
              body="You can get involved with our journey to make the world a better place for animals"
              href="get-involved"
              btnText="get involved"
              btnTheme="primary"
            />
          </ClipV>
        </section>
      </main>
    </>
  );
}
