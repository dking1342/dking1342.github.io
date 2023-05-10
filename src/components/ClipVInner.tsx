import React from 'react';
import styles from '@/styles/ClipVInner.module.css';
import Image from 'next/image';
import LinkBtn from './LinkBtn';

type Props = {
  src: string;
  alt: string;
  title: string;
  body: string;
  href: string;
  btnText: string;
  btnTheme: 'primary' | 'accent';
};

const ClipVInner = ({
  src,
  alt,
  title,
  body,
  href,
  btnText,
  btnTheme,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={src}
          alt={alt}
          sizes="100%"
          fill
          style={{ objectFit: 'cover', objectPosition: 'bottom' }}
        />
      </div>
      <div className={styles.impactContentContainer}>
        <h4>{title}</h4>
        <p>{body}</p>
        <LinkBtn href={href} text={btnText} theme={btnTheme} />
      </div>
    </div>
  );
};

export default ClipVInner;
