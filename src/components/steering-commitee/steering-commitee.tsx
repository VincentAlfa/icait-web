import { committeeData } from './commitee-data';
import CommitteeSection from './commitee-section';

export default function SteeringCommittee() {
  return (
    <section className='p-6'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='mb-5 flex items-center'>
          <div className='mr-1 h-10 w-4 rounded-lg bg-gradient-to-b from-[#F2C204] to-[#734310]'></div>
          <h1 className='text-xl font-medium sm:text-2xl md:text-3xl'>
            Steering Committee
          </h1>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {committeeData.map((section, index) => (
            <CommitteeSection key={index} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
