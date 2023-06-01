import Head from 'next/head';
import styles from '@/styles/Operations.module.css';
import globalStyles from '@/styles/Global.module.css';
import ClipDoubleSide from '@/components/ui/ClipDoubleSide';
import {
  companyInfo,
  documentInfo,
  profileInfo,
} from '@/data/aboutOperationsPage';
import MissionTexts from '@/components/cards/MissionTexts';
import CompanyCards from '@/components/cards/CompanyCards';
import ProfileCards from '@/components/cards/ProfileCards';
import DocumentCards from '@/components/cards/DocumentCards';
import HeroAbout from '@/components/heros/HeroAbout';
import ClipSlanted from '@/components/ui/ClipSlanted';

type Props = {};

const operations = (props: Props) => {
  return (
    <>
      <Head>
        <title>Operations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="mission compassion company operations page"
        />
      </Head>
      <main className={globalStyles.pageStyles}>
        {/* hero section */}
        <HeroAbout page="operations" />
        {/* mission section */}
        <section className={globalStyles.missionSection}>
          <MissionTexts
            color="primary"
            targets={[2, 7, 13, 16]}
            text="We pride ourselves for being an NGO that wants to earn your trust through our transparency"
          />
        </section>
        {/* company info section */}
        <section className={globalStyles.clipSection}>
          <ClipSlanted bg="primary">
            <div className={styles.rowLast}>
              <CompanyCards data={companyInfo} />
            </div>
          </ClipSlanted>
        </section>
        {/* company profile section */}
        <section className={styles.companyProfileSection}>
          <ClipDoubleSide theme="accent">
            <ProfileCards data={profileInfo} />
          </ClipDoubleSide>
        </section>
        {/* documents section */}
        <section className={styles.documentsSection}>
          <ClipDoubleSide theme="primary">
            <DocumentCards data={documentInfo} />
          </ClipDoubleSide>
        </section>
      </main>
    </>
  );
};

export default operations;
