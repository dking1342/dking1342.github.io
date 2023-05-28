import { FormList, FormValues } from '@/types/form';
import React from 'react';
import styles from '@/styles/FormSelect.module.css';
import { onInputChange } from '@/utils/onInputChange';

type Props = {
  item: any;
  formValues: FormValues;
  setFormValues: any;
};

const FormSelect = ({ item, formValues, setFormValues }: Props) => {
  let { classname, name, text, placeholder, list, required } = item as FormList;
  let inputData = formValues[name as keyof typeof formValues] ?? '';

  if (list) {
    return (
      <div className={styles[classname]}>
        <label htmlFor={name}>{text}</label>
        <select
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={(e) => onInputChange(e, name, formValues, setFormValues)}
          required={required}
          value={inputData ? inputData.value : ''}
        >
          {list.map(({ id, value }) => (
            <option key={id} value={value}>
              {value}
            </option>
          ))}
        </select>
        <small className={styles.formSelectError}>
          {inputData ? inputData.error : ''}
        </small>
      </div>
    );
  } else {
    return null;
  }
};

export default FormSelect;
