// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ImpactCardType } from '@/types/cards';
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';

type Data = {
  data: ImpactCardType[] | null;
  error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const list: ImpactCardType[] = [
    {
      id: '82633f64-7f54-43cb-9e4a-e12301e187b7',
      img: '/impact-customer-1.png',
      header: 'Stray Cat Awareness',
      body: 'Mission Compassion put on an awareness presentation about the stray cats in Mumbai. During this presentation our esteemed guests shared their vision for combating this terrible condition faced by so many cats. Having people involved in this awareness campaign was an important step in providing the care necessary for stray cats',
      name: 'Mumbai',
      date: new Date('7/13/2021').toDateString(),
      type: 'customers',
    },
    {
      id: '7f73bcf0-0c7f-448b-bf48-1e0ce7044a08',
      img: '/impact-customer-2.png',
      header: 'Neutering Campaign',
      body: 'We recently had a campaign where Mission Compassion sponsored a night of festivities and enjoyment while giving a panel the opportunity to speak on the importance of neutring stray cats in the city. We felt it was a success as we were able to see an increase in neuterings after this presentation.',
      name: 'Churchgate',
      date: new Date('9/1/2022').toDateString(),
      type: 'customers',
    },
    {
      id: '0cb36d44-c67d-496f-89c2-7c0685d73b5c',
      img: '/impact-customer-3.png',
      header: 'Rabbies Awareness',
      body: 'During this campaign we looked to increase the awareness of rabbies that happens to stray animals in the city. We did our best to present appropriate information to potential adopters who need to understand the risks of rabbies with stray animals in the city before they bring them into their homes.',
      name: 'Andheri',
      date: new Date('1/12/2023').toDateString(),
      type: 'customers',
    },
    {
      id: 'fb23014c-1ab5-4a63-b57a-15548b0cd308',
      img: '/impact-community-1.png',
      header: 'Paws & Claws Gala',
      body: 'The Paws & Claws Gala is Mission Compassion’s largest fundraising event of the year. The event is attended by more than 400 business leaders annually and features a cocktail reception, silent and live auctions, raffles and games, wine pull, formal dinner, and program. Did we mention that it’s also the only gala in town where you can mingle with shelter pups, our favorite felines, and some of our very best wildlife ambassadors? You don’t want to miss this!',
      name: 'Mumbai',
      date: new Date('10/14/2022').toDateString(),
      type: 'community',
    },
    {
      id: 'f1e7eadb-2d76-4d8a-a578-62e107abc6e5',
      img: '/impact-community-2.png',
      header: 'Pet Walk',
      body: "Pet Walk is Mission Compassion's annual dog-friendly run/walk to raise funds for animals in need. The event kicks off with a 5K run/walk or a 1-mile walk followed by a post-race festival featuring musical entertainment, food trucks, vendors and exhibitors, family-friendly activities, plus games and plenty of treats for our four-legged participants. Don't forget: dogs are welcome, but not required!",
      name: 'Santa Cruz',
      date: new Date('6/17/2021').toDateString(),
      type: 'community',
    },
    {
      id: 'ad7bb9c5-8d03-4520-b564-e385539f6d50',
      img: '/impact-community-3.png',
      header: 'Rummage Sale',
      body: "Shop 'till you drop at our annual rummage sale to benefit the animals! Whether you want to donate items before hand, shop, or volunteer",
      name: 'Chembur',
      date: new Date('5/6/2023').toDateString(),
      type: 'community',
    },
    {
      id: 'c5008d61-629c-4e69-82e5-f6861dce1b92',
      img: '/impact-animal-1.png',
      header: 'Vaccination Clinic',
      body: 'Mission Compassion had a free vaccination day for any stray animal in the city that was brought into one of our offices. We want to do our part in providing compassionate care to the strays of our city and this was a chance to have our actions meet our words.',
      name: 'Mumbai',
      date: new Date('2/17/2023').toDateString(),
      type: 'animals',
    },
    {
      id: '3fbaec8c-84c0-40b0-8b3c-f600c4446dd1',
      img: '/impact-animal-2.png',
      header: 'Vaccination Clinic',
      body: 'Mission Compassion had a free vaccination day for any stray animal in the city that was brought into one of our offices. We want to do our part in providing compassionate care to the strays of our city and this was a chance to have our actions meet our words.',
      name: 'Mulund',
      date: new Date('12/15/2022').toDateString(),
      type: 'animals',
    },
    {
      id: '6f083e7b-4168-4c54-8a13-5dca5832a418',
      img: '/impact-animal-3.png',
      header: 'Vaccination Clinic',
      body: 'Mission Compassion had a free vaccination day for any stray animal in the city that was brought into one of our offices. We want to do our part in providing compassionate care to the strays of our city and this was a chance to have our actions meet our words.',
      name: 'Bandra',
      date: new Date('11/1/2022').toDateString(),
      type: 'animals',
    },
    {
      id: 'b2364c18-5e28-4f1c-bdee-2326f6ac67e9',
      img: '/impact-partner-1.png',
      header: 'Vaccination Partnership',
      body: 'Mission Compassion is proud to announce that it partnered with the Mumbai Animal Shelter to provide vaccinations for stray animals in Mumbai. By combining forces we were able to provide more care for those animals that needed it.',
      name: 'Mumbai',
      date: new Date('8/2/2022').toDateString(),
      type: 'partners',
    },
    {
      id: 'e7781626-6a0d-4bba-955b-6b0ef5e99a59',
      img: '/impact-partner-2.png',
      header: 'Neutering Partnership',
      body: 'Mission Compassion partnered with the Hiranandani Group to provide neutering in the city of Thane. We thank Hiranandani for their support in providing generous donations to help reduce the population of stray cats.',
      name: 'Thane',
      date: new Date('3/21/2022').toDateString(),
      type: 'partners',
    },
    {
      id: 'de99615d-f86a-4ab2-a40f-d4a0ebca6a12',
      img: '/impact-partner-3.png',
      header: 'Donations',
      body: 'We are proud to announce that Tata made a generous donation to our cause. We are very fortunate to have partnered with them to provide neutering in the city of Mumbai. Their help goes a long way in controlling the population.',
      name: 'Malad',
      date: new Date('4/27/2023').toDateString(),
      type: 'partners',
    },
    {
      id: '52ca0594-c547-48f5-a8ce-5bea98a5eb42',
      img: '/impact-media-toi.png',
      header: 'Mission Compassion profile',
      body: 'We are proud to have gotten a chance to showcase our efforts with the Times of India. We were able to give valuable information about our company and the efforts we have made in our short time.',
      name: 'TOI',
      date: new Date('5/10/2023').toDateString(),
      type: 'media',
    },
    {
      id: '2eaac85f-0a2a-4bd4-b230-9c70375bd577',
      img: '/impact-media-hindustan-times.png',
      header: 'Who is Mission Compassion?',
      body: 'In this article, the Hindustan Times covers our origin and how we have become who we are. We are thankful to the Hindustan Times for spreading the word about our work and what we have done.',
      name: 'Hindustan Times',
      date: new Date('12/20/2022').toDateString(),
      type: 'media',
    },
    {
      id: '4797c44a-1f57-4de5-b29c-0b3033ef33e8',
      img: '/impact-media-indian-express-2.png',
      header: 'Pawpulation Control',
      body: 'We had a good time in this interview as it spoke to the very heart of what we are trying to do in the city. We had a lengthy conversation about how population control is needed in Mumbai.',
      name: 'Indian Express',
      date: new Date('8/12/2022').toDateString(),
      type: 'media',
    },
  ];

  const result = list.filter((val) => {
    if (req.query.id) {
      return val.id === req.query.id && val.type === req.query.type;
    } else {
      return val.type === req.query.type;
    }
  });

  if (result) {
    res.status(200).json({ data: result, error: '' });
  } else {
    res.status(404).json({ data: null, error: 'Error when fetching' });
  }
}
