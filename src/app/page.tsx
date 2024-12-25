import ForAuthor from '@/components/for-author/for-author';
import Hero from '@/components/Hero';
import Registration from '@/components/registration/registration';
import SteeringCommittee from '@/components/steering-commitee/steering-commitee';

export default function Home() {
  return (
    <div className='font-[family-name:var(--font-plus-jakarta-sans)]'>
      <Hero />
      <ForAuthor />
      <SteeringCommittee />
      <Registration />
    </div>
  );
}
