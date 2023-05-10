import React, { ReactElement } from 'react';
import styles from '@/styles/ClipDoubleSide.module.css';

type Props = {
  children: ReactElement;
  theme: 'primary' | 'accent';
};

const ClipDoubleSide = ({ theme, children }: Props) => {
  let bg = '--primary-color';

  if (theme == 'accent') {
    bg = '--accent-color';
  } else {
    bg = '--primary-color';
  }

  return (
    <section className={styles.container}>
      <div
        className={styles.overlay}
        style={{ backgroundColor: `var(${bg})` }}
      ></div>
      {children}
    </section>
  );
};

export default ClipDoubleSide;
