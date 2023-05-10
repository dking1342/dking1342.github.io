// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { navbarData } from '@/data/navbarData';
import { NavbarType } from '@/types/navbar';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NavbarType>
) {
  res.status(200).json(navbarData);
}
