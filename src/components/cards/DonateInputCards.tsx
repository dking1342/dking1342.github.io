import {
  DonateInputErrorState,
  DonateInputInitialState,
  DonateInputType,
} from '@/types/donate';
import React, { useState } from 'react';
import styles from '@/styles/Donate.module.css';
import DonateInputCard from './DonateInputCard';

type Props = {
  data: DonateInputType[];
  formValues: DonateInputInitialState;
  setFormValues: React.Dispatch<React.SetStateAction<DonateInputInitialState>>;
  formErrorValues: DonateInputErrorState;
  setFormErrorValues: React.Dispatch<
    React.SetStateAction<DonateInputErrorState>
  >;
};

const DonateInputCards = ({
  data,
  formValues,
  setFormValues,
  formErrorValues,
  setFormErrorValues,
}: Props) => {
  return (
    <div className={styles.donateInputCardsContainer}>
      {data.map((item) => (
        <DonateInputCard
          key={item.id}
          item={item}
          formValues={formValues}
          setFormValues={setFormValues}
          formErrorValues={formErrorValues}
          setFormErrorValues={setFormErrorValues}
        />
      ))}
    </div>
  );
};

export default DonateInputCards;
