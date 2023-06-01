import { Sublist } from '@/types/navigation';
import React from 'react';
import styles from '@/styles/Footer.module.css';
import SitemapSubCard from './SitemapSubCard';

type Props = {
  data: Sublist[];
};

const SitemapSubCards = ({ data }: Props) => {
  return (
    <ul className={styles.subUl}>
      {data.map((item) => (
        <SitemapSubCard item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default SitemapSubCards;
