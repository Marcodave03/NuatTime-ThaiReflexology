import Link from "next/link"
import Image from "next/image"
import Whatsapp from "../../../assets/logo/WA.png"
import Instagram from "../../../assets/logo/ig.png"
import Tiktok from "../../../assets/logo/tt.png"
import Facebook from "../../../assets/logo/fb.png"

export function Footer() {
  return (
    <footer className="bg-orange-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Number</h3>
            <p className="flex items-center mb-8 text-white">
              <Image src={Whatsapp} alt="WhatsApp" width={24} height={24} className="mr-2" />
              0851-8688-8510
            </p>
            <h3 className="text-xl font-bold mb-4 text-white">Checkout our Social Media</h3>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/nuattime/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white"
              >
                <Image src={Instagram} alt="Instagram" width={24} height={24} className="mr-2" />
                nuattime
              </a>
              <a
                href="https://www.tiktok.com/@nuattime"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white"
              >
                <Image src={Tiktok} alt="TikTok" width={24} height={24} className="mr-2" />
                nuattime
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61552768587786"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white"
              >
                <Image src={Facebook} alt="Facebook" width={24} height={24} className="mr-2" />
                Nuat Time
              </a>
            </div>
          </div>
          <div>
            <p className="mb-8 text-white">Ruko Golf Island blok E 109-111 Pantai Indah Kapuk - Jakarta Utara</p>
            <nav className="space-y-4">
              <Link href="#landing-section" className="block hover:underline text-white">
                About
              </Link>
              <Link href="#services-section" className="block hover:underline text-white">
                Service
              </Link>
              <Link href="#pricelist-section" className="block hover:underline text-white">
                Pricelist
              </Link>
              <Link href="#location-section" className="block hover:underline text-white">
                Location
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

