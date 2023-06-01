import { Sublist } from '@/types/navigation';
import React from 'react';
import styles from '@/styles/Footer.module.css';
import Link from 'next/link';

type Props = {
  item: Sublist;
};

const SitemapSubCard = ({ item }: Props) => {
  const { href, link } = item;
  return (
    <li className={styles.subLi}>
      <Link href={href} className={styles.subNavlink}>
        {link}
      </Link>
    </li>
  );
};

export default SitemapSubCard;
