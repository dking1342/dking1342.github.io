import { ImpactCardType } from '@/types/cards';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '@/styles/ImpactPage.module.css';
import globalStyles from '@/styles/Global.module.css';
import Loading from './Loading';
import ErrorComponent from './ErrorComponent';
import { MdOutlineArrowBack } from 'react-icons/md';
import Image from 'next/image';
import Head from 'next/head';

type Props = {
  data: ImpactCardType[] | null;
  error: string;
  loading: boolean;
};

const ImpactPage = ({ data, error, loading }: Props) => {
  const router = useRouter();
  let pathname = router.pathname.split('/');
  pathname.pop();
  let route: string = pathname.join('/');

  if (loading) {
    return <Loading />;
  } else if (!loading && error) {
    return <ErrorComponent error={error} />;
  } else if (!loading && data && data.length) {
    const { img, header, body, name, date } = data[0];
    return (
      <>
        <Head>
          <title>Impact</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="mission compassion impact page" />
        </Head>
        <section className={globalStyles.impactGradient}>
          <div className={styles.container}>
            <div className={styles.header}>
              <button
                className={globalStyles.link}
                onClick={() => router.push(route)}
              >
                <MdOutlineArrowBack height={24} /> Back
              </button>
              <Image src={img} alt={header} fill priority sizes="100%" />
            </div>
            <div className={styles.body}>
              <h1>{header}</h1>
              <p>{body}</p>
            </div>
            <div className={styles.footer}>
              <div className={styles.footerRow}>
                <Image
                  src={'/heart-logo-transparent.png'}
                  alt="logo"
                  width={60}
                  height={50}
                />
              </div>
              <div className={styles.footerRow}>
                <p className={styles.name}>{name}</p>
                <p className={styles.date}>{date}</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return <ErrorComponent error="Not found" />;
  }
};

export default ImpactPage;
