import React from 'react';
import styles from '@/styles/Operations.module.css';
import { CompanyProfile } from '@/types/cards';

type Props = {
  item: CompanyProfile;
};

const ProfileCard = ({ item }: Props) => {
  const { title, body } = item;
  return (
    <div className={styles.profileCardcontainer}>
      <hr className={styles.cardBorder}></hr>
      <h2>{title}</h2>
      <p>{body}</p>
      <hr className={styles.cardBorder}></hr>
    </div>
  );
};

export default ProfileCard;
