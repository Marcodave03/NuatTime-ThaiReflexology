import Image from "next/image";
import NuatFront from "../../assets/Nuatland.svg";

export function Landing(){
    return(
        <section id="landing-section">
          <div className="w-full h-auto flex justify-between items-center">
            <div className="w-1/2 pr-4 ml-8">
              <p className="text-6xl font-medium">Welcome to Nuat Time</p>
              <p className="mt-12 text-3xl font-serif">
                Step into the tranquil world of Thai Reflexology, a haven of
                Relaxation for everyone. Thai Reflexology is a practice that
                harmonizes the body’s energy flow and promotes deep relaxation.
              </p>
              <div className="flex justify-start mt-5">
                <a
                  href="https://www.instagram.com/nuattime/"
                  target="_blank"
                  className="block bg-[#AB875F] text-white text-xl font-serif text-center py-3 mr-4 mt-2 rounded-full w-48"
                >
                  Book Now
                </a>
                <a
                  href="https://www.instagram.com/nuattime/"
                  target="_blank"
                  className="block border-2 border-[#AB875F] text-[#AB875F] text-xl font-serif text-center py-3 mt-2 rounded-full w-48 hover:bg-[#AB875F] hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </div>
              <div></div>
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
    );
}