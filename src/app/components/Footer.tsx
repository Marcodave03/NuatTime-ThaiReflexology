import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#613E2C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Number</h3>
            <p className="flex items-center mb-8">
              <Image src="/assets/logo/WA.png" alt="WhatsApp" width={24} height={24} className="mr-2" />
              0851-8688-8510
            </p>
            <h3 className="text-xl font-bold mb-4">Checkout our Social Media</h3>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/nuattime/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Image src="/assets/logo/ig.png" alt="Instagram" width={24} height={24} className="mr-2" />
                nuattime
              </a>
              <a
                href="https://www.tiktok.com/@nuattime"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Image src="/assets/logo/tt.png" alt="TikTok" width={24} height={24} className="mr-2" />
                nuattime
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61552768587786"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Image src="/assets/logo/fb.png" alt="Facebook" width={24} height={24} className="mr-2" />
                Nuat Time
              </a>
            </div>
          </div>
          <div>
            <p className="mb-8">Ruko Golf Island blok E 109-111 Pantai Indah Kapuk - Jakarta Utara</p>
            <nav className="space-y-4">
              <Link href="#landing-section" className="block hover:underline">
                About
              </Link>
              <Link href="#services-section" className="block hover:underline">
                Service
              </Link>
              <Link href="#pricelist-section" className="block hover:underline">
                Pricelist
              </Link>
              <Link href="#location-section" className="block hover:underline">
                Location
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

