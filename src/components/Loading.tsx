import React from 'react';
import styles from '@/styles/Loading.module.css';
import Image from 'next/image';

type Props = {};

const Loading = (props: Props) => {
  return (
    <section className={styles.section}>
      <Image src={'/loadingCat.gif'} alt={'loading cat'} fill priority />
    </section>
  );
};

export default Loading;
