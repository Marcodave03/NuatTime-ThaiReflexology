"use client";

import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";

import { useState } from "react";
import clsx from "clsx";

const slides = [
  {
    id: "c1",
    title: "Comfortable",
    desc: "Comfortable place where you enjoy your time",
    color: "text-white",
    bgImage: Image1,
  },
  {
    id: "c2",
    title: "Relax",
    desc: "Quiet and relax",
    color: "text-white",
    bgImage: Image2,
  },
  {
    id: "c3",
    title: "Modern",
    desc: "Modern designs and interior",
    color: "text-white",
    bgImage: Image3,
  },
  {
    id: "c4",
    title: "Safe",
    desc: "Keep your belongings safe",
    color: "text-white",
    bgImage: Image4,
  },
];

export default function SliderSection() {
  const [active, setActive] = useState("c1");

  return (
    <section className="">
      <div className="flex h-[700px] w-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            onClick={() => setActive(slide.id)}
            className={clsx(
              "relative flex items-start cursor-pointer overflow-hidden rounded-3xl mx-2 transition-all duration-700 shadow-xl bg-cover bg-center",
              active === slide.id ? "w-[1000px]" : "w-[100px]"
            )}
            style={{
              backgroundImage: `url(${slide.bgImage.src})`,
            }}
          >
            {/* Only show overlay when this is the active slide */}
            {active === slide.id && (
              <div className="absolute inset-0 bg-black/40 z-0 transition-opacity duration-700"></div>
            )}

            {/* Content with z-10 so it appears above the overlay */}
            <div className="flex text-white px-6 py-8 items-start relative z-10">
              <div className="bg-[#223] text-white w-14 h-14 flex items-center justify-center rounded-full text-xl font-semibold mr-5">
                {slide.id.slice(1)}
              </div>
              <div
                className={clsx(
                  "transition-all duration-500 ease-in-out transform",
                  active === slide.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-8"
                )}
              >
                <h3
                  className={clsx(
                    slide.color,
                    "text-4xl font-semibold"
                  )}
                >
                  {slide.title}
                </h3>
                <p
                  className={clsx(
                    slide.color,
                    "text-xl font-serif mt-2"
                  )}
                >
                  {slide.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
