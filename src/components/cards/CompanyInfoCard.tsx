import { CompanyInfoType } from '@/types/navigation';
import React from 'react';
import styles from '@/styles/Footer.module.css';
import Icon from '../icons/Icon';

type Props = {
  item: CompanyInfoType;
};

const CompanyInfoCard = ({ item }: Props) => {
  const { icon, iconWidth, iconHeight, iconColor, body } = item;
  return (
    <li key={item.id} className={styles.li}>
      <div className={styles.navlink}>
        <Icon
          name={icon}
          color={iconColor}
          height={iconHeight}
          width={iconWidth}
        />
      </div>
      <div className={styles.navlink}>
        <p>{body}</p>
      </div>
    </li>
  );
};

export default CompanyInfoCard;
