import Head from 'next/head';
import React from 'react';
import styles from '@/styles/Overview.module.css';
import globalStyles from '@/styles/Global.module.css';
import Image from 'next/image';
import ClipDoubleSide from '@/components/ui/ClipDoubleSide';
import { coreValues, infoCardGroupThree } from '@/data/aboutOverviewPage';
import MissionTexts from '@/components/cards/MissionTexts';
import InfoCards from '@/components/cards/InfoCards';
import HeroAbout from '@/components/heros/HeroAbout';

type Props = {};

const overview = (props: Props) => {
  return (
    <>
      <Head>
        <title>Overview</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="mission compassion company overview page"
        />
      </Head>
      <main className={globalStyles.pageStyles}>
        {/* hero section */}
        <HeroAbout page="overview" />
        {/* mission section */}
        <section className={globalStyles.missionSection}>
          <MissionTexts
            color="primary"
            targets={[2, 3, 4, 9, 21, 22, 26, 33]}
            text="The Mission Compassion Foundation was founded by the visionaries who felt the need to build free of cost facilities for stray cats and to show gratitude towards social causes by helping the deprived creatures of society"
          />
        </section>
        {/* governance section */}
        <section className={globalStyles.doubleClipSection}>
          <ClipDoubleSide theme="primary">
            <div className={globalStyles.doubleClipContainer}>
              <InfoCards data={infoCardGroupThree} />
            </div>
          </ClipDoubleSide>
        </section>
        {/* core values section */}
        <section className={styles.coreValuesSection}>
          <h2>core values</h2>
          <div className={styles.coreValuesContainer}>
            {coreValues.map(({ id, src, title, body }) => (
              <div className={styles.coreValueContainer} key={id}>
                <div className={styles.coreValueImageContainer}>
                  <Image src={src} alt={title} width={200} height={200} />
                </div>
                <div className={styles.coreValueContentContainer}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* mission section */}
        <section className={globalStyles.missionSection}>
          <MissionTexts
            color="primary"
            targets={[3, 6, 19, 25]}
            text="We are shaped by our culture. We are true to our mission, values, goals and core values. We believe it is what sets us apart"
          />
        </section>
        {/* logo image section */}
        <section className={styles.logoImageSection}>
          <div className={styles.logoImageContainer}>
            <Image
              src={'/main-logo.png'}
              alt="mission compassion logo"
              width={100}
              height={100}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
                height: 'fit-content',
                position: 'absolute',
                padding: '3rem',
                maxHeight: '700px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default overview;
