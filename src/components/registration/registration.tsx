import { Button } from '@/components/ui/button';
import { registrationData } from './registration-data';
import { RegistrationTable } from './Registration-table';
import Link from 'next/link';

export default function Registration() {
  return (
    <section className='p-6'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='mb-5 flex items-center'>
          <div className='mr-1 h-10 w-4 rounded-lg bg-gradient-to-b from-[#F2C204] to-[#734310]'></div>
          <h1 className='text-xl font-medium sm:text-2xl md:text-3xl'>
            Registration
          </h1>
        </div>
        <div className='space-y-8'>
          <div>
            <h2 className='mb-4 text-lg font-medium sm:text-xl'>
              Registration Fee
            </h2>
            <RegistrationTable data={registrationData} />
          </div>
          <div className='flex justify-center'>
            <Link href={''}>
              <Button size='lg' className='bg-[#1e4976] hover:bg-[#1e4976]/90'>
                Register Here
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
