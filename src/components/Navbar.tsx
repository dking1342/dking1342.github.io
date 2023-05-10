import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import {
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

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
  const navitems = [
    { id: 1, name: 'about', href: 'about' },
    { id: 2, name: 'impact', href: 'impact' },
    { id: 3, name: 'animal care', href: 'animal-care' },
    { id: 4, name: 'get involved', href: 'get-involved' },
  ];
  const mobileitems = [
    {
      id: 1,
      name: <FaFacebookF color="#3b5998" />,
      style: 'socialFacebook',
      href: 'https://www.facebook.com/Pawpulation-control-109969384234652/',
    },
    {
      id: 2,
      name: (
        <AiOutlineInstagram
          style={{ fill: 'url(#insta-rg)' }}
          color="#962fbf"
        />
      ),
      style: 'socialInstagram',
      href: 'https://www.instagram.com/pawpulation_control/?hl=en',
    },
    {
      id: 3,
      name: <AiOutlineTwitter fill="#00acee" />,
      style: 'socialTwitter',
      href: 'https://twitter.com/MissionCompass1',
    },
    {
      id: 4,
      name: <AiFillYoutube fill="#FF0000" />,
      style: 'socialYoutube',
      href: 'https://www.youtube.com/channel/UCtpjQiongg27Ir6c_KF8orA',
    },
  ];

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
          <ul className={styles.navlist}>
            {navitems.map((item) => (
              <li key={item.id} className={styles.navitem}>
                <Link href={item.href} className={styles.navlink}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
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
          <ul className={styles.mobilelist}>
            {navitems.map((item) => (
              <li key={item.id} className={styles.mobileitem}>
                <Link
                  href={item.href}
                  className={styles.mobilelink}
                  onClick={() => onMobileClick()}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.socialContainer}>
            <h2>follow us</h2>
            <ul className={styles.sociallist}>
              {mobileitems.map((mobile) => (
                <li key={mobile.id}>
                  <a href={mobile.href} className={`${mobile.style}`}>
                    {mobile.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <svg width="0" height="0">
            <radialGradient id="insta-rg" r="150%" cx="30%" cy="107%">
              <stop stopColor="#fdf497" offset="0" />
              <stop stopColor="#fdf497" offset="0.05" />
              <stop stopColor="#fd5949" offset="0.45" />
              <stop stopColor="#d6249f" offset="0.6" />
              <stop stopColor="#285AEB" offset="0.9" />
            </radialGradient>
          </svg>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
