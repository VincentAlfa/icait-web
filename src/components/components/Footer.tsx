import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Countdown from './Countdown';

const Footer = () => {
  return (
    <footer
      className='bg-gradient-to-br from-saffron-400 to-saffron-500 p-6 text-slate-900'
      id='contact'
    >
      <div className='mx-auto max-w-screen-xl'>
        <div className='flex flex-col justify-between md:flex-row'>
          <div>
            <h3 className='mb-3 text-2xl font-medium capitalize'>Contact</h3>
            <ul className='flex flex-col gap-1'>
              <li className='flex items-center gap-2'>
                <Mail />
                <Link
                  href='mailto:icait@tif.uad.ac.id'
                  className='no-underline hover:underline'
                >
                  icait@tif.uad.ac.id
                </Link>
              </li>
              <li className='flex items-center gap-2'>
                <Phone />
                <Link
                  href='tel:6285868576374'
                  className='no-underline hover:underline'
                >
                  +6285868576374
                </Link>
              </li>
              <li className='flex items-center gap-2'>
                <Phone />
                <Link
                  href='tel:6287700653586'
                  className='no-underline hover:underline'
                >
                  +6287700653586
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-3 text-2xl font-medium capitalize'>Location</h3>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63245.92841422938!2d110.33342608689586!3d-7.803529014607482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4d3684f71!2sYogyakarta%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1735287464009!5m2!1sid!2sid'
              width='300'
              height='300'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div>
            <span className='mb-2 block text-8xl font-extrabold tracking-wider'>
              ICAIT
            </span>
            <span className='mb-1 block text-base'>Started in</span>
            <Countdown />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
