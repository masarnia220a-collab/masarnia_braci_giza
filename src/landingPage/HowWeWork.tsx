"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ================== MOTION VARIANTS ================== */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ================== COMPONENT ================== */

export const HowWeWork = () => {
  return (
    <section className="w-full bg-background-soft">
      {/* ===== OUR MISSION ===== */}
      <div className="bg-brand-red relative text-white py-20 px-6 rounded-tl-2xl rounded-tr-2xl">
        {/* TOP CURVE + TITLE */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <div className="relative">
            <svg
              width="312"
              height="50"
              viewBox="0 0 312 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0C0 0 316.794 0.0124512 311.372 0.0124512C305.951 0.0124512 298.722 49.0125 283.361 49.0125C268 49.0125 44.5603 49.5125 29.0009 49.0125C13.4414 48.5125 5.5 0.000216272 0 0Z"
                fill="#FFF5E1"
              />
            </svg>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-36 text-brand-red w-full font-bold capitalize absolute z-50 top-[-8px] left-1/2 text-center -translate-x-1/2"
            >
              Jak pracujemy
            </motion.h2>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mt-6"
          >
            {[
              {
                number: "01",
                text: "Selekcja i Rozbiór. Każdy dzień zaczynamy od surowej oceny mięsa. Przeprowadzamy ręczny rozbiór półtusz, oddzielając to, co najlepsze. Nie używamy MOM – liczy się czysty surowiec.",
              },
              {
                number: "02",
                text: "Marynowanie i Przyprawianie. Mięso leżakuje w autorskich solankach i jest nacierane naturalnymi ziołami. Dajemy mu czas – bez przyspieszaczy i nastrzykiwania.",
              },
              {
                number: "03",
                text: "Wędzenie i Parzenie. Tradycyjne komory, naturalny dym z drewna liściastego i pełna kontrola temperatury – dla koloru, aromatu i kruchości.",
              },
            ].map((item) => (
              <motion.div
                key={item.number}
                variants={fadeUp}
                className="flex flex-col items-center"
              >
                <p className="text-4xl font-semibold mb-4">{item.number}</p>
                <p className="text-15 font-light text-white/80 font-inter max-w-[300px]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ===== IMAGE CTA GRID ===== */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 rounded-br-2xl overflow-hidden">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative h-[420px]"
        >
          <Image
            src="/produkcja_1.png"
            alt="Ręczna produkcja"
            fill
            className="object-cover object-top"
          />
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute inset-0 bg-black/30 flex items-center justify-center text-white"
          >
            <h3 className="text-2xl font-semibold tracking-wide">
              RĘCZNA PRODUKCJA
            </h3>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative h-[420px] rounded-br-2xl"
        >
          <Image
            src="/produkcja_2.png"
            alt="Tradycyjne wyroby"
            fill
            className="object-cover object-top rounded-br-2xl"
          />
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute inset-0 bg-black/30 flex items-center justify-center text-white"
          >
            <h3 className="text-2xl font-semibold tracking-wide">
              TRADYCYJNE WYROBY
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
