"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Door1 from "../../../assets/Door/door1.svg";
import Door2 from "../../../assets/Door/door2.svg";


export function DoorAnimation() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset
      setScrollPosition(position)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const leftDoorShift = -Math.min(scrollPosition, 8000)
  const rightDoorShift = Math.min(scrollPosition, 8000)

  return (
    <div className="door-container hidden lg:block">
      <div className="door-wrapper">
        <div className="door left-door" style={{ transform: `translateX(${leftDoorShift}px)` }}>
          <Image src={Door1} alt="Left Door" width={800} height={600} />
        </div>
        <div className="door right-door" style={{ transform: `translateX(${rightDoorShift}px)` }}>
          <Image src={Door2} alt="Right Door" width={800} height={600} />
        </div>
      </div>
    </div>
  )
}

