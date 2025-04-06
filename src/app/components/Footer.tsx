import Image from "next/image";
// import Link from "next/link";
import Whatsapp from "../../assets/logo/WA.png";
import Instagram from "../../assets/logo/ig.png";
import Tiktok from "../../assets/logo/tt.png";
import Facebook from "../../assets/logo/fb.png";
import ImageFooter from "../../assets/imagefooter.svg";
import Nuatwhite from "../../assets/Nuatwhite.png"; 
import Google from "../../assets/google.png";

export function Footer() {
  return (
    <div>
      {/* BACKGROUND IMAGE WITH TEXT */}
      <div className="relative w-full h-screen">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start px-8 z-[20]">
          <div className="text-white">
            <div className="container m-[250px]">
              <h2 className="text-6xl font-semibold mb-4 text-white">OPENING HOURS</h2>
              <p className="mb-2 text-2xl text-white mt-10">Everyday</p>
              <p className="text-2xl text-white mt-2">Opens: 10.00 AM</p>
              <p className="text-2xl text-white mt-2">Close: 21.00 PM ( Last Order )</p>

              <h2 className="text-6xl font-semibold mt-20 mb-4 text-white">HAPPY HOUR</h2>
              <p className="mb-2 text-2xl text-white mt-10">Everyday</p>
              <p className="text-2xl text-white mt-2">Open: 09.00 AM</p>
              <p className="text-2xl text-white mt-2">Until: 14.00 PM ( Last Order )</p>
            </div>
          </div>
        </div>
        <Image
          src={ImageFooter}
          alt="footer background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* FOOTER SECTION */}
      <footer style={{ backgroundColor: "#000000FF" }}>
        <div className="container mx-auto px-8 py-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo */}
            <div className="flex flex-col items-start gap-4">
              <Image src={Nuatwhite} alt="Nuat Time Logo" width={300} />
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Contact Us</h3>
              <p className="flex items-center gap-3 mb-4 text-white text-2xl">
                <Image src={Whatsapp} alt="WhatsApp" width={24} height={24} />
                0851-8688-8510
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white text-2xl">
                  <Image src={Instagram} alt="Instagram" width={24} height={24} />
                  @nuattime
                </div>
                <div className="flex items-center gap-3 text-white text-2xl">
                  <Image src={Tiktok} alt="TikTok" width={24} height={24} />
                  @nuattime
                </div>
                <div className="flex items-center gap-3 text-white text-2xl">
                  <Image src={Facebook} alt="Facebook" width={24} height={24} />
                  Nuat Time
                </div>
              </div>
            </div>

            {/* Address & Google Rate */}
            <div className="flex flex-col gap-4 justify-between">
              <div>
                <p className="text-white text-2xl">
                  Ruko Golf Island blok E
                  <br />
                  109–111 Pantai Indah Kapuk – Jakarta Utara
                </p>
              </div>
              <div className="bg-white rounded-lg px-6 py-4 mt-4 text-black w-fit shadow-md">
                <span className="font-semibold text-2xl">Rate us</span>
                <Image
                  src={Google}
                  alt="Google Logo"
                  width={90}
                  height={28}
                  className="inline ml-2"
                />
              </div>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="border-t border-white mt-12 pt-6 text-center text-2xl text-white">
            All Rights Reserved NuatTime. © 2023
          </div>
        </div>
      </footer>
    </div>
  );
}
