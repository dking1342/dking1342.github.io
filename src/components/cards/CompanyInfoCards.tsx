import { CompanyInfoType } from '@/types/navigation';
import React from 'react';
import styles from '@/styles/Footer.module.css';
import CompanyInfoCard from './CompanyInfoCard';

type Props = {
  data: CompanyInfoType[];
};

const CompanyInfoCards = ({ data }: Props) => {
  return (
    <ul className={`${styles.ul} ${styles.companyUl}`}>
      {data.map((item) => (
        <CompanyInfoCard item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default CompanyInfoCards;
