import { Card } from "./ui/card";

const AboutConference = () => {
  return (
    <section className="p-6 bg-gray-50">
      <div className="mx-[140px] my-[64px]">
        <h2 className="text-2xl mb-4">About Conference</h2>
        <Card className="flex flex-col md:flex-row rounded-lg overflow-hidden border-0 bg-transparent">
          <div className="md:w-1/2">
            <img
              src="/public/conference.jpeg"
              alt="Conference"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <p className="text-gray-700 text-[16px]">
              The International Conference on Artificial Intelligence Technology
              (ICAIT) aims at becoming a venue to deliver and to communicate
              recent progress of the artificial intelligence research and its
              applications in various domains, as well as bringing together
              scholars and practitioners to disseminate and discuss the ongoing
              research in the field of Artificial Intelligence.
            </p>
            <p className="mt-4 text-gray-700 text-[16px]">
              The 1<sup>st</sup> ICAIT (ICAIT2025) will be held in Yogyakarta,
              Indonesia on 10<sup>th</sup> - 11<sup>th</sup> September, 2025. It
              is conducted by the Artificial Intelligence Research Group of the
              Informatics Department, Faculty of Industrial Technology,
              Universitas Ahmad Dahlan, Indonesia. The 1<sup>st</sup> ICAT is
              held on the theme of "Artificial Intelligence Applications for a
              Prosperous and Sustainable Living in the Modern Society."
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutConference;
