import React from 'react';
import styles from '@/styles/FormGroup.module.css';
import { onInputChange } from '@/utils/onInputChange';
import { FormList, FormValues } from '@/types/form';

type Props = {
  item: any;
  formValues: FormValues;
  setFormValues: any;
};

const FormGroup = ({ item, formValues, setFormValues }: Props) => {
  let { classname, name, text, pattern, type, placeholder, required } =
    item as FormList;
  let inputData = formValues[name as keyof typeof formValues] ?? '';
  return (
    <div className={styles[classname]}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        id={name}
        name={name}
        pattern={pattern}
        value={inputData ? inputData.value : ''}
        className={styles.formControl}
        aria-describedby={name}
        placeholder={placeholder}
        onChange={(e) => onInputChange(e, name, formValues, setFormValues)}
        required={required}
      />
      <small className={styles.formGroupError}>
        {inputData ? inputData.error : ''}
      </small>
    </div>
  );
};

export default FormGroup;
