"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Leaf } from "lucide-react";
import Image from "next/image";

// --- DANE Z JSON ---
const productsData = [
  { id: 1, nazwa: "Baleron z pieca", cena: 33.5 },
  { id: 2, nazwa: "Bekon", cena: 30.3 },
  { id: 3, nazwa: "Boczek extra", cena: 34.6 },
  { id: 4, nazwa: "Boczek wędzony", cena: 28.9 },
  { id: 5, nazwa: "Kaszanka", cena: 13.6 },
  { id: 6, nazwa: "Kiełbasa biała", cena: 23.3 },
  { id: 7, nazwa: "Kiełbasa śląska grillowa", cena: 20.9 },
  { id: 8, nazwa: "Kiełbasa kminkowa", cena: 28.3 },
  { id: 9, nazwa: "Kiełbasa krakowska", cena: 30.3 },
  { id: 10, nazwa: "Kiełbasa wiejska", cena: 36.3 },
  { id: 11, nazwa: "Kiełbasa zwyczajna", cena: 22.8 },
  { id: 12, nazwa: "Kiełbasa żywiecka", cena: 28.9 },
  { id: 13, nazwa: "Kabanosy", cena: 40.1 },
  { id: 14, nazwa: "Klops swojski", cena: 29.1 },
  { id: 15, nazwa: "Krakowska drobiowa", cena: 32.0 },
  { id: 16, nazwa: "Krupniok", cena: 15.7 },
  { id: 17, nazwa: "Mielonka tyrolska", cena: 21.2 },
  { id: 18, nazwa: "Mielonka wieprzowa", cena: 17.8 },
  { id: 19, nazwa: "Mortadela", cena: 17.8 },
  { id: 20, nazwa: "Parówka", cena: 18.8 },
  { id: 21, nazwa: "Pasztet pieczony", cena: 22.8 },
  { id: 22, nazwa: "Pasztet miejski w folii", cena: 21.6 },
  { id: 23, nazwa: "Paluszki grillowe", cena: 25.1 },
  { id: 24, nazwa: "Pieczeń drobiowa", cena: 26.5 },
  { id: 25, nazwa: "Pieczeń Zbycha", cena: 26.4 },
  { id: 26, nazwa: "Paluszki białe", cena: 25.4 },
  { id: 27, nazwa: "Polędwica laurowa", cena: 31.1 },
  { id: 28, nazwa: "Polędwica Jagusi", cena: 30.0 },
  { id: 29, nazwa: "Polędwica królewska", cena: 32.8 },
  { id: 30, nazwa: "Polędwica sopocka", cena: 32.5 },
  { id: 31, nazwa: "Polędwica z pieca", cena: 37.4 },
  { id: 32, nazwa: "Przysmak kanapkowy", cena: 20.5 },
  { id: 33, nazwa: "Rolada boczkowa", cena: 30.3 },
  { id: 34, nazwa: "Rolada schabowa", cena: 34.7 },
  { id: 35, nazwa: "Rogal wieprzowy", cena: 25.6 },
  { id: 36, nazwa: "Salceson cwaniak", cena: 20.7 },
  { id: 37, nazwa: "Salceson wiejski", cena: 21.7 },
  { id: 38, nazwa: "Smalec", cena: 11.1 },
  { id: 39, nazwa: "Specjał Jędrusia", cena: 43.0 },
  { id: 40, nazwa: "Szynka Bartosza", cena: 35.2 },
  { id: 41, nazwa: "Szynka z liściem laurowym", cena: 35.2 },
  { id: 42, nazwa: "Szynka konserwowa", cena: 27.8 },
  { id: 43, nazwa: "Szynka śniadaniowa", cena: 25.8 },
  { id: 44, nazwa: "Szynka z pieca", cena: 38.3 },
  { id: 45, nazwa: "Szynka firmowa", cena: 35.2 },
  { id: 46, nazwa: "Wiejska drobiowa", cena: 37.0 },
  { id: 47, nazwa: "Wędzonka tradycyjna", cena: 27.6 },
  { id: 48, nazwa: "Wyrób podrobowy", cena: 9.7 },
  { id: 49, nazwa: "Filet drobiowy wędzony", cena: 33.6 },
  { id: 50, nazwa: "Biodrówka", cena: 21.0 },
  { id: 51, nazwa: "Błona", cena: 7.4 },
  { id: 52, nazwa: "Boczek surowy", cena: 23.0 },
  { id: 53, nazwa: "Golonka", cena: 15.5 },
  { id: 54, nazwa: "Karkówka b/k", cena: 23.5 },
  { id: 55, nazwa: "Kości", cena: 3.5 },
  { id: 56, nazwa: "Łby wieprzowe", cena: 8.4 },
  { id: 57, nazwa: "Łopatka b/k", cena: 20.0 },
  { id: 58, nazwa: "Mięso kiełbasiane", cena: 23.0 },
  { id: 59, nazwa: "Mięso szynkowe", cena: 25.0 },
  { id: 60, nazwa: "Nerki", cena: 7.6 },
  { id: 61, nazwa: "Nogi", cena: 6.4 },
  { id: 62, nazwa: "Podgardle surowe", cena: 13.0 },
  { id: 63, nazwa: "Polędwiczki wieprzowe", cena: 29.0 },
  { id: 64, nazwa: "Płuca", cena: 7.6 },
  { id: 65, nazwa: "Schab b/k", cena: 23.0 },
  { id: 66, nazwa: "Schab z/k", cena: 20.5 },
  { id: 67, nazwa: "Serca / ozory", cena: 16.5 },
  { id: 68, nazwa: "Skóry", cena: 6.5 },
  { id: 69, nazwa: "Słonina", cena: 8.5 },
  { id: 70, nazwa: "Wątroba wieprzowa", cena: 8.0 },
  { id: 71, nazwa: "Żeberka", cena: 17.6 },
  { id: 72, nazwa: "Mielone bez przypraw", cena: 21.5 },
  { id: 73, nazwa: "KOŚCI WĘDZONE", cena: 6.3, kategoria: "NOWOŚCI" },
  { id: 74, nazwa: "KABANOSY", cena: 40.1, kategoria: "NOWOŚCI" },
  { id: 75, nazwa: "PASZTET KREMOWY", cena: 19.4, kategoria: "NOWOŚCI" },
  { id: 76, nazwa: "BOCZEK PIECZONY", cena: 34.6, kategoria: "NOWOŚCI" },
  { id: 77, nazwa: "ORZECH PIECZONY", cena: 31.5, kategoria: "NOWOŚCI" },
  { id: 78, nazwa: "KOŚCI REKSY", cena: 1.8, kategoria: "NOWOŚCI" },
  { id: 80, nazwa: "ŁOPATKA W GALARECIE", cena: 22.1 },
  { id: 79, nazwa: "PASZTECIK DROBIOWY", cena: 27.0 },
  { id: 99, nazwa: "VAC", cena: 1.0, jednostka: "szt" },
];

// --- Definicje Kategorii ---
const CATEGORIES = [
  "Wszystkie",
  "Wędliny Tradycyjne",
  "Mięso Surowe",
  "Nowości",
];

// --- Animacje Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CennikPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Wszystkie");

  // Logika filtrowania
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      // 1. Filtr wyszukiwania tekstowego
      const matchesSearch = product.nazwa
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      // 2. Filtr kategorii
      let matchesCategory = true;
      if (activeCategory === "Nowości") {
        matchesCategory = product.kategoria === "NOWOŚCI";
      } else if (activeCategory === "Wędliny Tradycyjne") {
        matchesCategory = product.id < 50;
      } else if (activeCategory === "Mięso Surowe") {
        matchesCategory = product.id >= 50 && product.kategoria !== "NOWOŚCI";
      }

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen bg-background-soft overflow-hidden relative">
      <Image
        src={"/cebula.png"}
        height={155}
        width={193}
        alt="cebula"
        className="absolute left-16 top-52"
      />

      <Image
        src={"/tasak.png"}
        height={170}
        width={215}
        alt="tasak"
        className="absolute right-16 top-12"
      />
      <div className="container px-4 py-16 relative z-10">
        {/* --- Nagłówek --- */}
        <div className="text-center mb-10 max-w-2xl mx-auto flex flex-col gap-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-36 font-bold capitalize text-center heading-sm heading-md"
          >
            Tradycyjny{" "}
            <span className="font-16 text-brand-red tracking-[0.8px] font-bold font-inter">
              Cennik
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-black/60 text-15 font-inter paragraph-md paragraph-sm"
          >
            Odkryj smak prawdziwej tradycji. Wszystkie nasze wyroby powstają z
            pasji i lokalnych składników.
          </motion.p>

          {/* --- Wyszukiwarka --- */}
          <div className="relative">
            <input
              type="text"
              placeholder="Szukaj produktu (np. Kiełbasa, Boczek)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-4 pl-12 pr-4 paragraph-md paragraph-sm rounded-card border border-(--color-border-light) 
                         bg-background-softer backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand-red
                         text-(--color-text-secondary) shadow-sm transition-all placeholder:text-gray-500"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-red w-5 h-5" />
          </div>
        </div>

        {/* --- Filtry Kategorii (Pills) --- */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className={`relative px-6 py-2 rounded-full text-15 font-inter font-medium transition-all duration-300 ease-out border cursor-pointer
        ${
          activeCategory === category
            ? "text-white border-brand-red"
            : "text-brand-red border-brand-red"
        }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-brand-red rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </div>

        {/* --- Lista Produktów --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  }}
                  className="bg-background-softer rounded-card p-6 relative border border-transparent cursor-pointer hover:border-brand-red transition-colors duration-300 shadow-(--shadow-card) flex flex-col justify-between"
                >
                  {/* Badge dla Nowości */}
                  {product.kategoria === "NOWOŚCI" && (
                    <div className="absolute -top-2 right-4 bg-gold text-(--color-text-primary) text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm z-20">
                      <Leaf className="w-3 h-3" /> NOWOŚĆ
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-(--color-text-secondary) leading-tight pr-16">
                      {product.nazwa}
                    </h3>
                    {/* Dynamiczny podpis kategorii na podstawie ID/Pola */}
                    <span className="text-xs text-gray-500 uppercase tracking-wider mt-2 block">
                      {product.kategoria === "NOWOŚCI"
                        ? "Specjał"
                        : product.id < 50
                        ? "Wędliny Tradycyjne"
                        : "Mięso Surowe / Inne"}
                    </span>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-20"
              >
                <p className="text-(--color-text-secondary) text-lg">
                  Nie znaleziono produktów w kategorii &quot;{activeCategory}
                  &quot; dla wyszukiwania &quot;{searchTerm}&quot;.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* --- Stopka listy --- */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>
            Ceny mogą ulec zmianie. Ostateczna cena jest weryfikowana przy
            kasie.
          </p>
        </div>
      </div>
    </div>
  );
}
