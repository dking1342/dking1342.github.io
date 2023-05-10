import React, { createElement } from 'react';
import styles from '@/styles/MissionTexts.module.css';
import MissionText from './MissionText';

type Props = {
  text: string;
  targets: number[];
  color: 'primary' | 'secondary';
};

const MissionTexts = ({ color, text, targets }: Props) => {
  return (
    <section className={styles.container}>
      <MissionText text={text} targets={targets} color={color} />
    </section>
  );
};

export default MissionTexts;
