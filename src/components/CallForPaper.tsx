import Header1 from "./ui/Header1";
import Header2 from "./ui/Header2";

const CallForPaper = () => {
  return (
    <section className="px-8 md:px-[140px] py-16">
      <Header1 title="Call for Paper" />
      <Header2 title="Conference Tracks" />
      <p className="mb-4 font-base mt-2">
        We invite researchers to submit high-quality and unpublished research
        papers in the following topics:
      </p>
      <div className="">
        <ul className="grid grid-cols-2 gap-4 font-medium text-base">
          <li>AI in Agriculture, Plantation, and Forestry</li>
          <li>AI in Education and Learning System</li>
          <li>AI in Linguistics</li>
          <li>AI in Marine and Fishery</li>
          <li>AI in Networks and Security</li>
          <li>AI in Smart Home and Smart City</li>
          <li>AI in Social Computation</li>
          <li>AI in Robotic</li>
          <li>AI in Business, e-Commerce, and Finance</li>
          <li>AI in Health, Medicine, and Healthcare Technology</li>
          <li>AI in Logistics and Supply Chain</li>
          <li>AI in Manufacture</li>
          <li>AI in Natural Science (Biology, Chemistry, and Physics)</li>
          <li>AI in Software Engineering</li>
          <li>AI in Transportation and Automotive</li>
          <li>AI Applications in Various Domains</li>
        </ul>
      </div>
      <p className="mt-4 text-slate-600 font-light text-sm">
        Accepted papers will be submitted for inclusion into IEEE Xplore subject
        to meeting IEEE Xplores scope and quality requirements.
      </p>
    </section>
  );
};

export default CallForPaper;
