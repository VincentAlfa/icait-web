'use client';

import { DateTime } from 'luxon';
import { Card, CardContent } from './ui/card';
import { useEffect, useState } from 'react';

const Countdown = ({ className }: { className: string }) => {
  const [currentTime, setCurrentTime] = useState(
    DateTime.now().setZone('Asia/Jakarta'),
  );
  const targetTime: DateTime =
    DateTime.fromISO('2025-09-10').setZone('Asia/Jakarta');

  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const diff = targetTime.toUnixInteger() - currentTime.toUnixInteger();
      const newdate = DateTime.now().setZone('Asia/Jakarta');
      setCurrentTime(newdate);
      setDays(Math.floor(diff / 86400));
      setHours(Math.floor((diff % 86400) / 3600));
      setMinutes(Math.floor((diff % 3600) / 60));
      setSeconds(Math.floor(diff % 60));
    }, 1000);
    return () => clearInterval(interval);
  }, [currentTime, targetTime]);
  return (
    <Card
      className={
        'relative w-fit overflow-clip border-0 bg-san-juan-950 ' + className
      }
    >
      <CardContent className='relative z-10 p-7 md:p-8'>
        <div className='flex justify-center gap-1 text-slate-50 md:gap-4'>
          <div className='flex w-[4.3rem] flex-col text-center md:w-[4.4rem]'>
            <span className='text-3xl font-bold tabular-nums md:text-4.5xl'>
              {days < 10 ? '0' + days : days}
            </span>
            <span className='md:font-base font-normal'>Days</span>
          </div>
          <div className='flex w-[4.3rem] flex-col text-center md:w-[4.4rem]'>
            <span className='text-3xl font-bold tabular-nums md:text-4.5xl'>
              {hours < 10 ? '0' + hours : hours}
            </span>
            <span className='md:font-base font-normal'>Hours</span>
          </div>
          <div className='flex w-[4.3rem] flex-col text-center md:w-[4.4rem]'>
            <span className='text-3xl font-bold tabular-nums md:text-4.5xl'>
              {minutes < 10 ? '0' + minutes : minutes}
            </span>
            <span className='md:font-base font-normal'>Minutes</span>
          </div>
          <div className='flex w-[4.3rem] flex-col text-center md:w-[4.4rem]'>
            <span className='text-3xl font-bold tabular-nums md:text-4.5xl'>
              {seconds < 10 ? '0' + seconds : seconds}
            </span>
            <span className='md:font-base font-normal'>Seconds</span>
          </div>
        </div>
      </CardContent>
      <div className='absolute -left-9 top-8 h-[244px] w-[244px] rounded-full bg-san-juan-800 blur-3xl'></div>
      <div className='absolute -right-20 bottom-11 h-[178px] w-[178px] rounded-full bg-san-juan-800 blur-3xl'></div>
    </Card>
  );
};

export default Countdown;
