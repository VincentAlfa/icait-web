import Header2 from "../ui/Header2";

export default function NoShowPolicy() {
  return (
    <div className='space-y-2'>
      <Header2 title="No Show Policy" />
      <p className='text-lg mt-2'>
        Please take note that IEEE has a strict policy on No-Show. Therefore, if
        your paper is accepted, one of the authors OR their representatives MUST
        PRESENT their paper at the conference. Papers with no-show participants
        without a valid reason will not be submitted to IEEExplore. NO REFUND of
        the paid fees may be claimed by the no-show authors.
      </p>
    </div>
  );
}
