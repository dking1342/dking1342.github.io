import { InfoCardType } from '@/types/cards';
import React from 'react';
import InfoCard from './InfoCard';
import globalStyles from '@/styles/Global.module.css';

type Props = {
  data: InfoCardType[];
};

const InfoCards = ({ data }: Props) => {
  return (
    <>
      {data.map(({ id, theme, title, body, classStyle }) => (
        <div className={globalStyles[classStyle]} key={id}>
          <InfoCard theme={theme} title={title} body={body} />
        </div>
      ))}
    </>
  );
};

export default InfoCards;
