import React from 'react';
import styles from '@/styles/ImageSection.module.css';
import Image from 'next/image';

type Props = {
  url: string;
};

const ImageSection = ({ url }: Props) => {
  return (
    <div className={styles.imageContainer}>
      <Image src={url} alt="page image" fill />
    </div>
  );
};

export default ImageSection;
