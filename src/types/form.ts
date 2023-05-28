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
