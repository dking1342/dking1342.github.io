import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import NavbarCards from './cards/NavbarCards';
import { navbarSitemap, socials } from '@/data/navigation';
import MobileCards from './cards/MobileCards';
import MobileSocialCards from './cards/MobileSocialCards';

type Props = {
  mobileToggle: boolean;
  mobileToggleTransition: boolean;
  navbarToggle: boolean;
  onMobileToggle: () => void;
  onMobileClick: () => void;
};

const Navbar = ({
  navbarToggle,
  mobileToggle,
  mobileToggleTransition,
  onMobileClick,
  onMobileToggle,
}: Props) => {
  return (
    <>
      <nav
        className={`${styles.navbar} ${
          !navbarToggle ? styles.navbarSmall : styles.navbarLarge
        } `}
      >
        <div className={styles.navbarTopContainer}>
          <Link
            href={'/'}
            onClick={() => onMobileClick()}
            className={styles.navbarLogo}
          >
            <Image
              src={'/main-logo.png'}
              alt="mission compassion logo"
              width={110}
              height={75}
            />
          </Link>
          <NavbarCards data={navbarSitemap} />
          <Link href={'/donate'} className={styles.donate}>
            donate
          </Link>
          <button
            className={`${styles.mobileToggleBtn} ${
              mobileToggleTransition
                ? styles.mobileToggleBtnOff
                : styles.mobileToggleBtnOn
            } `}
            onClick={() => onMobileToggle()}
          >
            {mobileToggle ? (
              <AiOutlineClose fontSize={25} fontStyle={'bold'} color="#000" />
            ) : (
              <RxHamburgerMenu fontSize={25} fontStyle={'bold'} color="#000" />
            )}
          </button>
        </div>
        <div
          className={
            styles.mobileWindow +
            ' ' +
            (mobileToggle ? styles.mobileWindowOpen : styles.mobileWindowClose)
          }
        >
          <MobileCards data={navbarSitemap} mobileClick={onMobileClick} />
          <MobileSocialCards data={socials} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
