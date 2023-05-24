import React from 'react';
import styles from '@/styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { MdLocationOn } from 'react-icons/md';
import {
  AiFillPhone,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

type Props = {};
type Sitemap = {
  id: number;
  href: string;
  link: string;
  sublist: Sublists;
};
type Sitemaps = Sitemap[];
type Sublist = {
  id: number;
  href: string;
  link: string;
};
type Sublists = Sublist[];

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();
  const sitemap: Sitemaps = [
    {
      id: Math.floor(Math.random() * 10000),
      href: '/about',
      link: 'about',
      sublist: [
        {
          id: Math.floor(Math.random() * 10000),
          href: '/about/overview',
          link: 'overview',
        },
        {
          id: Math.floor(Math.random() * 10000),
          href: '/about/team',
          link: 'team',
        },
        {
          id: Math.floor(Math.random() * 10000),
          href: '/about/team/staff',
          link: 'staff',
        },
        {
          id: Math.floor(Math.random() * 10000),
          href: '/about/operations',
          link: 'operations',
        },
        {
          id: Math.floor(Math.random() * 10000),
          href: '/about/faqs',
          link: 'faqs',
        },
      ],
    },
    {
      id: Math.floor(Math.random() * 10000),
      href: '/impact',
      link: 'impact',
      sublist: [
        {
          id: Math.floor(Math.random() * 10000),
          href: '/impact/community',
          link: 'community',
        },
        {
          id: Math.floor(Math.random() * 10000),
          href: '/impact/partners',
          link: 'partners',
        },
        {
          id: Math.floor(Math.random() * 10000),
          href: '/impact/customers',
          link: 'customers',
        },
        {
          id: Math.floor(Math.random() * 10000),
          href: '/impact/animals',
          link: 'animals',
        },
        {
          id: Math.floor(Math.random() * 10000),
          href: '/impact/media',
          link: 'media',
        },
      ],
    },
    {
      id: Math.floor(Math.random() * 10000),
      href: '/animal-care',
      link: 'animal care',
      sublist: [
        { id: Math.floor(Math.random() * 10000), href: '/', link: 'services' },
      ],
    },
    {
      id: Math.floor(Math.random() * 10000),
      href: '/get-involved',
      link: 'get involved',
      sublist: [
        { id: Math.floor(Math.random() * 10000), href: '/', link: 'time' },
        { id: Math.floor(Math.random() * 10000), href: '/', link: 'action' },
        { id: Math.floor(Math.random() * 10000), href: '/', link: 'money' },
      ],
    },
  ];
  const companyinfo = [
    {
      id: Math.floor(Math.random() * 10000),
      icon: <MdLocationOn color="var(--accent-color)" />,
      text: (
        <p>
          FLAT NO 5, SABA BUILDING <br></br>297, MANIPADA ROAD <br></br>{' '}
          opposite centrum capital ltd<br></br> kalina, santa cruz east{' '}
          <br></br> mumbai, maharashtra<br></br> 400098
        </p>
      ),
    },
    {
      id: 2,
      icon: <AiFillPhone color="var(--accent-color)" />,
      text: (
        <p>
          +91 9892238980<br></br>+91 9987438980
        </p>
      ),
    },
    {
      id: 3,
      icon: <AiOutlineMail color="var(--accent-color)" />,
      text: <p>MISSIONCOMPASSIONFOUNDATION@GMAIL.COM</p>,
    },
  ];
  const socials = [
    {
      id: 1,
      name: (
        <FaFacebookF
          color="#3b5998"
          style={{ width: '40px', height: '40px' }}
        />
      ),
      href: 'https://www.facebook.com/Pawpulation-control-109969384234652/',
    },
    {
      id: 2,
      name: (
        <AiOutlineInstagram
          style={{ fill: 'url(#insta-brg)', width: '40px', height: '40px' }}
          color="#962fbf"
        />
      ),
      href: 'https://www.instagram.com/pawpulation_control/?hl=en',
    },
    {
      id: 3,
      name: (
        <AiOutlineTwitter
          fill="#00acee"
          style={{ width: '40px', height: '40px' }}
        />
      ),
      href: 'https://twitter.com/MissionCompass1',
    },
    {
      id: 4,
      name: (
        <AiFillYoutube
          fill="#FF0000"
          style={{ width: '40px', height: '40px' }}
        />
      ),
      href: 'https://www.youtube.com/channel/UCtpjQiongg27Ir6c_KF8orA',
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`${styles.row}`}>
        <ul className={`${styles.ul} ${styles.siteMapUl}`}>
          {sitemap.map((site) => (
            <li key={site.id} className={`${styles.li} ${styles.siteMapLi}`}>
              <Link href={site.href} className={styles.navlink}>
                {site.link}
              </Link>
              <ul className={styles.subUl}>
                {site.sublist.map((sub) => (
                  <li key={sub.id} className={styles.subLi}>
                    <Link href={sub.href} className={styles.subNavlink}>
                      {sub.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <ul className={`${styles.ul} ${styles.companyUl}`}>
          {companyinfo.map((info) => (
            <li key={info.id} className={styles.li}>
              <div className={styles.navlink}>{info.icon}</div>
              <div className={styles.navlink}>
                <>{info.text}</>
              </div>
            </li>
          ))}
        </ul>
        <ul className={`${styles.ul} ${styles.socialsUl}`}>
          {socials.map((social) => (
            <li key={social.id} className={styles.li}>
              <Link href={social.href} className={styles.navlink}>
                {social.name}
              </Link>
            </li>
          ))}
        </ul>
        <svg width="0" height="0">
          <radialGradient id="insta-brg" r="150%" cx="30%" cy="107%">
            <stop stopColor="#fdf497" offset="0" />
            <stop stopColor="#fdf497" offset="0.05" />
            <stop stopColor="#fd5949" offset="0.45" />
            <stop stopColor="#d6249f" offset="0.6" />
            <stop stopColor="#285AEB" offset="0.9" />
          </radialGradient>
        </svg>
        <ul className={`${styles.ul} ${styles.logoUl}`}>
          <li className={styles.li}>
            <Image src={'/main-logo.png'} alt="mission compassion logo" fill />
          </li>
          <li className={styles.li}>
            “Mission compassion foundation” is founded by the visionaries who
            felt the need to build free of cost facilities for stray cats and to
            show gratitude towards social causes by helping the deprived
            creatures of society
          </li>
        </ul>
      </div>
      <div className={`${styles.row}`}>
        <div className={styles.contactContainer}>
          <div className={styles.contactTitleContainer}>
            <h4>Get in touch with us</h4>
            <h5>we love hearing from you</h5>
          </div>
          <div className={styles.contactFormContainer}>
            <div className={styles.textContainer}>
              <label htmlFor="firstname">first name</label>
              <input type="text" id="firstname" name="firstname" />
            </div>
            <div className={styles.textContainer}>
              <label htmlFor="email">email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className={styles.textContainer}>
              <label htmlFor="message">message</label>
              <textarea
                name="message"
                id="message"
                cols={10}
                rows={5}
              ></textarea>
            </div>
          </div>
          <div className={styles.contactCaptchaContainer}>
            <input type="checkbox" />
            <span>i am not a robot</span>
            <Image
              src={'/captcha.png'}
              alt="captcha image"
              width={40}
              height={40}
            />
          </div>
          <div className={styles.contactBtnContainer}>
            <button className={styles.submitBtn}>submit</button>
            <span className={styles.cornerSquare}></span>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <p>
          All Rights Reserved | © {currentYear} Mission Compassion Foundation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
