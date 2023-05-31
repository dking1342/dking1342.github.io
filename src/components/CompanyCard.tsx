import React from 'react';
import styles from '@/styles/Operations.module.css';
import { CompanyInfo } from '@/types/cards';
import Icon from './icons/Icon';

type Props = {
  item: CompanyInfo;
};

const CompanyCard = ({ item }: Props) => {
  const { id, icon, iconColor, iconWidth, iconHeight, body } = item;
  return (
    <div className={styles.comanyCardcontainer}>
      <hr className={styles.cardBorder}></hr>
      <h2>
        <Icon
          name={icon}
          width={iconWidth}
          height={iconHeight}
          color={iconColor}
        />
      </h2>
      <p>{body}</p>
      <hr className={styles.cardBorder}></hr>
    </div>
  );
};

export default CompanyCard;
