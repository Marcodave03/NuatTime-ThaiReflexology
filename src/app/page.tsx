import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { DoorAnimation } from "./components/DoorAnimation";
import { Philosophy } from "./components/Philosophy";
import { Services } from "./components/Services";
import { Pricelist } from "./components/Pricelist";
import { Promotion } from "./components/Promotion";
import { Location } from "./components/Location";
import { Review } from "./components/Review";
import { Footer } from "./components/Footer";

import NuatDoor from "../../assets/inside2.svg";
import NuatFront from "../../assets/Nuatland.svg";

export default function Home() {
  return (
    <div className="font-sans bg-[#F3EFEC]">
      <Navbar />
      <DoorAnimation/>

      <main>
        <section className="mt-5 lg:mt-0 relative">
          {/* First div with text and NuatDoor image */}
          <div className="text-center relative z-10">
            <div>
              <Image
                src={NuatDoor}
                alt="nuattimelog"
                className="w-[100vw] mt-12"
              />
            </div>
          </div>
        </section>

        {/* Second div with NuatFront image, positioned below */}
        <section id="landing-section" >
          <div className="w-full h-auto flex justify-between items-center">
            <div className="w-1/2 pr-4 ml-8">
              <p className="mt-12 text-2xl font-serif">
                Welcome to the serene world of Thai Reflexology. Nuat Time
                opened on December 11th, 2023 at Blok E No. 109 Ruko Gold Island
                PIK.
              </p>
              <p className="mt-12 text-2xl font-serif">
                Thai Reflexology, a practice that harmonizes the body&apos;s energy
                flow and promotes deep relaxation.
              </p>
            </div>
            <div className="w-1/2">
              <Image
                className="w-full object-cover"
                src={NuatFront}
                alt="nuattime"
                layout="responsive"
                width={300}
                height={100}
              />
            </div>
          </div>
        </section>

        <Philosophy />
        <Services />
        <Pricelist />
        <Promotion />
        <Location />
        <Review />
      </main>

      <Footer />
    </div>
  );
}
