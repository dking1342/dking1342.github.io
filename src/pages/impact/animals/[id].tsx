import { useRouter } from 'next/router';
import React from 'react';
import styles from '@/styles/ImpactPage.module.css';
import globalStyles from '@/styles/Global.module.css';
import Image from 'next/image';
import { ImpactCardType } from '@/types/cards';
import { MdOutlineArrowBack } from 'react-icons/md';
import Loading from '@/components/Loading';
import ErrorComponent from '@/components/ErrorComponent';

type Props = {
  data: ImpactCardType[] | null;
  loading: boolean;
  error: string;
};

export const getServerSideProps = async (context: any) => {
  let loading = false;
  let error = '';
  let data: ImpactCardType[] | null = null;
  const id = context.params.id;
  try {
    loading = true;
    const url = `http://localhost:3000/api/impact/?type=animals&id=${id}`;
    const response = await fetch(url);
    const payload = await response.json();

    if (payload && payload.data) {
      data = payload.data;
    } else {
      error = 'Error when fetching';
    }
  } catch (e) {
    let err = e as Error;
    error = err.message;
  } finally {
    loading = false;
  }

  return {
    props: {
      data,
      loading,
      error,
    },
  };
};

const animal = ({ data, loading, error }: Props) => {
  const ImpactComponent = () => {
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
      );
    } else {
      return <ErrorComponent error="Not found" />;
    }
  };

  return <ImpactComponent />;
};

export default animal;
