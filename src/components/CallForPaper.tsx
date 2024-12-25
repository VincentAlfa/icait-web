const CallForPaper = () => {
  return (
    <section className="p-6 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center mb-5">
          <div className="w-4 h-10 bg-gradient-to-b from-[#F2C204] to-[#734310] rounded-lg mr-1"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">
            About Conference
          </h2>
        </div>
        <div className="flex items-center mb-5">
          <div className="w-4 h-8 bg-gradient-to-b from-[#3A80BD] to-[#15263C] rounded-lg mr-1"></div>
          <h3 className="text-lg sm:text-xl md:text-2xl">Conference Tracks</h3>
        </div>
        <p className="mb-4">
          We invite researchers to submit high-quality and unpublished research
          papers in the following topics:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className=" list-none">
            <li>AI in Agriculture, Plantation, and Forestry</li>
            <li>AI in Education and Learning System</li>
            <li>AI in Linguistics</li>
            <li>AI in Marine and Fishery</li>
            <li>AI in Networks and Security</li>
            <li>AI in Smart Home and Smart City</li>
            <li>AI in Social Computation</li>
            <li>AI in Robotic</li>
          </ul>
          <ul className="list-none">
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
        <p className="mt-4 text-gray-500">
          Accepted papers will be submitted for inclusion into IEEE Xplore
          subject to meeting IEEE Xplores scope and quality requirements.
        </p>
      </div>
    </section>
  );
};

export default CallForPaper;
