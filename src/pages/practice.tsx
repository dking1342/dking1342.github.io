import { NavbarArray } from '@/types/navbar';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {
  data: NavbarArray;
  loading: boolean;
  error: string;
};

// export const getStaticProps = async () => {
//   let loading = false;
//   let error = '';
//   let data = [];
//   try {
//     loading = true;
//     const response = await fetch(
//       'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json'
//     );
//     const payload = await response.json();
//     if (payload) {
//       console.log(payload);
//       data = payload;
//     } else {
//       error = 'Error when fetching';
//     }
//   } catch (e) {
//     let err = e as Error;
//     error = err.message;
//   } finally {
//     loading = false;
//   }

//   return {
//     props: {
//       pokemon: data,
//       loading,
//       error,
//     },
//   };
// };

export const getServerSideProps = async () => {
  let loading = false;
  let error = '';
  let data = [];
  try {
    loading = true;
    const response = await fetch('http://localhost:3000/api/navbar');
    const payload = await response.json();
    if (payload) {
      data = payload;
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

const Practice = ({ data, loading, error }: Props) => {
  const [first, setfirst] = useState('name');

  if (loading) {
    return <div>loading...</div>;
  }

  if (!loading && error) {
    return (
      <div>
        <h1>Error happened</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!loading && data.length) {
    return (
      <div>
        <Head>
          <title>Navbar items</title>
        </Head>
        <h1>Navbar</h1>
        <section>
          {/* <div className="bg-image"></div> */}
          <Image
            src="/main-hero.png"
            alt="main hero image"
            fill
            className="bg-img"
          />
          <h2>For the animals</h2>
          <div className="section-container"></div>
          {/* <div>
          </div> */}
        </section>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            modi harum, delectus id labore quos in libero, consequatur totam,
            nihil nemo! Sunt ullam minima provident tenetur, fugiat impedit
            culpa possimus!
          </p>
        </section>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            modi harum, delectus id labore quos in libero, consequatur totam,
            nihil nemo! Sunt ullam minima provident tenetur, fugiat impedit
            culpa possimus!
          </p>
        </section>
      </div>
    );
  }

  // return (
  //   <section>
  //     <h1>about mission compassion is founded by {first}</h1>
  //     <Test />
  //   </section>
  // );
};

export default Practice;
