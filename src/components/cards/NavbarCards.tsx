import { NavbarSitemap } from '@/types/navigation';
import React from 'react';
import styles from '@/styles/Navbar.module.css';
import NavbarCard from './NavbarCard';

type Props = {
  data: NavbarSitemap[];
};

const NavbarCards = ({ data }: Props) => {
  return (
    <ul className={styles.navlist}>
      {data.map((item) => (
        <NavbarCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default NavbarCards;
