import { CompanyInfo } from '@/types/cards';
import React from 'react';
import CompanyCard from './CompanyCard';

type Props = {
  data: CompanyInfo[];
};

const CompanyCards = ({ data }: Props) => {
  return (
    <>
      {data.map((item) => (
        <CompanyCard key={item.id} item={item} />
      ))}
    </>
  );
};

export default CompanyCards;
