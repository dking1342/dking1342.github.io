import React from 'react';
import globalStyles from '@/styles/Global.module.css';
import MissionTexts from '@/components/MissionTexts';

type Props = {};

const contactError = (props: Props) => {
  return (
    <section className={globalStyles.missionSection}>
      <MissionTexts
        color="primary"
        text="There was an error when sending your information. Please try again or email us at our email address in the footer, or give us a call"
        targets={[4, 6, 8, 11, 13, 21, 26]}
      />
    </section>
  );
};

export default contactError;
