import { SocialType } from '@/types/navigation';
import React from 'react';
import styles from '@/styles/Footer.module.css';
import Link from 'next/link';
import Icon from '../icons/Icon';

type Props = {
  item: SocialType;
};

const SocialCard = ({ item }: Props) => {
  const { icon, iconWidth, iconColor, iconHeight, href } = item;
  return (
    <li className={styles.li}>
      <Link href={href} className={styles.navlink}>
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

export default SocialCard;
