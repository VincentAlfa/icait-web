import Header1 from '../ui/Header1';
import { committeeData } from './commitee-data';
import CommitteeSection from './commitee-section';

export default function SteeringCommittee() {
  return (
    <section className='p-6' id='committee'>
      <div className='mx-auto max-w-screen-xl'>
        <Header1 title='Steering Committee' />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {committeeData.map((section, index) => (
            <CommitteeSection key={index} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
