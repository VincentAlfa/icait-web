import Header1 from '../ui/Header1';
import Header2 from '../ui/Header2';
import NoShowPolicy from './no-show-policy';
import PaperPreparation from './paper-preparation';
import { timelineData } from './timeline-data';
import { TimelineLayout } from './timeline-layout';

export default function ForAuthor() {
  return (
    <section className='p-6' id='forauthor'>
      <div className='mx-auto max-w-screen-xl'>
        <Header1 title='For Author' />
        <div className='flex flex-col gap-8 md:flex-row'>
          <div className='w-full md:w-2/5'>
          <Header2 title='Timeline' />
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
