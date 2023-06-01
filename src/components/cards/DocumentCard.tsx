import React from 'react';
import styles from '@/styles/Operations.module.css';
import { DocumentInfo } from '@/types/cards';
import Icon from '../icons/Icon';

type Props = {
  item: DocumentInfo;
  setIsDialogImageSecond: any;
  setDialogImage: any;
  setDialogImageSecond: any;
  setDialogImageAlt: any;
  setIsModalOpen: any;
  dialog: any;
};

const DocumentCard = ({
  item,
  setDialogImageSecond,
  setDialogImage,
  setIsDialogImageSecond,
  setDialogImageAlt,
  setIsModalOpen,
  dialog,
}: Props) => {
  const { icon, iconWidth, iconHeight, iconColor, body, src, src2, alt } = item;

  const openDialog = (src: string, alt: string, src2?: string | undefined) => {
    if (src2) {
      setIsDialogImageSecond(true);
      setDialogImage(src);
      setDialogImageSecond(src2);
    } else {
      setIsDialogImageSecond(false);
      setDialogImage(src);
    }

    document.querySelector('html')!.style.overflowY = 'hidden';
    setDialogImageAlt(alt);
    setIsModalOpen(true);
    dialog.current!.showModal();
  };

  return (
    <div className={styles.documentCardContainer}>
      <div className={styles.documentCardImageContainer}>
        <Icon
          name={icon}
          color={iconColor}
          width={iconWidth}
          height={iconHeight}
        />
      </div>
      <p>{body}</p>
      <button
        className={styles.docsbtn}
        onClick={() => openDialog(src, alt, src2)}
      >
        <span className={styles.cornerSquare}></span>
        VIEW
      </button>
    </div>
  );
};

export default DocumentCard;
