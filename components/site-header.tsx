"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // ✅ Nav links in one place
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav
        className="flex flex-col w-full md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto 
          bg-blue-300/50 text-white rounded-b-3xl 
          backdrop-blur-lg shadow-lg border border-white/20"
      >
        <div className="flex items-center px-4 py-2">
          {/* Logo (mobile) */}
          <Link
            href="/"
            className={`md:hidden relative group py-4 px-2 text-sm lg:text-base transition-all ${
              pathname === "/" ? "text-stone-900 font-semibold" : "text-white"
            }`}
          >
            <div className="relative flex items-center">
              <div className="w-auto h-10 flex items-center justify-start">
                <Image
                  src="/images/Logo-f.png"
                  alt="SkillKwiz Logo"
                  width={100}
                  height={30}
                  className="w-auto h-auto max-h-12 object-contain"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            {/* Desktop Logo */}
            <Link
              href="/"
              className={`relative group py-2 text-sm lg:text-base md:px-4 transition-all ${
                pathname === "/" ? "text-stone-900 font-semibold" : "text-white"
              }`}
            >
              <div className="relative flex items-center">
                <div className="w-auto h-20 flex items-center justify-start">
                  <Image
                    src="/images/Logo-f1.png"
                    alt="SkillKwiz Logo"
                    width={100}
                    height={50}
                    className="w-auto h-20 object-contain"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
            </Link>

            {/* ✅ Map nav links for desktop */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                  pathname === link.href
                    ? "text-[#682171] font-semibold"
                    : "text-white"
                }`}
              >
                <span>{link.label}</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center py-4 bg-[#335f92] rounded-b-3xl absolute top-0 left-0 w-full pt-16 shadow-lg transition-all duration-300 ease-in-out">
            {/* ✅ Map nav links for mobile */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white relative group py-3 text-lg w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{link.label}</span>
                <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
