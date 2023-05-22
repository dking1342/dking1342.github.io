import Head from 'next/head';
import React from 'react';
import styles from '@/styles/Faqs.module.css';
import globalStyles from '@/styles/Global.module.css';
import HeroAbout from '@/components/HeroAbout';

type Props = {};
type FaqCardType = {
  id: number;
  question: string;
  answer: string;
};

const faqs = (props: Props) => {
  const faqsArr: FaqCardType[] = [
    {
      id: Math.floor(Math.random() * 10000),
      question:
        'What is the difference between animal rights and animal welfare?',
      answer:
        'There is a fundamental difference between these two positions in the animal movement. The former believes that animals have value in themselves. As co-sharers of the planet, they are deserving of equal consideration, freedom from pain and the right to life , liberty and happiness. It entirely rejects the use or ownership of animals by humans. Animal welfare, on the other hand, demands humane stewardship of animals. It accepts the notion of using animals but doing so with kindness and consideration',
    },
    {
      id: Math.floor(Math.random() * 10000),
      question: 'Why animal welfare and not human welfare?',
      answer:
        'The two are not competing but complementary concerns. Animal welfare is human welfare. The jungle that keeps the tiger safe also saves human lives by providing a perennial water supply, climate control and a flood check for humans. Turning vegetarian saves both animal and human lives. Better food and living conditions helps both the horse and his rider. Injustice and violence to one hurts all. As the weakest , most vulnerable creatures on earth , animals deserve our strongest protection.',
    },
    {
      id: Math.floor(Math.random() * 10000),
      question:
        "It's fine for you to believe in animal welfare, but you shouldn't tell other people what to do.",
      answer:
        'By the same logic , one should not teach anybody anything. Believing in animal welfare means believing in compassion , nonviolence and respect for all life all of which are worthy values deserving of being preached as well as being practised. If you know of a way to make the world a better place , it becomes your moral duty to share and multiply that knowledge. It is through the teachings of religious , spiritual and moral leaders that the world has progressed to civilized thought and action. If Gandhi had not told us about passive resistance, we would still be ruled by the British . If Abraham Lincoln had not told Southern America that slavery was unacceptable, it would have taken far longer for the black movement to succeed. If you know it to be wrong to hit or hurt a fellow being , you need to share that understanding and persuade others of what you know to be right.',
    },
    {
      id: Math.floor(Math.random() * 10000),
      question:
        'What about all the customs, traditions and jobs that depend on using animals?',
      answer:
        'The same argument could be used to justify slavery, bonded or child labour and any other kind of exploitation. Custom or tradition is not a reason to continue cruelty. Sati, thuggee, child marriage have all been traditions that we have recognized to be evil and therefore abandoned. As for jobs , every age finds its own way to survive. When cars were invented , nobody thought of the tangawallahs that were thrown out of work. When you bought a computer , did you consider the typists you were rendering jobless? No , you simply did what was best for you. Similarly , you have to do what you believe is right and fair. The world will cope.',
    },
  ];

  return (
    <section>
      <Head>
        <title>FAQs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="mission compassion frequently asked page"
        />
      </Head>
      <main className={globalStyles.pageStyles}>
        {/* hero section */}
        <HeroAbout page="FAQs" />
        <section className={styles.faqsSection}>
          <h1>
            Frequently Asked{' '}
            <span className={globalStyles.highlight}>Questions</span>
          </h1>
          <div className={styles.faqsContainer}>
            {faqsArr.map(({ id, question, answer }) => (
              <div className={styles.faqsCardContainer} key={id}>
                <h2>Question:</h2>
                <p>{question}</p>
                <h2>Answer:</h2>
                <p>{answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
};

export default faqs;
