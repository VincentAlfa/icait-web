import Header1 from "./ui/Header1";
import Header2 from "./ui/Header2";

const CallForPaper = () => {
  return (
    <section className="p-6 bg-gray-100" id="callforpaper">
      <div className="max-w-screen-xl mx-auto">
        <Header1 title="Call for Paper" />
        <Header2 title="Conference Tracks" />
        <p className="my-4 text-base">
          We invite researchers to submit high-quality and unpublished research
          papers in the following topics:
        </p>
          <ul className="list-none grid grid-cols-2 gap-y-3">
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
        <p className="mt-4 text-slate-600 text-sm font-light">
          Accepted papers will be submitted for inclusion into IEEE Xplore
          subject to meeting IEEE Xplores scope and quality requirements.
        </p>
      </div>
    </section>
  );
};

export default CallForPaper;
