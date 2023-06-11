import { DonateAmountType } from '@/types/donate';
import React, { useState } from 'react';
import styles from '@/styles/Donate.module.css';
import DonateAmountCard from './DonateAmountCard';
import { donateAmountInitialState } from '@/data/formDonate';

type Props = {
  data: DonateAmountType[];
  setDonation: React.Dispatch<React.SetStateAction<number>>;
  setDonationAmounts: React.Dispatch<React.SetStateAction<DonateAmountType[]>>;
  donateErrorMsg: string | null;
  setDonateErrorMsg: React.Dispatch<React.SetStateAction<string | null>>;
};

const DonateAmountCards = ({
  data,
  setDonation,
  setDonationAmounts,
  donateErrorMsg,
  setDonateErrorMsg,
}: Props) => {
  const inputChange = (e: any) => {
    e.preventDefault();
    setDonationAmounts(donateAmountInitialState);
    let donation = Number(e.target.value);

    if (donation < 0) {
      setDonateErrorMsg('Donation amount needs to be above 0');
      setDonation(-1);
    } else if (donation > 5000) {
      setDonateErrorMsg('Donation amount cannot be about Rs 5000');
      setDonation(-1);
    } else if (donation > 0 && donation < 5000) {
      setDonateErrorMsg(null);
      setDonation(donation);
    }
  };

  return (
    <>
      <div className={styles.donateAmountCardsContainer}>
        {data.map((item) => (
          <DonateAmountCard
            item={item}
            key={item.id}
            setDonationAmounts={setDonationAmounts}
            setDonation={setDonation}
            setDonateErrorMsg={setDonateErrorMsg}
          />
        ))}
        <div className={styles.formGroupInput}>
          <input
            type="number"
            min="0"
            max="5000"
            placeholder="OTHER"
            pattern="^(?:[1-9]|\d{2,3}|[1-4]\d{3}|5000)$"
            onChange={(e) => inputChange(e)}
          />
          {donateErrorMsg && <small>{donateErrorMsg}</small>}
        </div>
      </div>
    </>
  );
};

export default DonateAmountCards;
