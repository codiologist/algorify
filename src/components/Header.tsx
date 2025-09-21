"use client";

import { CustomButton } from "@/components/CustomButton";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import DesktopMenu from "./navigation/DesktopMenu";
import MobileMenu from "./navigation/MobileMenu";
import logo from "/public/algorify-logo.svg";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  // Keep last scroll position in a ref so we don't re-bind listeners
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    // Initialize from current scroll position on mount
    const initY = typeof window !== "undefined" ? window.scrollY : 0;
    lastScrollYRef.current = initY;
    setIsAtTop(initY === 0);

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Update top/background state
      setIsAtTop(currentScrollY === 0);

      // Hide on scroll down past threshold, show on scroll up
      const was = lastScrollYRef.current;
      if (currentScrollY > was && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollYRef.current = currentScrollY;
    };

    // Run once so state matches the current position after a hard refresh
    controlNavbar();

    // Use passive listener for smoother scrolling
    window.addEventListener("scroll", controlNavbar, { passive: true });
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  return (
    <header>
      {/* Desktop Header */}
      <div
        className={`fixed top-0 right-0 left-0 z-999 hidden w-full px-6 py-4 transition-all duration-300 ease-in-out lg:block ${isAtTop ? "bg-transparent" : "border-b border-gray-200/50 bg-white/90 backdrop-blur-md"} ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
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

      {/* Mobile Header */}
      <div className="block lg:hidden">
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
