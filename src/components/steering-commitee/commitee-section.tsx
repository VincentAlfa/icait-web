type CommitteeSectionProps = {
  section: {
    title: string;
    members: {
      name: string;
      institution: string;
    }[];
  };
};

export default function CommitteeSection({ section }: CommitteeSectionProps) {
  return (
    <div className='w-full'>
      <h2 className='mb-2 text-2xl font-medium'>{section.title}</h2>
      <div className='space-y-2'>
        {section.members.map((member, index) => (
          <div
            key={index}
            className='flex flex-col gap-0.5 font-medium md:flex-row md:gap-1'
          >
            <p className='text-sm md:text-base'>{member.name}</p>
            <p className='text-sm md:text-base'>({member.institution})</p>
          </div>
        ))}
      </div>
    </div>
  );
}
