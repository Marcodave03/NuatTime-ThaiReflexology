import Image from "next/image"
import { Navbar } from "./components/Navbar"
import { DoorAnimation } from "./components/DoorAnimation"
import { Philosophy } from "./components/Philosophy"
import { Services } from "./components/Services"
import { Pricelist } from "./components/Pricelist"
import { Promotion } from "./components/Promotion"
import { Location } from "./components/Location"
import { Review } from "./components/Review"
import { Footer } from "./components/Footer"


import NuatDoor from "../../assets/inside2.svg"
import NuatFront from "../../assets/Nuatland.svg"

export default function Home() {
  return (
    <div className="font-sans bg-[#F3EFEC]">
      <Navbar />
      <DoorAnimation />
      <main>
        <section id="landing-section" className="mt-5 lg:mt-0 relative pt-16 lg:pt-24">
          <div className="container mx-auto text-center relative z-10">
            <div className="lg:w-1/3 mx-auto">
              <Image src={NuatDoor} alt="nuattimelog" className="w-auto mx-auto mt-12" />
              <p className="mt-12 text-2xl font-serif">
                Welcome to the serene world of Thai Reflexology. Nuat Time started open in December 11th, 2023 at Blok E
                No. 109 Ruko Gold Island PIK.
              </p>
              <p className="mt-12 text-2xl font-serif">
                Thai Reflexology, a practice that harmonizes the body;s energy flow and promotes deep relaxation.
              </p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
            <Image
              src={NuatFront}
              alt="nuattime"
              layout="fill"
              objectFit="contain"
              objectPosition="right top"
            />
          </div>
        </section>
        <Philosophy/>
        <Services />
        <Pricelist />
        <Promotion />
        <Location />
        <Review/>
      </main>

      <Footer />
    </div>
  )
}

