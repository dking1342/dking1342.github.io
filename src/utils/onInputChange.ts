import { FormValues } from '@/types/form';

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
