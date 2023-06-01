import React from 'react';
import globalStyles from '@/styles/Global.module.css';
import styles from '@/styles/HeroGetInvolved.module.css';

type Props = {};

const HeroGetInvolved = (props: Props) => {
  return (
    <section className={`${globalStyles.heroSection} ${styles.container}`}>
      <div className={styles.heroContainer}></div>
      {/* <div className={styles.headerContainer}> */}
      {/* <h1 className={styles.header}>get involved</h1> */}
      {/* <h2 className={styles.subtitle}>{subtitle}</h2> */}
      {/* </div> */}
    </section>
  );
};

export default HeroGetInvolved;
