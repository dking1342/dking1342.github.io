import { ServiceCardType } from '@/types/cards';
import { useRouter } from 'next/router';
import React from 'react';
import Loading from './Loading';
import ErrorComponent from './ErrorComponent';
import { MdOutlineArrowBack } from 'react-icons/md';
import Image from 'next/image';
import globalStyles from '@/styles/Global.module.css';
import styles from '@/styles/AnimalCarePage.module.css';
import Head from 'next/head';

type Props = {
  data: ServiceCardType[] | null;
  loading: boolean;
  error: string;
};

const AnimalCarePage = ({ data, loading, error }: Props) => {
  const router = useRouter();
  let pathname = router.pathname.split('/');
  pathname.pop();
  let route: string = pathname.join('/');
  if (loading) {
    return <Loading />;
  } else if (!loading && error) {
    return <ErrorComponent error={error} />;
  } else if (!loading && data && data.length) {
    const { title, body, img } = data[0];
    return (
      <>
        <Head>
          <title>Animal Care</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="mission compassion animal care page"
          />
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
              <Image src={img} alt={title} fill priority sizes="100%" />
            </div>
            <div className={styles.body}>
              <h1>{title}</h1>
              <p>{body}</p>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return <ErrorComponent error="Not found" />;
  }
};

export default AnimalCarePage;
