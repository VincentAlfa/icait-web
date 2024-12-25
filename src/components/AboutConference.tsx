import Image from "next/image";
import Header1 from "./ui/Header1";

const AboutConference = () => {
  return (
    <section className="p-6 bg-gray-50" id="about">
      <div className="max-w-screen-xl mx-auto">
        <Header1 title="About Conference"/>
        <div className="flex flex-col items-center gap-5 w-full md:flex-row">
          <div className=" md:w-[40%] lg:w-[30%]">
            <Image
              src={"/conference.jpeg"}
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
              held on the theme of &quot;Artificial Intelligence Applications for a
              Prosperous and Sustainable Living in the Modern Society.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutConference;
