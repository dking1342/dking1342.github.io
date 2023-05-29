import React, { useState } from 'react';
import styles from '@/styles/FormContact.module.css';
import { FetchData, FormValues } from '@/types/form';
import { formList, formState } from '@/data/formList';
import FormGroup from './FormGroup';
import FormSelect from './FormSelect';
import { useRouter } from 'next/router';
import { OutputModel } from '@/types/api';
import { fetchRequest } from '@/utils/api';

type Props = {
  formType: string;
};

const FormContact = ({ formType }: Props) => {
  const router = useRouter();
  let [formValues, setFormValues] = useState<FormValues>(formState);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    let editedValues: FetchData = {
      formType,
      data: {
        firstName: { value: '', error: '' },
        lastName: { value: '', error: '' },
        city: { value: '', error: '' },
        country: { value: '', error: '' },
        email: { value: '', error: '' },
        phone: { value: '', error: '' },
      },
    };

    // sanitize data depending on input
    for (const key in formValues) {
      if (Object.prototype.hasOwnProperty.call(formValues, key)) {
        if (formValues[key as keyof typeof formValues].value) {
          editedValues['data'][key as keyof typeof editedValues.data] =
            formValues[key as keyof typeof formValues].value;
        }
      }
    }

    const data: OutputModel = await fetchRequest('/api/contact', editedValues);

    if (data.success) {
      router.push('/thanks');
    } else {
      router.push('/contact-error');
    }
  };

  return (
    <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
      <div className={styles.formContainer}>
        {formList.map((item) => (
          <div key={item.id} className={styles.itemContainer}>
            {item.visible === 'all' || item.visible == formType ? (
              <>
                {item.classname === 'formGroup' ? (
                  <FormGroup
                    item={item}
                    formValues={formValues}
                    setFormValues={setFormValues}
                  />
                ) : item.classname === 'formSelect' ? (
                  <FormSelect
                    item={item}
                    formValues={formValues}
                    setFormValues={setFormValues}
                  />
                ) : null}
              </>
            ) : null}
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <input className={styles.submitBtn} type="submit" value="Send" />
      </div>
    </form>
  );
};

export default FormContact;
