import { NavbarSitemap } from '@/types/navigation';
import React from 'react';
import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';

type Props = {
  item: NavbarSitemap;
  mobileClick: () => void;
};

const MobileCard = ({ item, mobileClick }: Props) => {
  return (
    <li className={styles.mobileitem}>
      <Link
        href={item.href}
        className={styles.mobilelink}
        onClick={() => mobileClick()}
      >
        {item.name}
      </Link>
    </li>
  );
};

export default MobileCard;
