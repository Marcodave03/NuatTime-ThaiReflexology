import Image from "next/image";
import Promotion1 from "../../assets/promotion.svg";
import Promotion2 from "../../assets/promotion1.svg";

export function Promotion() {
  return (
    <section id="promotion-section" className="my-24 relative mt-[400px]">
      {/* Desktop View */}
      <div className="hidden lg:block relative">
        {/* Full-screen Image */}
        <div className="absolute inset-0 z-10 w-screen h-screen">
          <Image src={Promotion1} alt="Promotion" className="w-1/3 h-full" />
        </div>

        {/* Content Container */}
        <div className="relative z-20 w-screen h-screen flex justify-end items-center">
          <div className="w-1/2 bg-white/70 backdrop-blur-md p-10 rounded-l-xl shadow-lg  flex flex-col justify-center">
            <h3 className="text-6xl font-medium mb-5" data-aos="fade-left">
              Promotion
            </h3>
            <p className="text-2xl font-serif mb-5 mt-5" data-aos="fade-left">
              Unlock the Ultimate Comfort in Wellness with Our Exclusive
              Reflexology Deal! Elevate your relaxation experience and immerse
              yourself in unparalleled comfort that rejuvenates your mind, body,
              and soul. Don&apos;t miss this limited-time offer to enrich your
              reflexology journey with us.
            </p>
            <div className="mt-5">
              <a
                href="https://www.instagram.com/nuattime/"
                target="_blank"
                className="block border-2 border-[#AB875F] text-[#AB875F] text-xl font-serif text-center py-3 mt-2 rounded-full w-48 hover:bg-[#AB875F] hover:text-white transition-colors duration-300"
              >
                See More 
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden w-screen h-screen relative">
        <Image
          src={Promotion2}
          alt="Promotion"
          className="w-full h-[50%] object-cover mb-6"
        />
        <div className="px-6 text-center">
          <h3 className="text-4xl font-medium mb-5" data-aos="fade-left">
            Promotion
          </h3>
          <p className="text-xl font-serif mb-5" data-aos="fade-left">
            Unlock the Ultimate Comfort in Wellness with Our Exclusive
            Reflexology Deal! Elevate your relaxation experience and immerse
            yourself in unparalleled comfort that rejuvenates your mind, body,
            and soul. Don&apos;t miss this limited-time offer to enrich your
            reflexology journey with us.
          </p>
          <div className="mt-5">
            <a
              href="https://www.instagram.com/nuattime/"
              target="_blank"
              className="block bg-[#AB875F] text-white text-xl font-serif text-center py-3 rounded-full w-48 mx-auto"
            >
              Click here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
