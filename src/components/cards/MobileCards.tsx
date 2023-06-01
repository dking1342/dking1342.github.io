import { NavbarSitemap } from '@/types/navigation';
import React from 'react';
import styles from '@/styles/Navbar.module.css';
import MobileCard from './MobileCard';

type Props = {
  data: NavbarSitemap[];
  mobileClick: () => void;
};

const MobileCards = ({ data, mobileClick }: Props) => {
  return (
    <ul className={styles.mobilelist}>
      {data.map((item) => (
        <MobileCard item={item} mobileClick={mobileClick} key={item.id} />
      ))}
    </ul>
  );
};

export default MobileCards;
