// components/CallForPaper.tsx
const CallForPaper = () => {
  return (
    <section className="p-6 bg-gray-100">
      <div className="mx-[140px] my-[64px]">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          Call for Paper
        </h2>
        <h3 className="text-xl font-semibold mb-2">Conference Tracks</h3>
        <p className="mb-4">
          We invite researchers to submit high-quality and unpublished research
          papers in the following topics:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="list-disc pl-5">
            <li>AI in Agriculture, Plantation, and Forestry</li>
            <li>AI in Education and Learning System</li>
            <li>AI in Linguistics</li>
            <li>AI in Marine and Fishery</li>
            <li>AI in Networks and Security</li>
            <li>AI in Smart Home and Smart City</li>
            <li>AI in Social Computation</li>
            <li>AI in Robotic</li>
          </ul>
          <ul className="list-disc pl-5">
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
        <p className="mt-4">
          Accepted papers will be submitted for inclusion into IEEE Xplore
          subject to meeting IEEE Xplore's scope and quality requirements.
        </p>
      </div>
    </section>
  );
};

export default CallForPaper;
