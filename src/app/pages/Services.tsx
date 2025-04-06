import React from 'react';
import Image from 'next/image';
import About from "../../assets/AboutPic.svg";

export function Services() {
  return (
    <section id="services-section" className="my-24 mt-[100px]">

      {/* Desktop View */}
      <div className="hidden lg:block mt-[250px]">
        <div className="container mx-auto ">
          <div className="flex flex-wrap text-lg">
            <div className="w-full lg:w-5/12 pl-[90px]" data-aos="fade-right" data-aos-duration="1000">
              <Image 
                src={About}
                alt="services" 
                width={220} 
                height={380} 
                className="h-[600px] object-cover"
              />
            </div>
            <div className="w-full lg:w-7/12">
              <div className="text-6xl font-medium">Services</div>
              <div data-aos="fade-up">
                <p className="font-medium pt-[50px] text-2xl">Full Body Reflexology</p>
                <p className="text-2xl font-serif">Pressures on body parts to relieve tension, improve circulation (Foot with cream, other body parts with dry massage)</p>
              </div>
              <div data-aos="fade-up">
                <p className="font-medium pt-[20px] text-2xl">Oil Massage</p>
                <p className="text-2xl font-serif">Oil massage to body parts to relieve tension and stimulate relaxation</p>
              </div>
              <div data-aos="fade-up">
                <p className="font-medium pt-[20px] text-2xl">Thai Massage</p>
                <p className="text-2xl font-serif">Dry massage with Thai technique to relieve muscle stiffness and improve flexibility</p>
              </div>
              <div data-aos="fade-up">
                <p className="font-medium pt-[20px] text-2xl">Other Treatment</p>
                <p className="text-2xl font-serif">Kop / Kerik</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[100px]"></div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden mt-[200px]">
        <div className="container mx-auto">
          <div className="text-4xl font-serif">Services</div>
          <div className="mt-[70px]" data-aos="fade-right" data-aos-duration="1000">
            <Image 
              src={About}
              alt="services" 
              width={400} 
              height={200} 
              className="object-cover mx-auto"
            />
          </div>
          <div data-aos="fade-up">
            <p className="font-bold pt-[50px] text-xl">Full Body Reflexology</p>
            <p className="text-xl">Pressures on body parts to relieve tension, improve circulation (Foot with cream, other body parts with dry massage)</p>
          </div>
          <div className="mt-[70px]" data-aos="fade-right" data-aos-duration="1000">
            <Image 
              src="/assets/service2.svg" 
              alt="services" 
              width={400} 
              height={200} 
              className="object-cover mx-auto"
            />
          </div>
          <div data-aos="fade-up">
            <p className="font-bold pt-[20px] text-xl">Oil Massage</p>
            <p className="text-xl">Oil massage to body parts to relieve tension and stimulate relaxation</p>
          </div>
          <div className="mt-[70px]" data-aos="fade-right" data-aos-duration="1000">
            <Image 
              src="/assets/service3.svg" 
              alt="services" 
              width={400} 
              height={200} 
              className="object-cover mx-auto"
            />
          </div>
          <div data-aos="fade-up">
            <p className="font-bold pt-[20px] text-xl">Thai Massage</p>
            <p className="text-xl">Dry massage with Thai technique to relieve muscle stiffness and improve flexibility</p>
          </div>
          <div data-aos="fade-up">
            <p className="font-bold pt-[20px] text-xl">Other Treatment</p>
            <p className="text-xl">Kop / Kerik</p>
          </div>
        </div>
        <div className="h-[100px]"></div>
      </div>
    </section>
  );
}

