"use client";

import { CustomButton } from "@/components/CustomButton";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DesktopMenu from "./navigation/DesktopMenu";
import MobileMenu from "./navigation/MobileMenu";
import logo from "/public/algorify-logo.svg";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY === 0);

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <header>
        {/* Desktop Header */}
        <div
          className={`fixed top-0 right-0 left-0 z-99 hidden w-full px-6 py-4 transition-all duration-300 ease-in-out lg:block ${isAtTop ? "bg-transparent" : "border-b border-gray-200/50 bg-white/90 backdrop-blur-md"} ${isVisible ? "translate-y-0" : "-translate-y-full"} `}
        >
          <div className="mx-auto flex max-w-full items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center">
                <Image src={logo} alt="Logo" className="h-auto w-38" />
              </div>
            </Link>

            {/* Navigation */}
            <DesktopMenu />

            {/* Hire Us Button */}

            <CustomButton
              className="px-6"
              variant="transparent"
              showArrow={false}
            >
              Hire Us
            </CustomButton>
          </div>
        </div>
        {/* End Desktop Header */}

        {/* Mobile Header */}
        <div className="block lg:hidden">
          <MobileMenu />
        </div>
        {/* End Mobile Header */}
      </header>
    </>
  );
};

export default Header;
