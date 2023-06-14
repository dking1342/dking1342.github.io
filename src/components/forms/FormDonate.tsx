import React, { useState } from 'react';
import styles from '@/styles/FormDonate.module.css';
import Image from 'next/image';
import DonateAmountCards from '../cards/DonateAmountCards';
import {
  donateAmount,
  donateInputs,
  donateInputsErrorState,
  donateInputsInitialState,
} from '@/data/formDonate';
import FormSubmit from './FormSubmit';
import DonateInputCards from '../cards/DonateInputCards';
import { SiPaytm } from 'react-icons/si';
import { DonateInputErrorState, DonateInputInitialState } from '@/types/donate';
import { AiFillLock } from 'react-icons/ai';
import { prefix } from '@/utils/prefix';

type Props = {};

const FormDonate = (props: Props) => {
  const [page, setPage] = useState(1);
  const [donation, setDonation] = useState(1000);
  const [donateAmounts, setDonationAmounts] = useState(donateAmount);
  const [donateErrorMsg, setDonateErrorMsg] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<DonateInputInitialState>(
    donateInputsInitialState
  );
  const [formErrorValues, setFormErrorValues] = useState<DonateInputErrorState>(
    donateInputsErrorState
  );

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ donation, formValues }),
    };
    const url = prefix();
    const response = await fetch(`${url.url.API_URL}/api/donate`, options);
    const json = await response.json();
    console.log({ json });
  };

  return (
    <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
      <header className={styles.formHeader}>
        <Image
          src={'/heart-logo-transparent.png'}
          alt="mission compassion logo"
          width={120}
          height={100}
          priority
        />
        <p className={styles.headerTitle}>
          Your gift will help end the abuse that stray cats face
        </p>
        {page === 2 || page === 3 ? (
          <div className={styles.formHeaderDonationAmount}>
            <p>You are giving Rs {donation}</p>
            <button onClick={() => setPage(1)}>change</button>
          </div>
        ) : null}
      </header>
      <div className={styles.formBody}>
        {page === 1 ? (
          <>
            <DonateAmountCards
              data={donateAmounts}
              setDonation={setDonation}
              setDonationAmounts={setDonationAmounts}
              donateErrorMsg={donateErrorMsg}
              setDonateErrorMsg={setDonateErrorMsg}
            />
            <FormSubmit page={page} donation={donation} setPage={setPage} />
          </>
        ) : page === 2 ? (
          <>
            <DonateInputCards
              data={donateInputs}
              formValues={formValues}
              setFormValues={setFormValues}
              formErrorValues={formErrorValues}
              setFormErrorValues={setFormErrorValues}
            />
            <FormSubmit
              page={page}
              donation={donation}
              setPage={setPage}
              formErrors={formErrorValues}
            />
          </>
        ) : (
          <>
            <div className={styles.pageThree}>
              <Image
                src={'/main-logo.png'}
                width={210}
                height={150}
                alt="logo"
              />
            </div>
            <FormSubmit
              page={page}
              donation={donation}
              setPage={setPage}
              onSubmit={(e) => onSubmit(e)}
            />
            <div className={styles.pageThree}>
              <p>
                <span>
                  <AiFillLock className={styles.lock} />
                </span>{' '}
                Secure payment with{' '}
                <span>
                  <SiPaytm className={styles.paytm} />
                </span>
              </p>
            </div>
          </>
        )}
      </div>
      <footer className={styles.formFooter}>
        <p>
          All donations given to The Mission Compassion are eligible for tax
          exemption u/s 80 G of the Income Tax Act, 1961. Our registration
          number is E-36901
        </p>
      </footer>
    </form>
  );
};

export default FormDonate;
