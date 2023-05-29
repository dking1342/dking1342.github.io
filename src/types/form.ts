export type ListType = {
  id: number | string;
  value: string;
};
export type FormValue = {
  value: any;
  error: string;
};
export type FormValues = {
  firstName: FormValue;
  lastName: FormValue;
  city: FormValue;
  country: FormValue;
  email: FormValue;
  phone: FormValue;
  company: FormValue;
  partnerReason: FormValue;
  volunteerReason: FormValue;
  actionReason: FormValue;
};
export type VolunteerValues = {
  firstName: FormValue;
  lastName: FormValue;
  city: FormValue;
  country: FormValue;
  email: FormValue;
  phone: FormValue;
  volunteerReason: FormValue;
};
export type ActionValues = {
  firstName: FormValue;
  lastName: FormValue;
  city: FormValue;
  country: FormValue;
  email: FormValue;
  phone: FormValue;
  actionReason: FormValue;
};
export type PartnerValues = {
  firstName: FormValue;
  lastName: FormValue;
  city: FormValue;
  country: FormValue;
  email: FormValue;
  phone: FormValue;
  company: FormValue;
  partnerReason: FormValue;
};
export type BaseValues = {
  firstName: FormValue;
  lastName: FormValue;
  city: FormValue;
  country: FormValue;
  email: FormValue;
  phone: FormValue;
};
export type FormList = {
  id: number;
  classname: 'formGroup' | 'formSelect';
  name: string;
  text: string;
  type: 'text' | 'email' | 'tel';
  pattern?: string;
  placeholder: string;
  list?: ListType[];
  required: boolean;
  visible: string;
};

export type GeneralFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};
export type FetchData = {
  formType: string;
  data: any;
};
