import React from 'react';
import styles from '@/styles/DonateCard.module.css';

type Props = {};

const DonateCard = (props: Props) => {
  const onDonate = () => {
    console.log('donate btn clicked!');
  };

  return (
    <div className={styles.container}>
      <h1>be the change</h1>
      <p>
        You can help reduce the stray cat population--today. Any amount you are
        able to give will make a difference in the mission to increase the love
        to stray cats
      </p>
      <div className={styles.donationBtnContainer}>
        <div className={styles.donationTextContainer}>
          <span className={styles.donationCurrency}>₹</span>
          <input type="number" max={5000} min={1} placeholder="100" />
        </div>
        <button onClick={() => onDonate()}>donate</button>
      </div>
    </div>
  );
};

export default DonateCard;
