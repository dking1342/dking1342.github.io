import React from 'react';
import styles from '@/styles/ImageSection.module.css';

type Props = {
  url: string;
};

const ImageSection = ({ url }: Props) => {
  return (
    <section className={styles.container}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${url})` }}
      ></div>
    </section>
  );
};

export default ImageSection;
