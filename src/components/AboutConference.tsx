import Image from "next/image";

const AboutConference = () => {
  return (
    <section className="p-6 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center mb-5">
          <div className="w-4 h-10 bg-gradient-to-b from-[#F2C204] to-[#734310] rounded-lg mr-1"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">
            About Conference
          </h2>
        </div>
        <div className="flex flex-col items-center gap-5 w-full md:flex-row">
          <div className=" md:w-[40%] lg:w-[30%]">
            <Image
              src={conferenceImg}
              alt="Conference"
              className="object-cover h-[300px] md:h-[400px] lg:[450px]"
              width={360}
              height={450}
            />
          </div>
          <div className="flex flex-col md:w-[60%] lg:w-[70%]">
            <p className="font-normal text-xl">
              The International Conference on Artificial Intelligence Technology
              &#40;ICAIT&#41; aims at becoming a venue to deliver and to
              communicate recent progress of the artificial intelligence
              research and its applications in various domains, as well as
              bringing together scholars and practitioners to disseminate and
              discuss the ongoing research in the field of Artificial
              Intelligence.
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
        </div>
      </div>
    </section>
  );
};

export default AboutConference;
