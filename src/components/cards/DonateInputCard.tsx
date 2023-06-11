import {
  DonateInputErrorState,
  DonateInputInitialState,
  DonateInputType,
} from '@/types/donate';
import React from 'react';
import FormDonateGroup from '../forms/FormDonateGroup';
import FormDonateSelect from '../forms/FormDonateSelect';

type Props = {
  item: DonateInputType;
  formValues: DonateInputInitialState;
  setFormValues: React.Dispatch<React.SetStateAction<DonateInputInitialState>>;
  formErrorValues: DonateInputErrorState;
  setFormErrorValues: React.Dispatch<
    React.SetStateAction<DonateInputErrorState>
  >;
};

const DonateInputCard = ({
  item,
  formValues,
  setFormValues,
  formErrorValues,
  setFormErrorValues,
}: Props) => {
  return (
    <>
      {item.classname === 'formGroup' ? (
        <FormDonateGroup
          item={item}
          formValues={formValues}
          setFormValues={setFormValues}
          formErrorValues={formErrorValues}
          setFormErrorValues={setFormErrorValues}
        />
      ) : item.classname === 'formSelect' ? (
        <FormDonateSelect
          item={item}
          formValues={formValues}
          setFormValues={setFormValues}
          formErrorValues={formErrorValues}
          setFormErrorValues={setFormErrorValues}
        />
      ) : null}
    </>
  );
};

export default DonateInputCard;
