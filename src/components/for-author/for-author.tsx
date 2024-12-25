import React from 'react';
import { TimelineLayout } from './timeline-layout';
import { timelineData } from './timeline-data';
import PaperPreparation from './paper-preparation';
import NoShowPolicy from './no-show-policy';

export default function ForAuthor() {
  return (
    <main className='h-full w-full p-4 px-10'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-4xl font-medium'>For Author</h1>
        <div className='flex'>
          <div className='relative flex w-2/5 flex-col space-y-4 '>
            <h2 className='text-2xl font-medium'>Timeline</h2>
            <div className='flex justify-center'>
              <TimelineLayout items={timelineData} />
            </div>
          </div>
          <div className='flex w-3/5 flex-col gap-10'>
            <PaperPreparation />
            <NoShowPolicy />
          </div>
        </div>
      </div>
    </main>
  );
}
