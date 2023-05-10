import React from 'react';
import styles from '@/styles/LinkBtn.module.css';
import Link from 'next/link';

type Props = {
  text: string;
  size?: 'lg' | 'med' | 'sm';
  theme?: 'primary' | 'accent';
  href: string;
};

const LinkBtn = ({ href, text, size = 'lg', theme = 'accent' }: Props) => {
  let width = '200px';
  let height = '60px';
  let fontSize = '1.25rem';
  let bgColor = '--accent-color';
  let textColor = '--secondary-color';

  let cornerWidth = '30px';
  let cornerHeight = '30px';
  let cornerColor = '--accent-color';
  let cornerFilterBright = 0.75;
  let cornerFilterInvert = 0;

  if (size == 'sm') {
    width = '100px';
    fontSize = '1rem';
    cornerWidth = '20px';
    cornerHeight = '20px';
  } else if (size == 'med') {
    width = '150px';
    fontSize = '1.12rem';
    cornerWidth = '25px';
    cornerHeight = '25px';
  }

  if (theme == 'primary') {
    bgColor = '--primary-color';
    cornerColor = '--primary-color';
    cornerFilterInvert = 0.3;
  } else {
    bgColor = '--accent-color';
    cornerColor = '--accent-color';
    cornerFilterInvert = 0;
  }

  return (
    <button
      className={styles.linkbtn}
      style={{
        width: `${width}`,
        height: `${height}`,
        backgroundColor: `var(${bgColor})`,
        color: `var(${textColor})`,
        fontSize: `${fontSize}`,
      }}
    >
      <span
        className={styles.cornerSquare}
        style={{
          width: `${cornerWidth}`,
          height: `${cornerHeight}`,
          backgroundColor: `var(${cornerColor})`,
          filter: `brightness(${cornerFilterBright}) invert(${cornerFilterInvert})`,
        }}
      ></span>
      <Link href={href}>{text}</Link>
    </button>
  );
};

export default LinkBtn;
