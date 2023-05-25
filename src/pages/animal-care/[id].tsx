import ErrorComponent from '@/components/ErrorComponent';
import Loading from '@/components/Loading';
import { ServiceCardType } from '@/types/cards';
import { prefix } from '@/utils/prefix';
import { useRouter } from 'next/router';
import React from 'react';
import globalStyles from '@/styles/Global.module.css';
import styles from '@/styles/AnimalCarePage.module.css';
import { MdOutlineArrowBack } from 'react-icons/md';
import Image from 'next/image';

type Props = {
  data: ServiceCardType[] | null;
  loading: boolean;
  error: string;
};

export const getServerSideProps = async (context: any) => {
  let loading = false;
  let error = '';
  let data: ServiceCardType[] | null = null;
  const id = context.params.id;
  try {
    loading = true;
    const pref = prefix();
    const url = `${pref.url.API_URL}/api/care/?id=${id}`;
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

const care = ({ data, loading, error }: Props) => {
  const CareComponent = () => {
    const router = useRouter();
    let pathname = router.pathname.split('/');
    pathname.pop();
    let route: string = pathname.join('/');
    if (loading) {
      return <Loading />;
    } else if (!loading && error) {
      return <ErrorComponent error={error} />;
    } else if (!loading && data && data.length) {
      const { id, icon, title, body, link, img } = data[0];
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
              <Image src={img} alt={title} fill priority sizes="100%" />
            </div>
            <div className={styles.body}>
              <h1>{title}</h1>
              <p>{body}</p>
            </div>
          </div>
        </section>
      );
    } else {
      return <ErrorComponent error="Not found" />;
    }
  };
  return <CareComponent />;
};

export default care;
