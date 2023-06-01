import React from 'react';
import styles from '@/styles/MissionText.module.css';
import globalStyles from '@/styles/Global.module.css';

type Props = {
  text: string;
  targets: number[];
  color: 'primary' | 'secondary';
};

const MissionText = ({ color = 'primary', text, targets }: Props) => {
  let textColor = '';
  if (color == 'primary') {
    textColor = '--primary-color';
  } else if (color == 'secondary') {
    textColor = '--secondary-color';
  }

  return (
    <p className={styles.text} style={{ color: `var(${textColor})` }}>
      {String(text)
        .split(' ')
        .map((word, index) => {
          return (
            <React.Fragment key={index}>
              {targets.includes(index + 1) ? (
                <span key={index + 1} className={globalStyles.highlight}>
                  {word}{' '}
                </span>
              ) : (
                `${word + ' '}`
              )}
            </React.Fragment>
          );
        })}
    </p>
  );
};

export default MissionText;
