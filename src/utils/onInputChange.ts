import { DonateInputErrorState, DonateInputInitialState } from '@/types/donate';
import { FormValues } from '@/types/form';
import { useEffect } from 'react';

export const onInputChange = (
  e: any,
  name: string,
  formValues: FormValues,
  setFormValues: any
) => {
  setFormValues({
    ...formValues,
    [name]: {
      ...formValues[name as keyof typeof formValues],
      value: e.target.value,
    },
  });
};

export const onDonateInputChange = (
  e: any,
  name: string,
  formValues: DonateInputInitialState,
  setFormValues: React.Dispatch<React.SetStateAction<DonateInputInitialState>>,
  formErrorValues: DonateInputErrorState,
  setFormErrorValues: React.Dispatch<
    React.SetStateAction<DonateInputErrorState>
  >,
  pattern: string
) => {
  setFormValues({
    ...formValues,
    [name]: e.target.value,
  });

  setFormErrorValues((prev) => {
    const regex = new RegExp(pattern, 'g');
    prev = {
      ...prev,
      [name]: regex.test(e.target.value),
    };
    return prev;
  });
};
