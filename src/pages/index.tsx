import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import globalStyles from '@/styles/Global.module.css';
import MissionText from '@/components/cards/MissionText';
import ImageSection from '@/components/ImageSection';
import Link from 'next/link';
import ClipDoubleSide from '@/components/ui/ClipDoubleSide';
import {
  infoCardGroupOne,
  infoCardGroupThree,
  infoCardGroupTwo,
  quotesArray,
} from '@/data/homePage';
import formStyles from '@/styles/InfoCard.module.css';
import MissionTexts from '@/components/cards/MissionTexts';
import InfoCards from '@/components/cards/InfoCards';
import QuoteCards from '@/components/cards/QuoteCards';
import HeroMain from '@/components/heros/HeroMain';
import ClipSlanted from '@/components/ui/ClipSlanted';
import ClipV from '@/components/ui/ClipV';
import ClipVInner from '@/components/ui/ClipVInner';

type Props = {};

export default function Home(props: Props) {
  return (
    <>
      <Head>
        <title>Mission Compassion</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="mission compassion" />
      </Head>
      <main className={globalStyles.pageStyles}>
        {/* hero section */}
        <HeroMain />
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
              <InfoCards data={infoCardGroupOne} />
              <div className={formStyles.infoCard3}>
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
          <QuoteCards data={quotesArray} />
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
              <InfoCards data={infoCardGroupTwo} />
              <div className={formStyles.infoCard3}>
                <Link href={'about'} className={globalStyles.linkText}>
                  Get to know us
                </Link>
              </div>
            </div>
          </ClipSlanted>
        </section>
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
              <InfoCards data={infoCardGroupThree} />
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
