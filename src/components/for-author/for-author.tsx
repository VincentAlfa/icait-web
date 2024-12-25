import Image from 'next/image';
import NoShowPolicy from './no-show-policy';
import PaperPreparation from './paper-preparation';
import { timelineData } from './timeline-data';
import { TimelineLayout } from './timeline-layout';
import blueRect from '@/assets/Rectangle 10.svg';
import orangeRect from '@/assets/Rectangle 9.svg';

export default function ForAuthor() {
  return (
    <main className='min-h-screen w-full px-4 py-8 md:px-10'>
      <div className='mx-auto flex flex-col gap-8 md:gap-3'>
        <h1 className='flex gap-2 text-4xl font-medium'>
          <Image src={orangeRect} alt='orange rect' />
          For Author
        </h1>
        <div className='flex flex-col md:flex-row'>
          <div className='relative flex w-full flex-col space-y-4 md:w-2/5'>
            <h2 className='flex gap-2 text-2xl font-medium'>
              <Image src={blueRect} alt='blue rect' />
              Timeline
            </h2>
            <div className='relative overflow-x-hidden'>
              <div className='flex px-4 md:justify-center md:px-0'>
                <TimelineLayout items={timelineData} />
              </div>
            </div>
          </div>
          <div className='mt-8 flex w-full flex-col md:px-0 gap-10 md:mt-0 md:w-3/5'>
            <PaperPreparation />
            <NoShowPolicy />
          </div>
        </div>
      </div>
    </main>
  );
}
