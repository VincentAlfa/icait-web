import Link from 'next/link';
export default function PaperPreparation() {
  return (
    <div className='space-y-2'>
      <h2 className='flex gap-2 text-2xl font-medium'>
        <div className='mr-1 h-8 w-4 rounded-lg bg-gradient-to-b from-[#3A80BD] to-[#15263C]'></div>
        Paper Preparation
      </h2>
      <ol className='w-full list-decimal pl-6 text-lg'>
        <li className='overflow-wrap break-words'>
          Prospective authors are invited to submit complete source papers of
          maximum 6 pages (including figures, tables, and references in LaTeX or
          doc/docx format) according to the IEEE conference template standards
          which can be found in the following link:
          <br />
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
