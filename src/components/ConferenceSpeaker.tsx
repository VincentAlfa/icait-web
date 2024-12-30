import { Card } from './ui/card';
import Image from 'next/image';
import Header1 from './components/Header1';

const speakers = [
  { name: 'John Doe', university: 'Univ A', image: '/speaker-2.jpeg' },
  { name: 'John Doe', university: 'Univ A', image: '/speaker-2.jpeg' },
  { name: 'John Doe', university: 'Univ A', image: '/speaker-2.jpeg' },
  { name: 'John Doe', university: 'Univ A', image: '/speaker-2.jpeg' },
];

const ConferenceSpeakers = () => {
  return (
    <section
      className='bg-gradient-to-br from-san-juan-800 to-san-juan-950 p-6 text-slate-50'
      id='speaker'
    >
      <div className='mx-auto max-w-screen-xl'>
        <Header1 title='Conference Speaker' type='light' />
        <div className='flex flex-wrap items-center justify-evenly gap-4'>
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className='mx-auto flex max-w-[260px] flex-col items-center rounded-xl border-none bg-gradient-to-b from-saffron-400 to-saffron-400 p-4 transition-colors duration-300 ease-out hover:from-saffron-400 hover:to-saffron-800 hover:text-slate-50'
            >
              <div className='mb-2 w-full'>
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  className='h-[350px] rounded-lg object-cover'
                  width={232}
                  height={330}
                />
              </div>
              <div className='self-start text-left'>
                <h3 className='text-lg font-medium'>{speaker.name}</h3>
                <p className='text-sm'>{speaker.university}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceSpeakers;
