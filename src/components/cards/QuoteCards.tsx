import { QuoteType } from '@/types/quotes';
import React from 'react';
import QuoteCard from './QuoteCard';
import { QuoteCardType } from '@/types/cards';

type Props = {
  data: QuoteCardType[];
};

const QuoteCards = ({ data }: Props) => {
  return (
    <>
      {data.map((item) => (
        <QuoteCard key={item.id} item={item} />
      ))}
    </>
  );
};

export default QuoteCards;
