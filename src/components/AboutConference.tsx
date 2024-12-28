import Image from 'next/image';
import Header1 from './ui/Header1';

const AboutConference = () => {
  return (
    <section className='bg-gray-50 p-6' id='about'>
      <div className='mx-auto max-w-screen-xl'>
        <Header1 title='About Conference' />
        <div className='flex w-full flex-col items-center gap-5 md:flex-row'>
          <div className='md:w-[40%] lg:w-[30%]'>
            <Image
              src={'/conference.jpeg'}
              alt='Conference'
              className='aspect-[4/5] h-auto w-full object-cover md:h-[400px] md:w-auto lg:h-[450px]'
              width={360}
              height={450}
            />
          </div>
          <div className='flex flex-col md:w-[60%] lg:w-[70%]'>
            <p className='text-base font-normal md:text-xl'>
              The International Conference on Artificial Intelligence Technology
              &#40;ICAIT&#41; aims at becoming a venue to deliver and to
              communicate recent progress of the artificial intelligence
              research and its applications in various domains, as well as
              bringing together scholars and practitioners to disseminate and
              discuss the ongoing research in the field of Artificial
              Intelligence.
            </p>
            <p className='mt-7 text-base font-normal md:text-xl'>
              The 1<sup>st</sup> ICAIT (ICAIT2025) will be held in Yogyakarta,
              Indonesia on 10<sup>th</sup> - 11<sup>th</sup> September, 2025. It
              is conducted by the Artificial Intelligence Research Group of the
              Informatics Department, Faculty of Industrial Technology,
              Universitas Ahmad Dahlan, Indonesia. The 1<sup>st</sup> ICAT is
              held on the theme of &quot;Artificial Intelligence Applications
              for a Prosperous and Sustainable Living in the Modern
              Society.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutConference;
