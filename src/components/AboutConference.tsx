import Image from "next/image";
import { Card } from "./ui/card";

const AboutConference = () => {
  return (
    <section className="p-6 bg-gray-50">
      <div className="mx-[140px] my-[64px]">
        <div className="flex">
          <div className="w-4 h-10 bg-gradient-to-b from-[#F2C204] to-[#734310] rounded-lg mr-1"></div>
          <h2 className="text-4xl mb-2 font-medium">About Conference</h2>
        </div>
        <Card className="flex flex-col md:flex-row overflow-hidden shadow-none border-0 bg-transparent min-h-[450px]">
          <div className="mt-4 md:w-2/5 max-w-[360px]">
            <Image
              src="/conference.jpeg"
              alt="Conference"
              className="w-full h-full object-cover"
              width={360}
              height={450}
            />
          </div>
          <div className="flex flex-col justify-center  ml-10 md:w-3/5 px-0">
            <p className="font-normal text-xl">
              The International Conference on Artificial Intelligence Technology
              (ICAIT) aims at becoming a venue to deliver and to communicate
              recent progress of the artificial intelligence research and its
              applications in various domains, as well as bringing together
              scholars and practitioners to disseminate and discuss the ongoing
              research in the field of Artificial Intelligence.
            </p>
            <p className="mt-7 font-normal text-xl">
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
