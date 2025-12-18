"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Definicja typu produktu
type Product = {
  id: number;
  name: string;
  src: string;
};

// Dane produktów
const products: Product[] = [
  {
    id: 1,
    name: "Boczek Wędzony Tradycyjny",
    src: "/galeria/boczek_wedzony_tradycyjny.jpg",
  },
  {
    id: 2,
    name: "Schab w Autorskiej Posypce",
    src: "/galeria/schab_w_autorskiej_posypce.jpg",
  },
  {
    id: 3,
    name: "Szynka Wiejska Sznurowana",
    src: "/galeria/szynka_wiejska_sznurowana.jpg",
  },
  {
    id: 4,
    name: "Trio Pasztetów Pieczonych",
    src: "/galeria/trio_pasztetów_pieczonych.jpg",
  },
  {
    id: 5,
    name: "Kabanosy Wieprzowe",
    src: "/galeria/kabanosy_wieprzowe.jpg",
  },
  {
    id: 6,
    name: "Schab Pieczony (Polędwica)",
    src: "/galeria/schab_pieczony.jpg",
  },
  {
    id: 7,
    name: "Szynka Dębowa Ciemna",
    src: "/galeria/Masarnia-42.jpg",
  },
];

// --- KONFIGURACJA ANIMACJI (VARIANTS) ---

// Kontener gridu - zarządza dziećmi (staggering)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Opóźnienie między pojawianiem się kolejnych zdjęć
    },
  },
};

// Pojedynczy element gridu - wjeżdża od dołu
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Tło modala
const modalOverlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

// Zawartość modala (zdjęcie) - zoom in
const modalContentVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", damping: 25, stiffness: 300 },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setSelectedImage(product);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Nagłówek */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 flex flex-col"
          >
            <h2 className="text-36 font-bold capitalize heading-md heading-sm">
              <span className="font-bold text-brand-red">Tradycja</span> która
              ma głęboki sens
            </h2>
            <p className="paragraph paragraph-md paragraph-sm mt-2 max-w-1/2 self-center">
              Wszystko zaczęło się od marzenia o prawdziwym smaku. To tutaj
              doświadczenie rzeźnickie spotyka się z pasją do natury.
            </p>
          </motion.div>

          {/* Grid Zdjęć */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }} // Animacja odpali się, gdy element wejdzie w widok
          >
            {/* Kolumna 1 */}
            <div className="flex flex-col gap-4">
              <motion.div
                variants={itemVariants}
                onClick={() => openModal(products[0])}
                className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={products[0].src}
                  alt={products[0].name}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                onClick={() => openModal(products[1])}
                className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={products[1].src}
                  alt={products[1].name}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
              </motion.div>
            </div>

            {/* Kolumna 2 */}
            <div className="flex flex-col gap-4">
              <motion.div
                variants={itemVariants}
                onClick={() => openModal(products[2])}
                className="relative h-[34rem] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={products[2].src}
                  alt={products[2].name}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/30 to-transparent pointer-events-none"></div>
              </motion.div>
            </div>

            {/* Kolumna 3 */}
            <div className="flex flex-col gap-4">
              <motion.div
                variants={itemVariants}
                onClick={() => openModal(products[3])}
                className="relative h-[34rem] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={products[3].src}
                  alt={products[3].name}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/30 to-transparent pointer-events-none"></div>
              </motion.div>
            </div>

            {/* Kolumna 4 */}
            <div className="flex flex-col gap-4">
              <motion.div
                variants={itemVariants}
                onClick={() => openModal(products[4])}
                className="relative h-60 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={products[4].src}
                  alt={products[4].name}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                onClick={() => openModal(products[5])}
                className="relative h-36 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={products[5].src}
                  alt={products[5].name}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                onClick={() => openModal(products[6])}
                className="relative h-36 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={products[6].src}
                  alt={products[6].name}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX MODAL Z ANIMATE PRESENCE */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            variants={modalOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[9999]  flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            {/* Przycisk zamknięcia */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              onClick={closeModal}
              className="absolute top-5 right-5 text-white/70 cursor-pointer hover:text-white z-50 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            {/* Kontener zdjęcia */}
            <motion.div
              variants={modalContentVariants}
              // Dziedziczy initial/animate/exit z rodzica, ale używa swoich wariantów
              className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.name}
                fill
                className="object-contain"
                quality={100}
                priority
              />

              {/* Podpis */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                className="absolute bottom-4 left-0 right-0 text-center pointer-events-none"
              >
                <span className="inline-block bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-md text-sm md:text-base border border-white/10">
                  {selectedImage.name}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
