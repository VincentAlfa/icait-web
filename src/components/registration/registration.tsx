import { Button } from '@/components/ui/button';
import { registrationData } from './registration-data';
import { RegistrationTable } from './Registration-table';
import blueRect from '@/assets/Rectangle 10.svg';
import orangeRect from '@/assets/Rectangle 9.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Registration() {
  return (
    <section className='mx-auto w-full px-4 py-8 md:px-10'>
      <div>
        <header className='mb-4'>
          <h1 className='flex items-center gap-2 text-3xl font-medium'>
            <Image src={orangeRect} alt='orange rect' />
            Registration
          </h1>
        </header>

        <div className='space-y-6'>
          <div className='space-y-4'>
            <h2 className='flex items-center gap-2 text-xl font-semibold'>
              <Image src={blueRect} alt='orange rect' />
              Registration Fee
            </h2>
            <RegistrationTable data={registrationData} />
          </div>

          <div className='flex justify-center'>
            <Link href={''}>
              <Button
                size='lg'
                className='rounded bg-san-juan-700 px-6 py-2 font-semibold text-white hover:bg-[#1e4976]/90'
              >
                Register Here
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
