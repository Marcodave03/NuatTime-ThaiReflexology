"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Door1 from "../../assets/Door/door1.svg";
import Door2 from "../../assets/Door/door2.svg";
import NuatDoor from "../../assets/inside2.svg";

export function DoorAnimation() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const leftDoorShift = -Math.min(scrollPosition, 8000);
  const rightDoorShift = Math.min(scrollPosition, 8000);

  const doorsFullyOpened = scrollPosition > 600; // Adjust based on when the doors are fully open

  return (
    <div>
      <div
        className={`door-container hidden lg:block ${
          doorsFullyOpened ? "pointer-events-none" : ""
        }`}
      >
        <div className="door-wrapper">
          <div
            className="door left-door"
            style={{
              transform: `translateX(${leftDoorShift}px)`,
            }}
          >
            <Image src={Door1} alt="Left Door" width={800} height={600} />
          </div>
          <div
            className="door right-door"
            style={{
              transform: `translateX(${rightDoorShift}px)`,
            }}
          >
            <Image src={Door2} alt="Right Door" width={800} height={600} />
          </div>
        </div>
      </div>
      <section className="mt-5 lg:mt-0 relative">
        <div className="text-center relative z-10">
          <div>
            <Image
              src={NuatDoor}
              alt="nuattimelog"
              className="w-[100vw] mt-12"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
