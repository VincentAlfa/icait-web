import Link from 'next/link';
import Countdown from './Countdown';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className='h-screen w-full' id='hero'>
      <div className="h-full w-full bg-[url('../assets/img/heroimage.webp')] bg-cover bg-center bg-no-repeat">
        <div className='h-full w-full place-content-center bg-black/20'>
          <div className='mx-auto mt-[4.5rem] grid max-w-screen-xl'>
            <div className='text-center'>
              <p className='mb-2 text-sm text-slate-50 md:text-base'>
                10-11 September 2025, Yogyakarta, Indonesia
              </p>
              <h1 className='mb-2 text-3xl font-bold leading-tight tracking-wide text-slate-50 md:text-4.5xl'>
                The 1<sup>st</sup> International Conference on Artificial
                Intelligence Technology &#40;ICAIT&#41; 2025
              </h1>
              <p className='mb-4 text-base italic tracking-wide text-slate-50 md:text-xl'>
                &#34;Artificial Intelligence Applications for a Prosperous and
                Sustainable Living in the Modern Society&#34;
              </p>
              <p className='mb-1 text-sm text-slate-50 md:text-base'>
                Started in
              </p>
              <Countdown className='mx-auto mb-6' />
              <Button
                className='bg-san-juan-700 hover:bg-san-juan-700/90'
                asChild
              >
                <Link href='#'>Registration Here</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
