import Image from "next/image";
import Promotion1 from "../../../assets/promotion.svg"
import Promotion2 from "../../../assets/promotion1.svg"

export function Promotion() {
    return (
      <section id="promotion-section" className="my-24 relative">
        <h2 className="text-4xl font-medium text-center mb-12">Promotion</h2>
  
        {/* Desktop View */}
        <div className="hidden lg:block relative">
          <div className="absolute inset-0 z-10">
            <Image
              src={Promotion1}
              alt="Promotion" 
              className="h-[600px] w-auto mx-auto object-cover" 
            />
          </div>
          <div className="relative z-20 container mx-auto flex justify-end pt-12">
            <div className="w-1/2">
              <h3 className="text-4xl font-medium mb-5" data-aos="fade-left">Promotion</h3>
              <p className="text-xl font-serif mb-5" data-aos="fade-left">
                Unlock the Ultimate Comfort in Wellness with Our Exclusive Reflexology Deal! Elevate your relaxation experience and immerse yourself in unparalleled comfort that rejuvenates your mind, body, and soul. Don't miss this limited-time offer to enrich your reflexology journey with us.
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
        </div>
  
        {/* Mobile View */}
        <div className="block lg:hidden container mx-auto text-center">
          <Image
            src={Promotion2}
            alt="Promotion" 
            className="h-[200px] w-auto mx-auto object-cover mb-6" 
          />
          <h3 className="text-4xl font-medium mb-5" data-aos="fade-left">Promotion</h3>
          <p className="text-xl font-serif mb-5" data-aos="fade-left">
            Unlock the Ultimate Comfort in Wellness with Our Exclusive Reflexology Deal! Elevate your relaxation experience and immerse yourself in unparalleled comfort that rejuvenates your mind, body, and soul. Don't miss this limited-time offer to enrich your reflexology journey with us.
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
      </section>
    );
  }