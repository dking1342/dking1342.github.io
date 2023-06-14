import React from 'react';
import styles from '@/styles/FormSubmit.module.css';
import { DonateInputErrorState } from '@/types/donate';

import { BiDonateHeart } from 'react-icons/bi';

type Props = {
  page: number;
  donation: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  formErrors?: DonateInputErrorState;
  onSubmit?: (e: any) => void;
};

const FormSubmit = ({
  page,
  donation,
  setPage,
  formErrors,
  onSubmit,
}: Props) => {
  const prevPage = (e: any) => {
    e.preventDefault();
    setPage((prev) => prev - 1);
  };
  const nextPage = (e: any) => {
    e.preventDefault();
    if (page === 1) {
      if (donation > 0 && donation <= 5000) {
        setPage((prev) => prev + 1);
      }
    }
    if (page === 2) {
      const result = Object.values(formErrors!).every((item) => item);
      if (result) {
        setPage((prev) => prev + 1);
      }
    }
  };

  return (
    <div className={styles.formBodyNav}>
      {page === 1 ? (
        <button className={styles.next} onClick={(e) => nextPage(e)}>
          next
        </button>
      ) : page === 2 ? (
        <>
          <button className={styles.back} onClick={(e) => prevPage(e)}>
            back
          </button>
          <button className={styles.next} onClick={(e) => nextPage(e)}>
            next
          </button>
        </>
      ) : page === 3 ? (
        <>
          <button className={styles.back} onClick={(e) => prevPage(e)}>
            back
          </button>
          <button
            type="submit"
            onSubmit={(e) => onSubmit!(e)}
            className={styles.submitBtn}
          >
            <span>
              <BiDonateHeart />
            </span>{' '}
            ₹{donation}
          </button>
        </>
      ) : null}
    </div>
  );
};

export default FormSubmit;
