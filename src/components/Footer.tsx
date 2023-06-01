import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
import SitemapCards from './cards/SitemapCards';
import { companyInfo, currentYear, sitemap, socials } from '@/data/navigation';
import CompanyInfoCards from './cards/CompanyInfoCards';
import SocialCards from './cards/SocialCards';
import FormFooter from './forms/FormFooter';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.row}`}>
        <SitemapCards data={sitemap} />
        <CompanyInfoCards data={companyInfo} />
        <SocialCards data={socials} />
        <ul className={`${styles.ul} ${styles.logoUl}`}>
          <li className={styles.li}>
            <Image src={'/main-logo.png'} alt="mission compassion logo" fill />
          </li>
          <li className={styles.li}>
            “Mission compassion foundation” is founded by the visionaries who
            felt the need to build free of cost facilities for stray cats and to
            show gratitude towards social causes by helping the deprived
            creatures of society
          </li>
        </ul>
      </div>
      <div className={`${styles.row}`}>
        <FormFooter />
      </div>
      <div className={styles.row}>
        <p>
          All Rights Reserved | © {currentYear} Mission Compassion Foundation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
