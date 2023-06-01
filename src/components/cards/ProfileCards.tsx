import React from 'react';
import styles from '@/styles/Operations.module.css';
import ProfileCard from './ProfileCard';
import { CompanyProfile } from '@/types/cards';

type Props = {
  data: CompanyProfile[];
};

const ProfileCards = ({ data }: Props) => {
  return (
    <div className={styles.profileCardContainer}>
      {data.map((item) => (
        <ProfileCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProfileCards;
