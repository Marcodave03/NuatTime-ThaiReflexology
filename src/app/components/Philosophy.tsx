import Image from "next/image";
import Logo1 from "../../../assets/logo (1).svg"
import Logo2 from "../../../assets/logo (2).svg"
import Logo3 from "../../../assets/logo (3).svg"

export function Philosophy() {
    return (
        <section className="mt-[400px]">
        <div className="container mx-auto overflow-hidden">
          <div className="flex justify-center text-4xl font-medium pt-[70px]">
            Our Philosophy
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-1/3">
              <div className="zoom-effect text-center mt-[60px]">
                <Image 
                  src={Logo1} 
                  alt="nuattimelog" 
                  width={120} 
                  height={120} 
                  className="mt-[60px] mx-auto"
                />
                <p className="text-2xl font-serif mt-4">Royal Orchid</p>
              </div>
              <div className="zoom-effect text-center mt-[60px]">
                <Image 
                  src={Logo2}
                  alt="nuattimelog" 
                  width={120} 
                  height={120} 
                  className="mt-[60px] mx-auto"
                />
                <p className="text-2xl font-serif mt-4">Mindfulness</p>
              </div>
              <div className="zoom-effect text-center mt-[60px]">
                <Image 
                  src={Logo3}
                  alt="nuattimelog" 
                  width={120} 
                  height={120} 
                  className="mt-[60px] mx-auto"
                />
                <p className="text-2xl font-serif mt-4">Massage</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  