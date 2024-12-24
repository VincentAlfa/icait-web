import React from 'react';
import { TimelineLayout } from './timeline-layout';
import { timelineData } from './timeline-data';

export default function ForAuthor() {
  return (
    <main className='flex h-full w-full items-center justify-center'>
      <div>
        <TimelineLayout items={timelineData} />
      </div>
      <div className='flex flex-col'>
        <h1>Paper Preparation</h1>
        <ol className='list-decimal'>
          <li></li>
          <li></li>
        </ol>
      </div>
    </main>
  );
}
