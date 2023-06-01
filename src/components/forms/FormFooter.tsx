import React, { useState } from 'react';
import styles from '@/styles/Footer.module.css';
import { initialState, robotInitialState } from '@/data/navigation';
import { useRouter } from 'next/router';
import { FetchData, GeneralFormValues } from '@/types/form';
import { OutputModel } from '@/types/api';
import { fetchRequest } from '@/utils/api';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

type Props = {};
const montserrat = Montserrat({ subsets: ['latin'] });

const FormFooter = (props: Props) => {
  const router = useRouter();
  let [formValues, setFormValues] = useState<GeneralFormValues>(initialState);
  let [robot, setRobot] = useState(robotInitialState);

  const onChange = (e: any, name: string) => {
    setFormValues({ ...formValues, [name]: e.target.value });
  };
  const onRobotChange = () => (robot ? setRobot(0) : setRobot(1));

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (robot) {
      let editedValues: FetchData = {
        formType: 'general',
        data: formValues,
      };

      const data: OutputModel = await fetchRequest(
        '/api/contact',
        editedValues
      );
      data.success ? router.push('/thanks') : router.push('contact-error');
      setFormValues(initialState);
      setRobot(robotInitialState);
    }
  };
  return (
    <form className={styles.contactContainer} onSubmit={(e) => onSubmit(e)}>
      <div className={styles.contactTitleContainer}>
        <h4>Get in touch with us</h4>
        <h5>we love hearing from you</h5>
      </div>
      <div className={styles.contactFormContainer}>
        <div className={styles.textContainer}>
          <label htmlFor="firstname">first name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            pattern="^[A-Za-z][A-Za-z ]{1,30}"
            placeholder="Enter first name"
            required={true}
            value={formValues.firstName}
            onChange={(e) => onChange(e, 'firstName')}
          />
        </div>
        <div className={styles.textContainer}>
          <label htmlFor="firstname">last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            pattern="^[A-Za-z][A-Za-z ]{1,30}"
            placeholder="Enter last name"
            required={true}
            value={formValues.lastName}
            onChange={(e) => onChange(e, 'lastName')}
          />
        </div>
        <div className={styles.textContainer}>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            name="email"
            pattern="^.+@.+..+"
            placeholder="Enter email"
            required={true}
            value={formValues.email}
            onChange={(e) => onChange(e, 'email')}
          />
        </div>
        <div className={styles.textContainer}>
          <label htmlFor="message">message</label>
          <textarea
            name="message"
            id="message"
            cols={10}
            rows={5}
            required={true}
            value={formValues.message}
            className={montserrat.className}
            onChange={(e) => onChange(e, 'message')}
          ></textarea>
        </div>
      </div>
      <div className={styles.contactCaptchaContainer}>
        <input
          type="checkbox"
          value={robot}
          onChange={() => onRobotChange()}
          checked={Boolean(robot)}
        />
        <span>i am not a robot</span>
        <Image
          src={'/captcha.png'}
          alt="captcha image"
          width={40}
          height={40}
        />
      </div>
      <div className={styles.contactBtnContainer}>
        <input type="submit" value="submit" className={styles.submitBtn} />
        <span className={styles.cornerSquare}></span>
      </div>
    </form>
  );
};

export default FormFooter;
