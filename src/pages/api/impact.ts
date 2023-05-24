// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ImpactCardType } from '@/types/cards';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  data: ImpactCardType[] | null;
  error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const list: ImpactCardType[] = [
    {
      id: 6820,
      img: '/impact-animals-2.png',
      header: 'Header',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus facilis quisquam tempore repudiandae debitis nemo, eaque et, itaque dolor mollitia nulla tenetur? Velit corporis quasi ut nisi esse delectus molestiae?',
      name: 'Pika Twambu',
      date: new Date('11/12/2022').toDateString(),
      type: 'customers',
    },
    {
      id: 4946,
      img: '/impact-animals-1.png',
      header: 'Header',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus facilis quisquam tempore repudiandae debitis nemo, eaque et, itaque dolor mollitia nulla tenetur? Velit corporis quasi ut nisi esse delectus molestiae?',
      name: 'Pika Twambu',
      date: new Date('11/12/2022').toDateString(),
      type: 'customers',
    },
    {
      id: 6821,
      img: '/impact-animals-2.png',
      header: 'Header',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus facilis quisquam tempore repudiandae debitis nemo, eaque et, itaque dolor mollitia nulla tenetur? Velit corporis quasi ut nisi esse delectus molestiae?',
      name: 'Pika Twambu',
      date: new Date('11/12/2022').toDateString(),
      type: 'customers',
    },
    {
      id: 4942,
      img: '/impact-animals-1.png',
      header: 'Header',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus facilis quisquam tempore repudiandae debitis nemo, eaque et, itaque dolor mollitia nulla tenetur? Velit corporis quasi ut nisi esse delectus molestiae?',
      name: 'Pika Twambu',
      date: new Date('11/12/2022').toDateString(),
      type: 'customers',
    },
    {
      id: 4940,
      img: '/impact-animals-1.png',
      header: 'Header',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus facilis quisquam tempore repudiandae debitis nemo, eaque et, itaque dolor mollitia nulla tenetur? Velit corporis quasi ut nisi esse delectus molestiae?',
      name: 'Pika Twambu',
      date: new Date('11/14/2022').toDateString(),
      type: 'community',
    },
    {
      id: 4939,
      img: '/impact-animals-1.png',
      header: 'Header',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus facilis quisquam tempore repudiandae debitis nemo, eaque et, itaque dolor mollitia nulla tenetur? Velit corporis quasi ut nisi esse delectus molestiae?',
      name: 'Pika Twambu',
      date: new Date('11/14/2022').toDateString(),
      type: 'animals',
    },
    {
      id: 4938,
      img: '/impact-animals-1.png',
      header: 'Header',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus facilis quisquam tempore repudiandae debitis nemo, eaque et, itaque dolor mollitia nulla tenetur? Velit corporis quasi ut nisi esse delectus molestiae?',
      name: 'Pika Twambu',
      date: new Date('11/14/2022').toDateString(),
      type: 'partners',
    },
    {
      id: 4937,
      img: '/impact-animals-1.png',
      header: 'Header',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus facilis quisquam tempore repudiandae debitis nemo, eaque et, itaque dolor mollitia nulla tenetur? Velit corporis quasi ut nisi esse delectus molestiae?',
      name: 'Pika Twambu',
      date: new Date('11/14/2022').toDateString(),
      type: 'media',
    },
  ];

  const result = list.filter((val) => {
    if (req.query.id) {
      return val.id === Number(req.query.id) && val.type === req.query.type;
    } else {
      return val.type === req.query.type;
    }
  });

  if (result) {
    res.status(200).json({ data: result, error: '' });
  } else {
    res.status(404).json({ data: null, error: 'Error when fetching' });
  }
}
