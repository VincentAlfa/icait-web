import { Card } from "./ui/card";
import Header1 from "./ui/Header1";
import speaker1 from "../assets/img/speaker-1.jpeg";
import speaker2 from "../assets/img/speaker-2.jpeg";
import speaker3 from "../assets/img/speaker-3.jpeg";
import Image from "next/image";

const speakers = [
  {
    name: "John Doe",
    university: "Univ A",
    image: speaker1,
  },
  { name: "John Doe", university: "Univ A", image: speaker2 },
  { name: "John Doe", university: "Univ A", image: speaker3 },
  { name: "John Doe", university: "Univ A", image: speaker1 },
];

const ConferenceSpeakers = () => {
  return (
    <section className="px-8 md:px-[140px] py-16 bg-gradient-to-br from-san-juan-800 to-san-juan-950">
      <Header1 title="Conference Speakers" type="light" />
      <div className="grid grid-cols-12 gap-10">
        {speakers.map((speaker, index) => (
          <Card
            key={index}
            className="bg-gradient-to-b from-saffron-400 to-saffron-400 hover:from-saffron-400 hover:to-saffron-800 rounded-2xl p-4 flex flex-col items-center text-slate-900 hover:text-slate-50 px-2 py-3.5 col-span-12 md:col-span-3 border-0 transition-colors duration-300 ease-out"
          >
            <Image
              src={speaker.image} // Ganti dengan path gambar yang sesuai
              alt={speaker.name}
              className="aspect-[4/5.6] self-center rounded-xl object-cover mb-2"
            />
            <div className="text-start self-start flex flex-col gap-1.5">
              <h3 className="text-2xl font-semibold">{speaker.name}</h3>
              <p className="text-base">{speaker.university}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ConferenceSpeakers;
