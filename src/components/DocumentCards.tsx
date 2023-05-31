import React, { useRef, useState } from 'react';
import styles from '@/styles/Operations.module.css';
import { DocumentInfo } from '@/types/cards';
import DocumentCard from './DocumentCard';
import Image from 'next/image';

type Props = {
  data: DocumentInfo[];
};

const DocumentCards = ({ data }: Props) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeDialogBtn = useRef<HTMLButtonElement>(null);
  let [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  let [dialogImage, setDialogImage] = useState<string>(
    '/registration-certificate.png'
  );
  let [dialogImageSecond, setDialogImageSecond] = useState<string>(
    '/registration-certificate.png'
  );
  let [isDialogImageSecond, setIsDialogImageSecond] = useState<boolean>(false);
  let [dialogImageAlt, setDialogImageAlt] = useState<string>('alt caption');

  // const openDialog = (src: string, alt: string, src2?: string | undefined) => {
  //   if (src2) {
  //     setIsDialogImageSecond(true);
  //     setDialogImage(src);
  //     setDialogImageSecond(src2);
  //   } else {
  //     setIsDialogImageSecond(false);
  //     setDialogImage(src);
  //   }

  //   document.querySelector('html')!.style.overflowY = 'hidden';
  //   setDialogImageAlt(alt);
  //   setIsModalOpen(true);
  //   dialog.current!.showModal();
  // };

  const closeDialog = (e: any) => {
    e.preventDefault();
    document.querySelector('html')!.style.overflowY = '';
    setIsModalOpen(false);
    dialog.current!.close();
  };

  return (
    <>
      <div className={styles.documentsContainer}>
        <h1>
          VIEW OUR <span className={styles.highlight}>DOCUMENTS</span>
        </h1>
        <div className={styles.documentCardsContainer}>
          {data.map((item) => (
            <DocumentCard
              key={item.id}
              item={item}
              dialog={dialog}
              setDialogImage={setDialogImage}
              setDialogImageAlt={setDialogImageAlt}
              setDialogImageSecond={setDialogImageSecond}
              setIsDialogImageSecond={setIsDialogImageSecond}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
        </div>
      </div>
      <dialog
        aria-labelledby="documents-dialog"
        aria-describedby={`${dialogImageAlt}-modal`}
        className={`${styles.modal} ${isModalOpen && styles.modalOpen}`}
        ref={dialog}
      >
        <div className={styles.dialogImageContainer}>
          <Image
            src={dialogImage}
            alt={dialogImageAlt}
            width={250}
            height={250}
            style={{ width: 'auto', height: 'auto' }}
          />
          {isDialogImageSecond && (
            <Image
              src={dialogImageSecond}
              alt={dialogImageAlt}
              width={250}
              height={250}
              style={{ width: 'auto', height: 'auto' }}
            />
          )}
        </div>
        <h2 className={styles.h2}>{dialogImageAlt}</h2>
        <div className={styles.dialogBtnContainer}>
          <button ref={closeDialogBtn} onClick={(e) => closeDialog(e)}>
            X
          </button>
        </div>
      </dialog>
    </>
  );
};

export default DocumentCards;
