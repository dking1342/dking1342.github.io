import { Sitemap } from '@/types/navigation';
import React from 'react';
import styles from '@/styles/Footer.module.css';
import SitemapCard from './SitemapCard';

type Props = {
  data: Sitemap[];
};

const SitemapCards = ({ data }: Props) => {
  return (
    <ul className={`${styles.ul} ${styles.siteMapUl}`}>
      {data.map((item) => (
        <SitemapCard item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default SitemapCards;
