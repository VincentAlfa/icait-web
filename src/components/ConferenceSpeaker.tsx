import { Card } from "./ui/card";
import Header1 from "./ui/Header1";
import speaker1 from "../assets/img/speaker-1.jpeg";
import speaker2 from "../assets/img/speaker-2.jpeg";
import speaker3 from "../assets/img/speaker-3.jpeg";
import Image from "next/image";

const speakers = [
  { name: "John Doe", university: "Univ A", image: "speaker-1.jpeg" },
  { name: "John Doe", university: "Univ A", image: "speaker-2.jpeg" },
  { name: "John Doe", university: "Univ A", image: "speaker-3.jpeg" },
  { name: "John Doe", university: "Univ A", image: "speaker-1.jpeg" },
  { name: "John Doe", university: "Univ A", image: "speaker-1.jpeg" },
  { name: "John Doe", university: "Univ A", image: "speaker-1.jpeg" },
  { name: "John Doe", university: "Univ A", image: "speaker-1.jpeg" },
];

const ConferenceSpeakers = () => {
  return (
    <section className="p-6 bg-blue-900 text-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center mb-5">
          <div className="w-4 h-10 bg-gradient-to-b from-[#F2C204] to-[#734310] rounded-lg mr-1"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">
            Conference Speaker
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 justify-evenly items-center">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className="bg-yellow-400 rounded-xl border-none p-4 flex flex-col items-center max-w-[260px] mx-auto hover:bg-gradient-to-b from-[#F2C204] to-[#734310] hover:text-white"
            >
              <div className="w-full mb-2">
                <img
                  src={speaker.image} // Ganti dengan path gambar yang sesuai
                  alt={speaker.name}
                  className="h-[350px] rounded-lg object-cover "
                />
              </div>

              <h3 className="text-lg font-semibold">{speaker.name}</h3>
              <p className="text-sm">{speaker.university}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceSpeakers;
