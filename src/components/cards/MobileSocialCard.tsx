import { SocialType } from '@/types/navigation';
import Link from 'next/link';
import React from 'react';
import Icon from '../icons/Icon';

type Props = {
  item: SocialType;
};

const MobileSocialCard = ({ item }: Props) => {
  const { icon, iconWidth, iconHeight, iconColor, href } = item;
  return (
    <li key={item.id}>
      <Link href={href}>
        <Icon
          name={icon}
          width={iconWidth}
          height={iconHeight}
          color={iconColor}
        />
      </Link>
    </li>
  );
};

export default MobileSocialCard;
