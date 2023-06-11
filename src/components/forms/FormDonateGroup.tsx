import React, { useEffect } from 'react';
import styles from '@/styles/FormGroup.module.css';
import { onDonateInputChange } from '@/utils/onInputChange';
import {
  DonateInputErrorState,
  DonateInputInitialState,
  DonateInputType,
} from '@/types/donate';

type Props = {
  item: any;
  formValues: DonateInputInitialState;
  setFormValues: React.Dispatch<React.SetStateAction<DonateInputInitialState>>;
  formErrorValues: DonateInputErrorState;
  setFormErrorValues: React.Dispatch<
    React.SetStateAction<DonateInputErrorState>
  >;
};

const FormDonateGroup = ({
  item,
  formValues,
  setFormValues,
  formErrorValues,
  setFormErrorValues,
}: Props) => {
  let { classname, name, text, pattern, type, placeholder, required } =
    item as DonateInputType;
  let inputData = formValues[name as keyof typeof formValues] ?? '';
  let errorData = formErrorValues[name as keyof typeof formErrorValues] ?? '';

  return (
    <div className={styles[classname]}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        id={name}
        name={name}
        pattern={pattern}
        value={inputData ? inputData : ''}
        className={styles.formControl}
        aria-describedby={name}
        placeholder={placeholder}
        onChange={(e) =>
          onDonateInputChange(
            e,
            name,
            formValues,
            setFormValues,
            formErrorValues,
            setFormErrorValues,
            pattern
          )
        }
        required={required}
      />
      <small>{!errorData ? 'Please fill this field' : ''}</small>
    </div>
  );
};

export default FormDonateGroup;
