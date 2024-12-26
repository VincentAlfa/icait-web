import { Card, CardContent } from './ui/card';

const Countdown = ({ className }: { className: string }) => {
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
              76
            </span>
            <span className='md:font-base font-normal'>Days</span>
          </div>
          <div className='flex w-[4.3rem] flex-col text-center md:w-[4.4rem]'>
            <span className='text-3xl font-bold tabular-nums md:text-4.5xl'>
              17
            </span>
            <span className='md:font-base font-normal'>Hours</span>
          </div>
          <div className='flex w-[4.3rem] flex-col text-center md:w-[4.4rem]'>
            <span className='text-3xl font-bold tabular-nums md:text-4.5xl'>
              39
            </span>
            <span className='md:font-base font-normal'>Minutes</span>
          </div>
          <div className='flex w-[4.3rem] flex-col text-center md:w-[4.4rem]'>
            <span className='text-3xl font-bold tabular-nums md:text-4.5xl'>
              05
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
