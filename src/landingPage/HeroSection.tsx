"use client";
import React from "react";
import { Button } from "../components/Button";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="grid grid-cols-[1fr_1fr] max-[840px]:grid-cols-1 max-[840px]:mb-[460px] mt-[160px] max-[840px]:justify-self-center"
    >
      {/* LEFT TEXT COLUMN */}
      <div className="flex gap-6 flex-col w-[584px] max-[600px]:w-full max-[600px]:max-w-[584px] relative max-[840px]:justify-self-center">
        {/* Ingredient floating icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="absolute -top-32 -left-20 max-[840px]:left-0"
        >
          <Image src={"/cebula.png"} height={155} width={193} alt="cebula" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute -top-14 right-36 max-[840px]:-right-12"
        >
          <Image src={"/tasak.png"} height={170} width={215} alt="tasak" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute -bottom-36 right-36 z-50 max-[840px]:-right-20"
        >
          <Image src={"/laurowe.png"} height={170} width={215} alt="laurowe" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="absolute -bottom-24 -z-10 -left-24 max-[840px]:z-50"
        >
          <Image src={"/pieprz.png"} height={170} width={215} alt="pieprz" />
        </motion.div>

        {/* TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col gap-4 max-[840px]:text-center"
        >
          <span className="font-16 text-brand-red uppercase tracking-[0.8px] font-bold font-inter">
            masarnia braci giża
          </span>
          <h1 className="font-albert-sans font-medium text-52 leading-14 heading-md heading-sm">
            Z serca tradycji - <br />
            prawdziwy <span className="font-bold text-brand-red">smak</span>,
            który <br /> przetrwał pokolenia
          </h1>
          <p className="text-black/60 text-15 font-inter paragraph-md paragraph-sm">
            Naturalne receptury, lokalne składniki, dym z prawdziwego drewna.
            <br />
            Smak przekazywany z pokolenia na pokolenie to coś co nas wyróżnia
          </p>
        </motion.div>

        {/* BUTTON BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex flex-row gap-8 max-[840px]:justify-center max-[350]:flex-col max-[350]:w-fit max-[350]:text-center"
        >
          <motion.div className="z-100" whileHover={{ scale: 1.05 }}>
            <Button label="Zobacz oferte" style="full" href="/produkty" />
          </motion.div>

          <motion.div className="z-100" whileHover={{ scale: 1.05 }}>
            <Button
              label="Gdzie nas znajdziesz"
              style="outline"
              href="/produkty"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* RIGHT IMAGE AREA */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex relative"
      >
        <Image
          src={"/heroImage.png"}
          width={906}
          height={538}
          className="absolute -left-38 -z-10 -top-32 max-w-none max-[840px]:-left-12 max-[400px]:-left-42 max-[500px]:-left-24 max-[840px]:top-12"
          alt="Zdjęcie przedstawiające ładnie zaprezentowaną kiełbase otoczoną świerzymi ziołami przyprawami i warzywami"
        />

        {/* BADGE CIRCLE */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="flex h-[130px] absolute bottom-0.5 right-0 items-center justify-center w-[130px] max-[840px]:top-22 max-[840px]:right-10 bg-[radial-gradient(circle,_#FFF5E1_50%,_#85786500_100%)] rounded-full border-1 border-brand-red"
        >
          <div className="h-[120px] flex flex-col w-[120px] rounded-full border-1 text-center items-center justify-center border-brand-red">
            <p className="text-brand-red text-[24px] font-inter -mb-3.5">Od</p>
            <span className="text-brand-red text-[42px] font-semibold font-inter -mb-3.5">
              1990
            </span>
            <p className="text-brand-red text-[24px] font-inter">roku</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
