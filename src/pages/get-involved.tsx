import Head from 'next/head';
import React from 'react';
import globalStyles from '@/styles/Global.module.css';
import MissionTexts from '@/components/MissionTexts';
import HeroGetInvolved from '@/components/HeroGetInvolved';
import GetInvolvedCards from '@/components/GetInvolvedCards';
import ClipV from '@/components/ClipV';
import ClipVInner from '@/components/ClipVInner';

type Props = {};

const getInvolved = (props: Props) => {
  return (
    <section>
      <Head>
        <title>Get Involved</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="mission compassion get involved page"
        />
      </Head>
      <main className={globalStyles.pageStyles}>
        {/* hero section */}
        <HeroGetInvolved />
        {/* mission section */}
        <section className={globalStyles.missionSection}>
          <MissionTexts
            color="primary"
            text="There are a few simple ways you can take action for the animals"
            targets={[5, 7, 10]}
          />
        </section>
        <section>
          <GetInvolvedCards />
        </section>
        <section>
          <ClipV>
            <ClipVInner
              src="/impact-img-1.png"
              alt="our impact in the community"
              title="Check out our impact"
              body="If you need to see our impact before getting involved then check out how we have been creating an impact in the community"
              href="/impact"
              btnText="See Impact"
              btnTheme="primary"
            />
          </ClipV>
        </section>
      </main>
    </section>
  );
};

export default getInvolved;
