import React, { useState } from 'react';
import styles from '@/styles/FormContact.module.css';
import { FormValues } from '@/types/form';
import { formList, formState } from '@/data/formList';
import FormGroup from './FormGroup';
import FormSelect from './FormSelect';
import { prefix } from '@/utils/prefix';

type Props = {
  formType: string;
};

const FormContact = ({ formType }: Props) => {
  let [formValues, setFormValues] = useState<FormValues>(formState);

  const onSubmit = (e: any) => {
    e.preventDefault();

    console.log(formValues);
  };
  const path = prefix();
  const url = `${path.url.API_URL}/thanks`;

  return (
    <form
      className={styles.form}
      action="https://formsubmit.co/23ec58b20548ed53c42bf2d339072110"
      method="POST"
    >
      <div className={styles.formContainer}>
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value={`New ${formType} email!`} />
        <input type="hidden" name="_next" value={url} />
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
