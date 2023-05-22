import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import globalStyles from '@/styles/Global.module.css';
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
import DonateSection from '@/components/DonateSection';
import { InfoCardType } from '@/types/cards';
import { QuoteType } from '@/types/quotes';

type Props = {
  mobileToggle: boolean;
};

export default function Home(props: Props) {
  const quotesArray: QuoteType[] = [
    {
      id: Math.floor(Math.random() * 10000),
      order: 'ltr',
      headshot: '/headshot-1.png',
      quote:
        'It is my greatest delight to be known as a social worker and the purpose of my life is to work for the benefits of social responsibilities. Love is meant to be unconditional and the primary focus is to serve humanity to make the world a little more happy and compassionate.',
      author:
        'Michelle McSwain live in Mumbai with their cat, Julep, and their new son. Michelle is a professional photographer who has voluntarily lent her talents to Mission Compassion. She is a generous Mission Compassion donor, working alongside us to achieve a shared mission.',
    },
    {
      id: Math.floor(Math.random() * 10000),
      order: 'rtl',
      headshot: '/headshot-2.png',
      quote:
        'It is my greatest delight to be known as a social worker and the purpose of my life is to work for the benefits of social responsibilities. Love is meant to be unconditional and the primary focus is to serve humanity to make the world a little more happy and compassionate.',
      author:
        'Michelle McSwain live in Mumbai with their cat, Julep, and their new son. Michelle is a professional photographer who has voluntarily lent her talents to Mission Compassion. She is a generous Mission Compassion donor, working alongside us to achieve a shared mission.',
    },
  ];
  const infoCardGroupOne: InfoCardType[] = [
    {
      id: Math.floor(Math.random() * 10000),
      theme: 'primary',
      title: '6000',
      body: 'STERILIZATIONS OF STREET CATS THE PAST 2 YEARS',
      classStyle: 'infoCard1',
    },
    {
      id: Math.floor(Math.random() * 10000),
      theme: 'primary',
      title: '350',
      body: 'LEGS AMPUTATED OF CATS THAT HAD EITHER BROKEN OR SEVERELY DAMAGED LIMBS',
      classStyle: 'infoCard2',
    },
  ];
  const infoCardGroupTwo: InfoCardType[] = [
    {
      id: Math.floor(Math.random() * 10000),
      theme: 'primary',
      title: '200',
      body: 'EYES THAT HAVE BEEN REMOVED WHICH HAS LED TO THE IMPROVED HEALTH OF CATS',
      classStyle: 'infoCard1',
    },
    {
      id: Math.floor(Math.random() * 10000),
      theme: 'primary',
      title: '150',
      body: 'CATS THAT WERE DEWORMED AND CAN NOW HAVE PEACE OF MIND IN OUR CITY',
      classStyle: 'infoCard2',
    },
  ];
  const infoCardGroupThree: InfoCardType[] = [
    {
      id: Math.floor(Math.random() * 10000),
      theme: 'primary',
      title: '100',
      body: 'CATS GIVEN AN ANTI- RABIES VACCINATION WHICH LEADS TO A HEALTHIER POPULATION',
      classStyle: 'infoCard1',
    },
    {
      id: Math.floor(Math.random() * 10000),
      theme: 'primary',
      title: '450',
      body: 'ANIMALS GIVEN CRITICAL CARE AT OUR MUMBAI CLINCS AND HELPED SAVE THEIR LIVES',
      classStyle: 'infoCard2',
    },
    {
      id: Math.floor(Math.random() * 10000),
      theme: 'primary',
      title: '1000+',
      body: 'DONORS THAT HAVE PLEDGED THEIR SUPPORT TO OUR CAUSE',
      classStyle: 'infoCard3',
    },
  ];

  return (
    <>
      <Head>
        <title>Mission Compassion</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="mission compassion" />
      </Head>
      <main className={globalStyles.pageStyles}>
        {/* hero section */}
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
        {/* mission section */}
        <section className={globalStyles.missionSection}>
          <MissionTexts
            text="Reduce the stray cat population to increase the love they can receive"
            targets={[1, 9]}
            color="primary"
          />
        </section>
        {/* sub hero section */}
        <section className={globalStyles.clipSection}>
          <ClipSlanted bg={'primary'}>
            <div className={globalStyles.slantedContainer}>
              {infoCardGroupOne.map(
                ({ id, theme, title, body, classStyle }) => (
                  <div className={globalStyles[classStyle]} key={id}>
                    <InfoCard theme={theme} title={title} body={body} />
                  </div>
                )
              )}
              <div className={globalStyles.infoCard3}>
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
        {/* logo image section */}
        <section>
          <ImageSection url={'/main-logo.png'} />
        </section>
        {/* quotes section */}
        <section className={styles.quotesSection}>
          <h3>
            Meet our{' '}
            <span>
              <Image
                src={'/heart-logo-transparent.png'}
                alt="logo"
                className={styles.quotesLogoImage}
                width={50}
                height={50}
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
        {/* impact section */}
        <section>
          <ClipV>
            <ClipVInner
              src="/stray-cat-image-1.png"
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
        {/* mission section */}
        <section className={globalStyles.missionSection}>
          <MissionTexts
            text="We strive to provide give affordable treatment to injured animals in our city"
            targets={[2, 9, 17, 21]}
            color="primary"
          />
        </section>
        {/* about section */}
        <section className={globalStyles.clipSection}>
          <ClipSlanted bg="primary">
            <div className={globalStyles.slantedContainer}>
              {infoCardGroupTwo.map(
                ({ id, theme, title, body, classStyle }) => (
                  <div className={globalStyles[classStyle]} key={id}>
                    <InfoCard theme={theme} title={title} body={body} />
                  </div>
                )
              )}
              <div className={globalStyles.infoCard3}>
                <Link href={'about'} className={styles.getToKnowLink}>
                  Get to know us
                </Link>
              </div>
            </div>
          </ClipSlanted>
        </section>
        {/* donate section */}
        <DonateSection />
        {/* mission section */}
        <section className={globalStyles.missionSection}>
          <MissionTexts
            text="We encourage more people to adopt local breeds"
            targets={[2, 6]}
            color="primary"
          />
        </section>
        {/* services section */}
        <section>
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
        {/* mission section */}
        <section className={globalStyles.missionSection}>
          <MissionTexts
            text="We provide good quality treatment that leads to fewer street animals"
            targets={[4, 9, 14]}
            color="primary"
          />
        </section>
        {/* stats section */}
        <section className={globalStyles.doubleClipSection}>
          <ClipDoubleSide theme="primary">
            <div className={globalStyles.doubleClipContainer}>
              {infoCardGroupThree.map(({ id, theme, title, body }) => (
                <div className={globalStyles.doubleClipCardContainer} key={id}>
                  <InfoCard theme={theme} title={title} body={body} />
                </div>
              ))}
            </div>
          </ClipDoubleSide>
        </section>
        {/* get involved section */}
        <section>
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
