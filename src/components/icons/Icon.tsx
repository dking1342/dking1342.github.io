import React from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { HiDocumentText } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';

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
      default:
        return <div></div>;
    }
  };

  return <>{IconComponent(name)}</>;
};

export default Icon;
