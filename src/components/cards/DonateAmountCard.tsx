import { DonateAmountType } from '@/types/donate';
import React from 'react';
import styles from '@/styles/Donate.module.css';
import { donateAmountInitialState } from '@/data/formDonate';

type Props = {
  item: DonateAmountType;
  setDonationAmounts: React.Dispatch<React.SetStateAction<DonateAmountType[]>>;
  setDonation: React.Dispatch<React.SetStateAction<number>>;
  setDonateErrorMsg: React.Dispatch<React.SetStateAction<string | null>>;
};

const DonateAmountCard = ({
  item,
  setDonationAmounts,
  setDonation,
  setDonateErrorMsg,
}: Props) => {
  const { id, amount, active } = item;

  const changeDonation = (e: any) => {
    e.preventDefault();
    let initialState = donateAmountInitialState;
    let afterState = [];

    for (const key in initialState) {
      let element = initialState[key];
      if (element.id === id) {
        element = {
          ...element,
          active: true,
        };
      }
      afterState.push(element);
    }
    setDonationAmounts(afterState);
    setDonation(amount);
    setDonateErrorMsg(null);
  };
  return (
    <div className={styles.formGroup}>
      <button
        className={`${styles.formGroupBtn} ${active ? styles.highlight : ''}`}
        onClick={(e) => changeDonation(e)}
      >
        {amount}
      </button>
    </div>
  );
};

export default DonateAmountCard;
