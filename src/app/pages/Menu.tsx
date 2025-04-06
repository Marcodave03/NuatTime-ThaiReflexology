// components/MassageSlider.tsx

import Image from "next/image";
import Image1 from "../../assets/fullbody.jpg";
import Image2 from "../../assets/oilmassage.jpg";
import Image3 from "../../assets/thaireflex.jpg";

const massages = [
  {
    title: "Full Body Reflexology",
    image: Image1,
    description:
      "Pressures on body parts to relieve tension, improve circulation. (Foot with cream, other body parts with dry massage)",
    prices: ["60 min : 140k", "90 min : 200k", "120 min : 250k"],
  },
  {
    title: "Oil Massage",
    image: Image2,
    description:
      "Relaxing massage using essential oils to improve blood flow and relieve muscle tension.",
    prices: ["60 min : 160k", "90 min : 220k", "120 min : 270k"],
  },
  {
    title: "Thai Massage",
    image: Image3,
    description:
      "Traditional Thai techniques combining acupressure, yoga, and stretching.",
    prices: ["60 min : 150k", "90 min : 210k", "120 min : 260k"],
  },
];

export function Menu() {
  return (
    <div className="mt-[100px] ">
      <p className="text-6xl font-medium w-full text-center mb-[100px]">
        Book Now
      </p>
      <div className="flex w-full h-screen overflow-hidden">
        {massages.map((massage, index) => (
          <div
            key={index}
            className="w-1/3 relative group overflow-hidden flex items-center justify-center"
          >
            {/* Background Image */}
            <Image
              src={massage.image}
              alt={massage.title}
              fill
              className="object-cover transition duration-500 group-hover:brightness-50"
            />

            {/* Title (centered) */}
            <h2 className="text-white text-3xl font-bold z-10 transition duration-500 group-hover:opacity-0">
              {massage.title}
            </h2>

            {/* Slide-in Panel */}
            {/* Slide-in Panel */}
            <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-80 text-white p-8 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out flex flex-col justify-center space-y-4 z-20">
              <div>
                <h2 className="text-white text-4xl font-bold mb-4">
                  {massage.title}
                </h2>
                <p className="text-lg text-white">{massage.description}</p>
              </div>
              <div>
                {massage.prices.map((price, i) => (
                  <p className="text-white" key={i}>
                    {price}
                  </p>
                ))}
              </div>
              <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
