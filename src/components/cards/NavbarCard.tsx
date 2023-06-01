import { NavbarSitemap } from '@/types/navigation';
import React from 'react';
import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';
import Icon from '../icons/Icon';

type Props = {
  item: NavbarSitemap;
};

const NavbarCard = ({ item }: Props) => {
  const { name, href } = item;
  return (
    <li className={styles.navitem}>
      <Link href={href} className={styles.navlink}>
        {name}
      </Link>
    </li>
  );
};

export default NavbarCard;
