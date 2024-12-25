import Image from "next/image";
import { Card } from "./ui/card";
import conferenceImg from "../assets/img/edwin-andrade-4V1dC_eoCwg-unsplash.webp";
import Header1 from "./ui/Header1";

const AboutConference = () => {
  return (
    <section className="mx-8 md:mx-[140px] py-[64px]">
      <Header1 title="About Conference" />
      <Card className="shadow-none border-0 bg-transparent rounded-none">
        <div className="grid grid-cols-12 place-content-between gap-10">
          <div className="col-span-12 md:col-span-4">
            <Image
              src={conferenceImg}
              alt="Conference"
              className="aspect-[4/5] h-max object-cover"
            />
          </div>
          <div className="flex flex-col justify-center col-span-12 md:col-span-8">
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
              The 1<sup>st</sup> ICAIT &#40;ICAIT2025&#41; will be held in
              Yogyakarta, Indonesia on 10<sup>th</sup> - 11<sup>th</sup>{" "}
              September, 2025. It is conducted by the Artificial Intelligence
              Research Group of the Informatics Department, Faculty of
              Industrial Technology, Universitas Ahmad Dahlan, Indonesia. The 1
              <sup>st</sup> ICAT is held on the theme of
              <span className="italic">
                "Artificial Intelligence Applications for a Prosperous and
                Sustainable Living in the Modern Society."
              </span>
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default AboutConference;
