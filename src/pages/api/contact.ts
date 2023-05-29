// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { actionHtmlTemplate } from '@/templates/actionHtml';
import { generalHtmlTemplate } from '@/templates/generalHtml';
import { partnerHtmlTemplate } from '@/templates/partnerHtml';
import { volunteerHtmlTemplate } from '@/templates/volunteerHtml';
import { OutputModel } from '@/types/api';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {};

let outputModel: OutputModel = {
  success: true,
  status: 200,
  message: 'Successfully sent mail',
  payload: {},
  error: null,
};
const email = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    try {
      const { formType, data } = req.body;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: email,
          pass,
        },
        port: 465,
        host: 'smtp.gmail.com',
        secure: true,
      });

      await transporter.sendMail({
        from: `Nodemailer <${email}>`,
        to: `Mission Compassion <${email}>`,
        subject: `New ${formType} email from ${data.firstName
          .slice(0, 1)
          .toUpperCase()}${data.firstName
          .slice(1)
          .toLowerCase()} ${data.lastName
          .slice(0, 1)
          .toUpperCase()}${data.lastName.slice(1).toLowerCase()}`,
        text: JSON.stringify(data),
        html:
          formType === 'volunteer'
            ? volunteerHtmlTemplate(data)
            : formType === 'action'
            ? actionHtmlTemplate(data)
            : formType === 'partner'
            ? partnerHtmlTemplate(data)
            : generalHtmlTemplate(data),
      });

      return res.status(200).json(outputModel);
    } catch (error: any) {
      const err: Error = error;
      outputModel = {
        ...outputModel,
        success: false,
        status: 400,
        message: 'Mail not sent',
        error: err.message,
      };

      return res.status(400).json(outputModel);
    }
  }

  outputModel = {
    ...outputModel,
    success: false,
    message: 'Mail was not sent',
    status: 400,
    error: 'Unable to complete response',
  };
  return res.status(400).json(outputModel);
};

export default handler;
