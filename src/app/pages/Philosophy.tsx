import Image from "next/image";
import Logo1 from "../../assets/logo (1).svg";
import Logo2 from "../../assets/logo (2).svg";
import Logo3 from "../../assets/logo (3).svg";

export function Philosophy() {
  return (
    <section className="mt-[300px]">
      <div className="container mx-auto">
        <div className="flex justify-center text-6xl font-medium pt-[70px] text-center">
          Our Philosophy
        </div>

        <div className="flex flex-wrap justify-around items-center mt-[100px] gap-12 px-4">
          <div className="zoom-effect text-center mt-[50px]">
            <Image
              src={Logo1}
              alt="nuattime-logo"
              width={200}
              height={200}
              className="mx-auto"
            />
            <p className="text-2xl font-serif mt-4 break-words">Royal Orchid</p>
          </div>
          <div className="zoom-effect text-center">
            <Image
              src={Logo2}
              alt="nuattime-logo"
              width={200}
              height={200}
              className="mx-auto"
            />
            <p className="text-2xl font-serif mt-4 break-words">Mindfulness</p>
          </div>
          <div className="zoom-effect text-center">
            <Image
              src={Logo3}
              alt="nuattime-logo"
              width={200}
              height={200}
              className="mx-auto"
            />
            <p className="text-2xl font-serif mt-4 break-words">Massage</p>
          </div>
        </div>
      </div>
    </section>
  );
}
