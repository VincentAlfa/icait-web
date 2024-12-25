import { Card } from "./ui/card";
import Image from "next/image";
import Header1 from "./ui/Header1";

const speakers = [
  { name: "John Doe", university: "Univ A", image: "/speaker-2.jpeg" },
  { name: "John Doe", university: "Univ A", image: "/speaker-2.jpeg" },
  { name: "John Doe", university: "Univ A", image: "/speaker-2.jpeg" },
  { name: "John Doe", university: "Univ A", image: "/speaker-2.jpeg" },
];

const ConferenceSpeakers = () => {
  return (
    <section className="p-6 bg-blue-900 text-white" id="speaker">
      <div className="max-w-screen-xl mx-auto">
        <Header1 title="Conference Speaker" type="light" />
        <div className="flex flex-wrap gap-4 justify-evenly items-center">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className="bg-gradient-to-b from-saffron-400 to-saffron-400 rounded-xl border-none p-4 flex flex-col items-center max-w-[260px] mx-auto hover:from-saffron-400 hover:to-saffron-800 hover:text-slate-50 transition-colors duration-300 ease-out"
            >
              <div className="w-full mb-2">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-[350px] rounded-lg object-cover"
                  width={232}
                  height={330}
                />
              </div>
              <div className="text-left self-start">
                <h3 className="text-lg font-medium">{speaker.name}</h3>
                <p className="text-sm">{speaker.university}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceSpeakers;
