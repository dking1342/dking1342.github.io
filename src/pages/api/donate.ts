import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  payload: any;
  error: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const body = req.body;

  // Initiate Payment

  res.status(200).json({ success: true, payload: body, error: '' });
};

export default handler;
