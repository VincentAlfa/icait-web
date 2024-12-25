import Image from 'next/image';
import { committeeData } from './commitee-data';
import CommitteeSection from './commitee-section';
import orangeRect from '@/assets/Rectangle 9.svg';

export default function SteeringCommittee() {
  return (
    <div className='w-full px-4 py-8 md:px-10'>
      <h1 className='mb-5 flex gap-2 text-4xl font-medium'>
        <Image src={orangeRect} alt='orange rect' />
        Committee
      </h1>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10'>
        {committeeData.map((section, index) => (
          <CommitteeSection key={index} section={section} />
        ))}
      </div>
    </div>
  );
}
