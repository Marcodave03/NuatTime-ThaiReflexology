import { Navbar } from "./components/Navbar";
import { DoorAnimation } from "./components/DoorAnimation";
import { Landing } from "./pages/Landing";
import { Philosophy } from "./pages/Philosophy";
import { Services } from "./pages/Services";
// import { Pricelist } from "./pages/Pricelist";
import { Promotion } from "./pages/Promotion";
import { Location } from "./pages/Location";
import { Value } from "./pages/Value";
import { Review } from "./pages/Review";
import { Menu } from "./pages/Menu";
import { Footer } from "./components/Footer";





export default function Home() {
  return (
    <div className="font-sans bg-[#F3EFEC]">
      <Navbar />
      <DoorAnimation />
      <main>
        <Landing />
        <Philosophy />
        <Value />
        <Services />
        <Menu/>
        <Promotion />
        <Location />
        <Review />
      </main>
      <Footer />
    </div>
  );
}
