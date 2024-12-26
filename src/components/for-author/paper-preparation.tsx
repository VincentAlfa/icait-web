import Link from 'next/link';
import Header2 from '../ui/Header2';
export default function PaperPreparation() {
  return (
    <div className='space-y-2'>
      <Header2 title='Paper Preparation' />
      <ol className='w-full list-decimal pl-6 text-base md:text-lg'>
        <li className='overflow-wrap break-words'>
          Prospective authors are invited to submit complete source papers of
          maximum 6 pages &#40;including figures, tables, and references in
          LaTeX or doc/docx format&#41; according to the IEEE conference
          template standards which can be found in the following link:{' '}
          <Link
            className='underline'
            href={'https://www.ieee.org/conferences/publishing/templates.html.'}
          >
            https://www.ieee.org/conferences/publishing/templates.html.
          </Link>
        </li>
        <li>
          Please submit your paper via EDAS. New users are required to register
          with EDAS before paper submission.
        </li>
      </ol>
    </div>
  );
}
