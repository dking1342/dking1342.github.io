import Image from 'next/image';
import React from 'react';
import styles from '@/styles/Error.module.css';
import { MdOutlineArrowBack } from 'react-icons/md';
import { useRouter } from 'next/router';

type Props = {
  error: string;
};

const Error = ({ error }: Props) => {
  const router = useRouter();

  return (
    <section className={styles.section}>
      <button className={styles.link} onClick={() => router.back()}>
        <MdOutlineArrowBack height={24} /> Back
      </button>
      <Image src={'/error.gif'} alt={error} fill priority />
    </section>
  );
};

export default Error;
