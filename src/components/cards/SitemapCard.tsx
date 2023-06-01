import { Sitemap } from '@/types/navigation';
import React from 'react';
import styles from '@/styles/Footer.module.css';
import Link from 'next/link';

type Props = {
  item: Sitemap;
};

const SitemapCard = ({ item }: Props) => {
  const { id, href, link, sublist } = item;
  return (
    <li className={`${styles.li} ${styles.siteMapLi}`}>
      <Link href={href} className={styles.navlink}>
        {link}
      </Link>
      <ul className={styles.subUl}>
        {sublist.map((sub) => (
          <li key={sub.id} className={styles.subLi}>
            <Link href={sub.href} className={styles.subNavlink}>
              {sub.link}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SitemapCard;
