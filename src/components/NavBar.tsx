"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Start", href: "/" },
  { name: "Produkty", href: "/produkty" },
  { name: "O nas", href: "/#onas" },
  { name: "Kontakt", href: "/#kontakt" },
];

export const NavBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);
  return (
    <>
      <nav className="flex flex-row justify-between min-[850px]:justify-start gap-4 md:gap-20 p-4 px-6 md:px-20 items-center container mx-auto relative ">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="z-50"
        >
          <Image src={"/masarniaLogo.svg"} height={75} width={75} alt="Logo" />
        </motion.div>

        {/* DESKTOP MENU */}
        <ul className="hidden min-[850px]:flex flex-row gap-12 font-inter font-semibold uppercase text-15">
          {navLinks.map((link, index) => {
            const isAnchor = link.href.startsWith("/#");
            const isActive = !isAnchor && pathname === link.href;
            const isHovered = hoveredIndex === index;

            // TRUE when active OR hovered
            const shouldCenter = isActive || isHovered;

            return (
              <motion.li
                key={link.name}
                className="relative w-[100px] flex flex-col justify-end cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={link.href}
                  className={`z-10 w-full flex ${
                    shouldCenter ? "justify-center" : "justify-start"
                  }`}
                >
                  <motion.span
                    layout
                    animate={{
                      color: shouldCenter ? "#A51B31" : "#000000",
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

                {/* underline stays centered */}
                <span className="absolute bottom-[-2px] left-0 right-0 h-[1.8px] bg-brand-red" />
              </motion.li>
            );
          })}
        </ul>

        {/* MOBILE BURGER */}
        <div className="min-[850px]:hidden z-[999]">
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer "
          >
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
              }
              className="w-8 h-0.5 bg-black block"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-8 h-0.5 bg-black block"
            />
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
              }
              className="w-8 h-0.5 bg-black block"
            />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-background-soft z-40 flex flex-col items-center justify-center min-[850px]:hidden z-[200]"
          >
            <ul className="flex flex-col gap-8 font-inter font-bold uppercase text-2xl text-center">
              {navLinks.map((link, index) => {
                const isAnchor = link.href.startsWith("/#");
                const isActive = !isAnchor && pathname === link.href;

                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`transition-colors ${
                        isActive ? "text-brand-red" : "text-black"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
