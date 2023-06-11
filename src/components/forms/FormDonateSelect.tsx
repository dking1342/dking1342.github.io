import React from 'react';
import styles from '@/styles/FormSelect.module.css';
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

const FormDonateSelect = ({
  item,
  formValues,
  setFormValues,
  formErrorValues,
  setFormErrorValues,
}: Props) => {
  let { classname, name, text, placeholder, pattern, list, required } =
    item as DonateInputType;
  let inputData = formValues[name as keyof typeof formValues] ?? '';
  let errorData = formErrorValues[name as keyof typeof formErrorValues] ?? '';

  if (list) {
    return (
      <div className={styles[classname]}>
        <label htmlFor={name}>{text}</label>
        <select
          name={name}
          id={name}
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
          value={inputData ? inputData : ''}
        >
          {list.map(({ id, value }) => (
            <option key={id} value={value}>
              {value}
            </option>
          ))}
        </select>
        <small>{!errorData ? 'Please fill this field' : ''}</small>
      </div>
    );
  } else {
    return null;
  }
};

export default FormDonateSelect;
