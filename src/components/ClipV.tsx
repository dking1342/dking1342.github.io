import React, { ReactElement } from 'react';
import styles from '@/styles/ClipV.module.css';

type Props = {
  children: ReactElement;
};

const ClipV = ({ children }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.overlay}></div>
      {children}
    </section>
  );
};

export default ClipV;
