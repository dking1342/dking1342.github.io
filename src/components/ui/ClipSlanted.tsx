import React, { ReactElement } from 'react';
import styles from '@/styles/ClipSlanted.module.css';

type Props = {
  bg: 'accent' | 'primary';
  children: ReactElement;
};

const ClipSlanted = ({ bg = 'primary', children }: Props) => {
  let bgColor = '';

  if (bg == 'accent') {
    bgColor = '--accent-color';
  } else if (bg == 'primary') {
    bgColor = '--primary-color';
  } else {
    bgColor = '--primary-color';
  }

  return (
    <section className={styles.container}>
      <div
        style={{ backgroundColor: `var(${bgColor})` }}
        className={styles.overlay}
      ></div>
      {children}
    </section>
  );
};

export default ClipSlanted;
