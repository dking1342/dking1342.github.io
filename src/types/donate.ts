import { ListType } from './form';

export type DonateAmountType = {
  id: string;
  amount: number;
  active: boolean;
};

export type DonateInputType = {
  id: string;
  classname: string;
  name: string;
  text: string;
  type: string;
  pattern: string;
  placeholder: string;
  list?: ListType[];
  required: boolean;
};

export type DonateInputInitialState = {
  firstName: string;
  lastName: string;
  email: string;
  pan: string;
  country: string;
  address: string;
  city: string;
  state: string;
  pin: number | string;
  phone: number | string;
  reason: string;
};

export type DonateInputErrorState = {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  pan: boolean;
  country: boolean;
  address: boolean;
  city: boolean;
  state: boolean;
  pin: boolean;
  phone: boolean;
  reason: boolean;
};
