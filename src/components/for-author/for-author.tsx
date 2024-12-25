import NoShowPolicy from './no-show-policy';
import PaperPreparation from './paper-preparation';
import { timelineData } from './timeline-data';
import { TimelineLayout } from './timeline-layout';

export default function ForAuthor() {
  return (
    <section className='p-6'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='mb-5 flex items-center'>
          <div className='  mr-1 h-10 w-4 rounded-lg bg-gradient-to-b from-[#F2C204] to-[#734310]'></div>
          <h1 className='text-xl font-medium sm:text-2xl md:text-3xl'>
            For Author
          </h1>
        </div>
        <div className='flex flex-col gap-8 md:flex-row'>
          <div className='w-full md:w-2/5'>
            <h2 className='mb-4 text-lg font-medium sm:text-xl'>Timeline</h2>
            <div className='relative overflow-x-hidden px-[120px] md:px-[150px]'>
              <TimelineLayout items={timelineData} />
            </div>
          </div>
          <div className='w-full space-y-8 md:w-3/5'>
            <PaperPreparation />
            <NoShowPolicy />
          </div>
        </div>
      </div>
    </section>
  );
}
