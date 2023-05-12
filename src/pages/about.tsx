import Head from 'next/head';
import styles from '@/styles/About.module.css';
import Hero from '@/components/Hero';
import Image from 'next/image';
import ClipDoubleSide from '@/components/ClipDoubleSide';
import InfoCard from '@/components/InfoCard';
import LinkBtn from '@/components/LinkBtn';
import ClipV from '@/components/ClipV';
import HeroDonate from '@/components/HeroDonate';
import MissionTexts from '@/components/MissionTexts';
import ClipVInner from '@/components/ClipVInner';

type Props = {};

const About = (props: Props) => {
  return (
    <section>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="mission compassion about page" />
      </Head>
      <main className={styles.aboutPage}>
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
                />{' '}
              </div>
            </div>
          </Hero>
        </section>
        <section className={styles.historySection}>
          <div className={styles.historyMainContainer}>
            <h1>
              <span className={styles.highlight}>2 years</span> of service
            </h1>
            <p>
              What started as a commitment to the stray cats of the city of
              Mumbai has grown into a compassionate non- profit organization
              dedicated to animal care
            </p>
          </div>
          <div className={styles.historySubContainer}>
            <h2>WE ARE, AND ALWAYS HAVE BEEN,</h2>
            <div className={styles.historyMottoContainer}>
              <h3>
                for<br></br>the
              </h3>
              <h4>felines</h4>
            </div>
          </div>
        </section>
        <section className={styles.growthSection}>
          <div className={styles.growthContainer}>
            <h1>GROWTH TO MEET DEMAND</h1>
            <p>
              Our growth has been an unexpected, but reassuring, experience. We
              are immensely grateful and fortunate to be a steward for the
              animals of our city
            </p>
          </div>
        </section>
        <section className={styles.statsSection}>
          <ClipDoubleSide theme="primary">
            <div className={styles.statsContainer}>
              <div className={styles.infoCardsContainer}>
                <div className={styles.infoCardContainer}>
                  <InfoCard
                    theme="primary"
                    title="2"
                    body="PROVIDE CRITICAL AND AFFORDABLE LOCATIONS THAT ANIMAL CARE"
                  />
                </div>
                <div className={styles.infoCardContainer}>
                  <InfoCard
                    theme="primary"
                    title="100%"
                    body="CERTIFIED WITH GOVERNMENT AND FINANCIAL DOCUMENTATION"
                  />
                </div>
              </div>
              <div className={styles.linkContainer}>
                <p>FIND OUT WHY WE ARE SO PASSIONATE</p>
                <LinkBtn
                  href="/about/overview"
                  text="learn more"
                  size="lg"
                  theme="accent"
                />
              </div>
            </div>
          </ClipDoubleSide>
        </section>
        <section className={styles.teamSection}>
          <div className={styles.teamClipContainer}></div>
          <div className={styles.teamContainer}>
            <div className={styles.headshotContainer}>
              <Image
                src={'/headshot-3.png'}
                alt="headshot of president"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div className={styles.teamQuotesContainer}>
              <div className={styles.textContainer}>
                <p className={styles.quoteIcon}>“</p>
                <p className={styles.quoteContent}>
                  It is my greatest delight to be known as a social worker and
                  the purpose of my life is to work for the benefits of social
                  responsibilities. Love is meant to be unconditional and the
                  primary focus is to serve humanity to make the world a little
                  more happy and compassionate.
                </p>
                <div className={styles.quoteAuthorContainer}>
                  <p>Meera Singh</p>
                  <p>President</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.teamSubsection}>
          <div className={styles.teamImageContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={'/teamwork-1.png'}
                alt="teamwork image"
                width={100}
                height={100}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  width: '100%',
                  height: '100%',
                }}
                priority
              />
            </div>
          </div>
          <div className={styles.ctaContainer}>
            <p>
              WE VALUE EACH AND EVERY ONE OF AND COULDN’T DO IT OUR TEAM MEMBERS
              WITHOUT THEM
            </p>
            <LinkBtn
              href="/about/team"
              text="meet team"
              size="lg"
              theme="accent"
            />
          </div>
        </section>
        <section className={styles.donateSection}>
          <div className={styles.donateImageContainer}></div>
          <div className={styles.heroDonateContainer}>
            <HeroDonate />
          </div>
        </section>
        <section className={styles.missionSection}>
          <MissionTexts
            color="primary"
            text="Our doctors and our dedicated animal-loving team members worked throughout the COVID crisis tirelessly so that the street cats don’t suffer and get treated or neutered when it is required"
            targets={[2, 7, 8, 12, 19, 30]}
          />
        </section>
        <section className={styles.faqSection}>
          <div className={styles.ctaContainer}>
            <p>DO YOU HAVE QUESTIONS ABOUT WHAT WE DO AND HOW WE SERVE?</p>
            <LinkBtn href="/" text="READ FAQs" size="lg" theme="primary" />
          </div>
          <div className={styles.faqImageContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={'/faq-1.png'}
                alt="faq image"
                width={100}
                height={100}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  height: '100%',
                  width: '100%',
                }}
                priority
              />
            </div>
          </div>
        </section>
        <section className={styles.missionSection}>
          <MissionTexts
            color="primary"
            text="Our mission remains to identify and appoint staff to catch cats from densely populated areas"
            targets={[2, 5, 7, 11, 15]}
          />
        </section>
        <section className={styles.documentsSection}>
          <ClipV>
            <ClipVInner
              src="/docs-1.png"
              alt="documents section image"
              title="OPERATIONS"
              body="Our operations are geared towards maximizing the animal care we provide and being transparent to the people that put their trust in us"
              href="/"
              btnText="SEE OPERATIONS"
              btnTheme="primary"
            />
          </ClipV>
        </section>
      </main>
    </section>
  );
};

export default About;
