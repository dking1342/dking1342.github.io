import React from 'react';
import {
  AiFillPhone,
  AiFillYoutube,
  AiOutlineFieldTime,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaFacebookF, FaRunning } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';
import { MdLocationOn, MdOutlineHandshake } from 'react-icons/md';

type Props = {
  name: string;
  width: string;
  height: string;
  color: string;
};

const Icon = ({ name, width, height, color }: Props) => {
  const IconComponent = (name: string) => {
    switch (name) {
      case 'MdLocationOn':
        return <MdLocationOn width={width} height={height} color={color} />;
      case 'AiFillPhone':
        return <AiFillPhone width={width} height={height} color={color} />;
      case 'AiOutlineMail':
        return <AiOutlineMail width={width} height={height} color={color} />;
      case 'HiDocumentText':
        return <HiDocumentText width={width} height={height} color={color} />;
      case 'FaFacebookF':
        return (
          <FaFacebookF
            style={{ width: `${width}`, fill: `${color}`, height: `${height}` }}
          />
        );
      case 'AiOutlineInstagram':
        return (
          <AiOutlineInstagram
            style={{ width: `${width}`, fill: `${color}`, height: `${height}` }}
          />
        );
      case 'AiOutlineTwitter':
        return (
          <AiOutlineTwitter
            style={{ width: `${width}`, fill: `${color}`, height: `${height}` }}
          />
        );
      case 'AiFillYoutube':
        return (
          <AiFillYoutube
            style={{ width: `${width}`, fill: `${color}`, height: `${height}` }}
          />
        );
      case 'AiOutlineFieldTime':
        return (
          <AiOutlineFieldTime
            style={{ width: `${width}`, fill: `${color}`, height: `${height}` }}
          />
        );
      case 'FaRunning':
        return (
          <FaRunning
            style={{ width: `${width}`, fill: `${color}`, height: `${height}` }}
          />
        );
      case 'MdOutlineHandshake':
        return (
          <MdOutlineHandshake
            style={{ width: `${width}`, fill: `${color}`, height: `${height}` }}
          />
        );
      default:
        return <div></div>;
    }
  };

  return <>{IconComponent(name)}</>;
};

export default Icon;
