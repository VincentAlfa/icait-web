import { Button } from '@/components/ui/button';
import { registrationData } from './registration-data';
import { RegistrationTable } from './Registration-table';
import Link from 'next/link';
import Header2 from '../ui/Header2';
import Header1 from '../ui/Header1';

export default function Registration() {
  return (
    <section className='p-6' id='registration'>
      <div className='mx-auto max-w-screen-xl'>
        <Header1 title='Registration'/>
        <div className='space-y-8'>
          <div>
            <Header2 title='Registration Fee'/>
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
