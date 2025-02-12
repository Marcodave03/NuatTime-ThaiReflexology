"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../../assets/Nuatlogo.svg"

export function Navbar() {
  const [isTransparent, setIsTransparent] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 z-20 transition-colors ${isTransparent ? "bg-opacity-50" : "bg-[#C8C4BF]"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="hidden md:block">
          <Image src={Logo} alt="logo" width={150} height={50} />
        </Link>
        <div className="flex space-x-6">
          <Link href="#landing-section" className="nav-link animated-underline text-lg font-bold">
            About
          </Link>
          <Link href="#services-section" className="nav-link animated-underline text-lg font-bold">
            Service
          </Link>
          <Link href="#pricelist-section" className="nav-link animated-underline text-lg font-bold">
            Pricelist
          </Link>
          <Link href="#location-section" className="nav-link animated-underline text-lg font-bold">
            Location
          </Link>
        </div>
      </div>
    </nav>
  )
}

