import Image from 'next/image';
import React from 'react';
import Fullbody from "../../../assets/fullbody.svg"
import Thaimassage from "../../../assets/thaimassage.svg"
import Oilmassage from "../../../assets/oilmassage.svg"
import Other from "../../../assets/other.svg"

export function Pricelist() {
  return (
    <section id="pricelist-section" className="my-24">
      <h2 className="text-4xl font-medium text-center mb-12">Pricelist</h2>

      {/* Desktop View */}
      <div className="hidden lg:block mt-[50px]">
        <div className="container mx-auto grid grid-cols-2 gap-8">
          <Image
            src={Fullbody}
            alt="Full Body Reflexology Pricelist" 
            className="w-full h-auto object-cover rounded-xl shadow-md" 
          />
          <Image
            src={Thaimassage}
            alt="Thai Massage Pricelist" 
            className="w-full h-auto object-cover rounded-xl shadow-md" 
          />
          <Image
            src={Oilmassage}
            alt="Oil Massage Pricelist" 
            className="w-full h-auto object-cover rounded-xl shadow-md" 
          />
          <Image
            src={Other}
            alt="Other Treatments Pricelist" 
            className="w-full h-auto object-cover rounded-xl shadow-md" 
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden mt-[50px]">
        <div className="container mx-auto space-y-8">
          <Image
            src={Fullbody}
            alt="Full Body Reflexology Pricelist" 
            className="w-full h-auto object-cover rounded-xl shadow-md" 
          />
          <Image
            src={Thaimassage}
            alt="Thai Massage Pricelist" 
            className="w-full h-auto object-cover rounded-xl shadow-md" 
          />
          <Image
            src={Oilmassage}
            alt="Oil Massage Pricelist" 
            className="w-full h-auto object-cover rounded-xl shadow-md" 
          />
          <Image
            src={Other}
            alt="Other Treatments Pricelist" 
            className="w-full h-auto object-cover rounded-xl shadow-md" 
          />
        </div>
      </div>
    </section>
  );
}

export default Pricelist;
