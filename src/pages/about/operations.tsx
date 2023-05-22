import Head from 'next/head';
import React, {
  ReactElement,
  ReactFragment,
  ReactPortal,
  useRef,
  useState,
} from 'react';
import styles from '@/styles/Operations.module.css';
import globalStyles from '@/styles/Global.module.css';
import Image from 'next/image';
import MissionTexts from '@/components/MissionTexts';
import ClipSlanted from '@/components/ClipSlanted';
import { MdLocationOn } from 'react-icons/md';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { HiDocumentText } from 'react-icons/hi';
import ClipDoubleSide from '@/components/ClipDoubleSide';
import HeroAbout from '@/components/HeroAbout';

type Props = {};
type CompanyInfo = {
  id: number;
  title: ReactElement;
  body: ReactElement;
};
type DocumentInfo = {
  id: number;
  title: ReactElement;
  body: ReactElement;
  src: string;
  src2?: string;
  alt: string;
};
type CompanyProfile = {
  id: number;
  title: string;
  body: string;
};
type ReactNode =
  | ReactElement
  | ReactFragment
  | (({ id, body, title }: CompanyInfo | CompanyProfile) => JSX.Element)
  | (() => JSX.Element)
  | ReactPortal
  | boolean
  | null
  | undefined;
type DocumentProps = {
  id: number;
  title: ReactElement;
  body: ReactElement;
  src: string;
  src2?: string;
  alt: string;
  fn: (src: string, alt: string, src2?: string) => void;
};
type DocumentCardNode = ({
  id,
  body,
  title,
  src,
  src2,
  fn,
}: DocumentProps) => JSX.Element;
type DocumentNode = () => JSX.Element;

const operations = (props: Props) => {
  const companyInfo: CompanyInfo[] = [
    {
      id: Math.floor(Math.random() * 10000),
      title: (
        <MdLocationOn
          color="var(--accent-color)"
          style={{ width: '100%', height: '100%' }}
        />
      ),
      body: (
        <p>
          FLAT NO 5, SABA BUILDING <br></br>297, MANIPADA ROAD <br></br>{' '}
          opposite centrum capital ltd<br></br> kalina, santa cruz east{' '}
          <br></br> mumbai, maharashtra<br></br> 400098
        </p>
      ),
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: (
        <MdLocationOn
          color="var(--accent-color)"
          style={{ width: '100%', height: '100%' }}
        />
      ),
      body: (
        <p>
          804 <br></br>C-WING <br></br> PLOT-D<br></br>ROCK AVENUE CHS LTD
          <br></br>HINDUSTAN NAKA
          <br></br>ABOVE ICICI BANK<br></br> KANDIVALI WEST <br></br> mumbai,
          maharashtra<br></br> 400067
        </p>
      ),
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: (
        <AiFillPhone
          color="var(--accent-color)"
          style={{ width: '100%', height: '100%' }}
        />
      ),
      body: (
        <p>
          +91 9892238980<br></br>+91 9987438980
        </p>
      ),
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: (
        <AiOutlineMail
          color="var(--accent-color)"
          style={{ width: '40px', height: '40px' }}
        />
      ),
      body: <p>MISSIONCOMPASSIONFOUNDATION@GMAIL.COM</p>,
    },
  ];
  const profileInfo: CompanyProfile[] = [
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Income Tax Registration Under Section 12A',
      body: 'AAHTM8993RE20221',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Registration',
      body: 'E-36901 (Mumbai)',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Foreign Contribution (Regulation) Act,1976',
      body: 'Not Available',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Income Tax Registration Under Section 80G',
      body: 'AAHTM8993RF20221',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: 'NITI Ayog / NGO Partnership System Registration No',
      body: 'MH/2022/0322119',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: 'NGO Type',
      body: 'Trust (Non-Government)',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: 'Website',
      body: 'www.missioncompassionfoundation.in',
    },
  ];
  const documentInfo: DocumentInfo[] = [
    {
      id: Math.floor(Math.random() * 10000),
      title: (
        <HiDocumentText
          color="var(--accent-color)"
          style={{ width: '100%', height: '100%' }}
        />
      ),
      body: (
        <p>
          REGISTRATION<br></br>CERTIFICATE
        </p>
      ),
      src: '/registration-certificate.png',
      alt: 'Registration Certificate',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: (
        <HiDocumentText
          color="var(--accent-color)"
          style={{ width: '100%', height: '100%' }}
        />
      ),
      body: (
        <p>
          12AA<br></br>CERTIFICATION
        </p>
      ),
      src: '/12aa-certification-1.png',
      src2: '/12aa-certification-2.png',
      alt: '12AA Certification',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: (
        <HiDocumentText
          color="var(--accent-color)"
          style={{ width: '100%', height: '100%' }}
        />
      ),
      body: (
        <p>
          80G<br></br>CERTIFICATION
        </p>
      ),
      src: '/80G-certification-1.png',
      src2: '/80G-certification-2.png',
      alt: '80G Certification',
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: (
        <HiDocumentText
          color="var(--accent-color)"
          style={{ width: '100%', height: '100%' }}
        />
      ),
      body: (
        <p>
          ORGANIZATION<br></br>PAN
        </p>
      ),
      src: '/pan.png',
      alt: 'PAN Card',
    },
  ];

  const Card: ReactNode = ({ title, body }) => {
    return (
      <div className={styles.comanyCardcontainer}>
        <hr className={styles.cardBorder}></hr>
        <h2>{title}</h2>
        {body}
        <hr className={styles.cardBorder}></hr>
      </div>
    );
  };
  const ProfileCard: ReactNode = ({ title, body }) => {
    return (
      <div className={styles.profileCardcontainer}>
        <hr className={styles.cardBorder}></hr>
        <h2>{title}</h2>
        <p>{body}</p>
        <hr className={styles.cardBorder}></hr>
      </div>
    );
  };
  const DocumentCard: DocumentCardNode = ({
    title,
    body,
    src,
    src2,
    alt,
    fn,
  }) => {
    return (
      <div className={styles.documentCardContainer}>
        <h2>{title}</h2>
        {body}
        <button className={styles.docsbtn} onClick={() => fn(src, alt, src2)}>
          <span className={styles.cornerSquare}></span>
          VIEW
        </button>
      </div>
    );
  };
  const DocumentsComponent: DocumentNode = () => {
    const dialog = useRef<HTMLDialogElement>(null);
    const closeDialogBtn = useRef<HTMLButtonElement>(null);
    let [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    let [dialogImage, setDialogImage] = useState<string>(
      '/registration-certificate.png'
    );
    let [dialogImageSecond, setDialogImageSecond] = useState<string>(
      '/registration-certificate.png'
    );
    let [isDialogImageSecond, setIsDialogImageSecond] =
      useState<boolean>(false);
    let [dialogImageAlt, setDialogImageAlt] = useState<string>('alt caption');

    const openDialog = (
      src: string,
      alt: string,
      src2?: string | undefined
    ) => {
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
            {documentInfo.map(({ id, body, title, src, src2, alt }) => (
              <DocumentCard
                key={id}
                id={id}
                title={title}
                body={body}
                src={src}
                src2={src2}
                alt={alt}
                fn={() => openDialog(src, alt, src2)}
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

  return (
    <section>
      <Head>
        <title>Operations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="mission compassion company operations page"
        />
      </Head>
      <main className={globalStyles.pageStyles}>
        {/* hero section */}
        <HeroAbout page="operations" />
        {/* mission section */}
        <section className={globalStyles.missionSection}>
          <MissionTexts
            color="primary"
            targets={[2, 7, 13, 16]}
            text="We pride ourselves for being an NGO that wants to earn your trust through our transparency"
          />
        </section>
        {/* company info section */}
        <section className={globalStyles.clipSection}>
          <ClipSlanted bg="primary">
            <>
              <div className={styles.rowFirst}>
                <div className={styles.countryImageContainer}>
                  <Image
                    src="/india-1.png"
                    alt="india country"
                    height={100}
                    width={100}
                    style={{ height: '100%', width: '100%' }}
                  />
                </div>
              </div>
              <div className={styles.rowLast}>
                {companyInfo.map(({ id, title, body }) => (
                  <Card key={id} id={id} title={title} body={body} />
                ))}
              </div>
            </>
          </ClipSlanted>
        </section>
        {/* company profile section */}
        <section className={styles.companyProfileSection}>
          <ClipDoubleSide theme="accent">
            <div className={styles.profileCardContainer}>
              {profileInfo.map(({ id, title, body }) => (
                <ProfileCard key={id} id={id} title={title} body={body} />
              ))}
            </div>
          </ClipDoubleSide>
        </section>
        {/* documents section */}
        <section className={styles.documentsSection}>
          <ClipDoubleSide theme="primary">
            <DocumentsComponent />
          </ClipDoubleSide>
        </section>
      </main>
    </section>
  );
};

export default operations;
