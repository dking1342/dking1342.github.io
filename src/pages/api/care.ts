// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ServiceCardType } from '@/types/cards';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  data: ServiceCardType[] | null;
  error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const list: ServiceCardType[] = [
    {
      id: '4df4a7ee-ec7b-434d-b372-09c609182356',
      icon: '/services-neuter.png',
      title: 'population control',
      body: 'Every year, millions of unwanted dogs and cats, including puppies and kittens, are euthanized. The good news is that responsible pet owners can make a difference. By having your dog or cat sterilized, you will do your part to prevent the birth of unwanted puppies and kittens. \n\n Spaying and neutering prevent unwanted litters, help protect against some serious health problems, and may reduce many of the behavioral problems associated with the mating instinct. Removing a female dog or cat’s ovaries eliminates heat cycles and generally reduces the unwanted behaviors that may lead to owner frustration. Removing the testes from male dogs and cats reduces the breeding instinct, making them less inclined to roam and more content to stay at home. \n\nEarly spaying of female dogs and cats can help protect them from some serious health problems later in life such as uterine infections and breast cancer. Neutering your male pet can also lessen its risk of developing benign prostatic hyperplasia (enlarged prostate gland) and testicular cancer. The procedure has no effect on a pet’s intelligence or ability to learn, play, work or hunt. Some pets tend to be better behaved following surgical removal of their ovaries or testes, making them more desirable companions.',
      img: '/services-neuter-img.png',
    },
    {
      id: '38ce979a-20fc-46b5-a8a1-22e1863cda64',
      icon: '/services-deworm.png',
      title: 'deworming',
      body: 'Deworming is an important preventative care regime for reducing parasites (internal and external) and improving your pet’s health. It is also important to help to prevent transmission of parasites to you and your human family members! Here are some things to know about those unwanted houseguests your cat or dog might unknowingly be hosting.',
      img: '/services-deworm-img.png',
    },
    {
      id: '2e8a5082-5bbb-41f6-9ec9-183dc3eb1937',
      icon: '/services-rabbies.png',
      title: 'rabbies vaccination',
      body: "Vaccines are products designed to trigger protective immune responses and prepare the immune system to fight future infections from disease-causing agents. Vaccines stimulate the immune system's production of antibodies that identify and destroy disease-causing organisms that enter the body Vaccines provide immunity against one or several diseases that can lessen the severity or prevent certain diseases altogether. Experts agree that widespread use of vaccinations within the last century has prevented death and disease in millions of animals. Vaccinations protect your pet from highly contagious and deadly diseases and improve your pet's overall quality of life.",
      img: '/services-rabbies-img.png',
    },
    {
      id: '5eaea5f5-d3df-40eb-8093-f761c512a21b',
      icon: '/services-eyes.png',
      title: 'eye enucleation',
      body: 'If your pet’s eye is injured beyond repair, has a cancer growing on or inside the eye, or is constantly painful due to a condition such as severe glaucoma, your vet may recommend removal of the affected eye. Of course, this isn’t a first line treatment. Your vet will first determine what’s involved with saving the eye — but unfortunately, sometimes restoring vision isn’t possible. When a condition causes blindness and chronic pain, your vet will discuss with you whether an enucleation may be the best option for your pet’s comfort and quality of life. In many cases, enucleation may also be less expensive than long-term eye medications, monitoring, and treatments. So, it may make more sense to remove a non-functional eye with a severe injury or disease, especially if leaving the eye in place presents a risk of complications or pain.',
      img: '/services-eyes-img.png',
    },
    {
      id: '466bbab8-b716-447d-a75a-e7cdc562d184',
      icon: '/services-critical-care-img.png',
      title: 'critical care',
      body: 'An animal requires veterinary critical care services when they are experiencing a health issue that demands consistent monitoring, treatment and therapies over an extended period of time - whether that be hours, days or even weeks. Any health condition that demands extended and complex treatments, drug therapies or 24/7 monitoring will likely fall under the purview of critical care.',
      img: '/services-critical-care-img.png',
    },
    {
      id: '7d742e22-24a5-491f-89ed-866fe589c132',
      icon: '/services-amps.png',
      title: 'leg amputations',
      body: 'An amputation is a surgical procedure where a pet’s limb is removed. An amputation may be performed due to a variety of reasons which may include a cancer diagnosis, severe trauma, fractures, infections, or chronic pain. Typically, an amputation of the forelimb includes removal of the entire limb leaving an incision line over the side of the chest. A hindlimb amputation includes removal of the limb at the hip joint or top portion of the thigh bone (femur). In special cases, an amputation may be modified to fit a prosthetic limb in patients that can’t tolerate walking on three legs.',
      img: '/services-amps-img.png',
    },
  ];

  const result = list.filter((val) => {
    if (req.query.id) {
      return val.id === req.query.id;
    } else {
      return val;
    }
  });

  if (result) {
    res.status(200).json({ data: result, error: '' });
  } else {
    res.status(404).json({ data: null, error: 'Error when fetching' });
  }
}
