"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Start", href: "#start" },
  { name: "Produkty", href: "/produkty" },
  { name: "O nas", href: "#onas" },
  { name: "Kontakt", href: "#kontakt" },
];

export const NavBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="flex flex-row justify-between md:justify-start gap-4 md:gap-20 p-4 px-6 md:px-20 items-center container mx-auto relative z-50">
        {/* 1. Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="z-50" // Ensure logo is above mobile menu background
        >
          <Image
            src={"/masarniaLogo.png"}
            height={55}
            width={50}
            alt="Logo masarni braci giża"
          />
        </motion.div>

        {/* 2. Desktop Menu (Hidden on Mobile) */}
        <ul className="hidden md:flex flex-row gap-12 font-inter font-semibold uppercase text-15">
          {navLinks.map((link, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.li
                key={link.name}
                className="relative w-[100px] flex flex-col justify-end cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                // Animacja wejścia
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className={`z-10 w-full flex ${
                    isHovered ? "justify-center" : "justify-start"
                  }`}
                >
                  <motion.span
                    layout
                    className="block"
                    animate={{
                      color: isHovered ? "#A51B31" : "#000000",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    {link.name}
                  </motion.span>
                </Link>

                {/* Stała linia (Desktop) */}
                <span className="absolute bottom-[-2px] left-0 right-0 h-[1.8px] bg-brand-red" />
              </motion.li>
            );
          })}
        </ul>

        {/* 3. Mobile Hamburger Button (Visible only on Mobile) */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
          >
            {/* Top Line */}
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
              }
              className="w-8 h-0.5 bg-black block"
            />
            {/* Middle Line */}
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-8 h-0.5 bg-black block"
            />
            {/* Bottom Line */}
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
              }
              className="w-8 h-0.5 bg-black block"
            />
          </button>
        </div>
      </nav>

      {/* 4. Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden"
          >
            <ul className="flex flex-col gap-8 font-inter font-bold uppercase text-2xl text-center">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                    className="text-black hover:text-brand-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
