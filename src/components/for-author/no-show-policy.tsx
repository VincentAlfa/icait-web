export default function NoShowPolicy() {
  return (
    <div className='space-y-2'>
      <h2 className='flex gap-2 text-2xl font-medium'>
        <div className='mr-1 h-8 w-4 rounded-lg bg-gradient-to-b from-[#3A80BD] to-[#15263C]'></div>
        No Show Policy{' '}
      </h2>
      <p className='text-lg'>
        Please take note that IEEE has a strict policy on No-Show. Therefore, if
        your paper is accepted, one of the authors OR their representatives MUST
        PRESENT their paper at the conference. Papers with no-show participants
        without a valid reason will not be submitted to IEEExplore. NO REFUND of
        the paid fees may be claimed by the no-show authors.
      </p>
    </div>
  );
}
