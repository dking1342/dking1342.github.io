import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { Montserrat } from 'next/font/google';
import { useState } from 'react';
import TopFiller from '@/components/TopFiller';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [mobileToggleTransition, setMobileToggleTransition] = useState(false);
  const [navbarToggle, setNavbarToggle] = useState(false);

  const onMobileToggle = () => {
    setMobileToggle(!mobileToggle);

    if (mobileToggle) {
      document.querySelector('html')!.style.overflowY = '';
    } else {
      document.querySelector('html')!.style.overflowY = 'hidden';
    }

    if (navbarToggle) {
      setTimeout(() => {
        setNavbarToggle(!navbarToggle);
      }, 700);
    } else {
      setNavbarToggle(!navbarToggle);
    }

    setTimeout(() => {
      setMobileToggleTransition(true);
    }, 0);

    setTimeout(() => {
      setMobileToggleTransition(false);
    }, 700);
  };
  const onMobileClick = () => {
    document.querySelector('html')!.style.overflowY = '';

    setMobileToggle(false);
    setTimeout(() => {
      setNavbarToggle(false);
    }, 700);

    setTimeout(() => {
      setMobileToggleTransition(true);
    }, 0);

    setTimeout(() => {
      setMobileToggleTransition(false);
    }, 700);
  };

  return (
    <main className={montserrat.className}>
      <Navbar
        mobileToggle={mobileToggle}
        navbarToggle={navbarToggle}
        mobileToggleTransition={mobileToggleTransition}
        onMobileToggle={onMobileToggle}
        onMobileClick={onMobileClick}
      />
      <TopFiller />
      <Component mobileToggle={mobileToggle} {...pageProps} />
      <Footer />
    </main>
  );
}
