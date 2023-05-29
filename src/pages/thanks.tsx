import MissionTexts from '@/components/MissionTexts';
import React from 'react';
import globalStyles from '@/styles/Global.module.css';

type Props = {};

const thanks = (props: Props) => {
  return (
    <section className={globalStyles.missionSection}>
      <MissionTexts
        color="primary"
        text="Thank you for getting in touch with us. We value your input and will reply back soon"
        targets={[1, 2, 10, 12, 15]}
      />
    </section>
  );
};

export default thanks;
