import { Card } from "./ui/card";

const speakers = [
  { name: "John Doe", university: "Univ A", image: "/path/to/image1.jpg" },
  { name: "John Doe", university: "Univ A", image: "/path/to/image2.jpg" },
  { name: "John Doe", university: "Univ A", image: "/path/to/image3.jpg" },
  { name: "John Doe", university: "Univ A", image: "/path/to/image4.jpg" },
  { name: "John Doe", university: "Univ A", image: "/path/to/image5.jpg" },
  { name: "John Doe", university: "Univ A", image: "/path/to/image6.jpg" },
];

const ConferenceSpeakers = () => {
  return (
    <section className="p-6 bg-blue-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Conference Speakers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {speakers.map((speaker, index) => (
          <Card
            key={index}
            className="bg-yellow-400 rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={speaker.image} // Ganti dengan path gambar yang sesuai
              alt={speaker.name}
              className="w-32 h-32 rounded-full object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">{speaker.name}</h3>
            <p className="text-sm">{speaker.university}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ConferenceSpeakers;
