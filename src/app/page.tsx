import Image from "next/image";
import Door1 from "../../assets/Door/door1.svg";
import Door2 from "../../assets/Door/door2.svg";
import Inside2 from "../../assets/inside2.svg";
// import { useEffect } from 'react';
// import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  // useEffect(() => {
  //   // Navbar Transparency on Scroll
  //   const handleNavbarScroll = () => {
  //     const navbar = document.querySelector('.navbar');
  //     if (navbar && window.scrollY > 50) {
  //       navbar.classList.add('transparent');
  //     } else {
  //       navbar?.classList.remove('transparent');
  //     }
  //   };

  //   // Initialize AOS Library
  //   AOS.init({ duration: 1500 });
  //   AOS.refresh();

  //   // Door Animation Logic
  //   let doorsAnimated = false;
  //   let doorsFullyOpened = false;
  //   const contentHeight = document.documentElement.scrollHeight;
  //   const leftDoor = document.querySelector('.left-door') as HTMLElement;
  //   const rightDoor = document.querySelector('.right-door') as HTMLElement;

  //   const animateDoors = () => {
  //     const scrollTop = window.scrollY;
  //     const scrollPercent = (scrollTop / contentHeight) * 100;

  //     if (!doorsAnimated) {
  //       const leftDoorShift = -Math.min(scrollTop, 8000);
  //       const rightDoorShift = Math.min(scrollTop, 8000);

  //       if (leftDoor && rightDoor) {
  //         leftDoor.style.transform = `translateX(${leftDoorShift}px)`;
  //         rightDoor.style.transform = `translateX(${rightDoorShift}px)`;
  //       }

  //       if (scrollPercent >= 100) {
  //         doorsAnimated = true;
  //       }
  //     }

  //     if (doorsAnimated && !doorsFullyOpened && scrollTop >= contentHeight - window.innerHeight) {
  //       doorsFullyOpened = true;
  //       document.body.classList.add('show');
  //       document.body.style.overflow = 'auto';
  //     }
  //   };

  //   // Control Body Scroll and Door Pointer Events
  //   const handleScroll = () => {
  //     requestAnimationFrame(animateDoors);

  //     if (doorsAnimated && !doorsFullyOpened) {
  //       document.body.style.overflow = 'hidden';
  //     } else {
  //       document.body.style.overflow = 'auto';
  //     }

  //     const doorContainer = document.querySelector('.door-container') as HTMLElement;
  //     if (window.scrollY > 200) {
  //       doorContainer.style.pointerEvents = 'none';
  //     } else {
  //       doorContainer.style.pointerEvents = 'auto';
  //     }
  //   };

  //   // Add Scroll Event Listeners
  //   window.addEventListener('scroll', handleScroll);
  //   window.addEventListener('scroll', handleNavbarScroll);

  //   // Cleanup on Component Unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     window.removeEventListener('scroll', handleNavbarScroll);
  //   };
  // }, []);


  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
     
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full p-4 bg-gray-300 shadow-md z-20">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">
            Helo
          </div>
          <div className="flex space-x-6 mr-4">
            <a className="nav-link animated-underline text-lg hover:underline" href="#landing-section">About</a>
            <a className="nav-link animated-underline text-lg hover:underline" href="#landing-service">Service</a>
            <a className="nav-link animated-underline text-lg hover:underline" href="#landing-pricelist">Pricelist</a>
            <a className="nav-link animated-underline text-lg hover:underline" href="#landing-location">Location</a>
          </div>
        </div>
      </div>

      {/* Content */}

      

      <main className="">

      <div className="door-container d-none d-lg-block">
        <div className="door-wrapper">
            <div className="door left-door">
              <Image src={Door1} alt="Left Door" />
            </div>
            <div className="door right-door">
              <Image src={Door2} alt="Right Door" />
            </div>
          </div>        
      </div>

      <section className="hidden lg:block mt-12 pt-24">
        <div className="h-screen w-full relative">
          <Image
            src={Inside2}
            alt="Inside View"
            layout="fill"
            objectFit="cover"
            priority 
          />
        </div>
      </section>

        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
