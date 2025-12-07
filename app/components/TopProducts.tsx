"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./Button";
import { motion } from "framer-motion";

export const TopProducts = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="flex flex-col gap-12 relative max-[750px]:mb-62"
    >
      {/* DECORATION — SALT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute -top-32"
      >
        <Image
          src={"/sol.png"}
          height={177}
          width={235}
          alt="Ikona rysowana przedstawiająca ziarna soli"
        />
      </motion.div>

      {/* TEXT + TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-col gap-2 max-w-2xl text-center self-center"
      >
        <span className="uppercase text-16 text-brand-red font-inter subheading-md subheading-sm font-bold tracking-wide">
          najczęściej wybierane
        </span>
        <h2 className="text-36 font-albert-sans font-bold capitalize max-w-[70%] heading-md heading-sm max-[750px]:max-w-[90%] max-[400px]:text-[32px] tracking-wider self-center">
          Poznaj wyroby, które cieszą się
          <span className="font-bold text-brand-red"> największym </span>
          uznaniem
        </h2>
      </motion.div>

      {/* PRODUCT GRID */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid grid-cols-2 gap-12 max-[750px]:grid-cols-1 max-[1150px]:gap-6 h-[450px]"
      >
        {/* PRODUCT 1 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          whileHover={{ scale: 1.03 }}
          className="relative max-[750px]:min-h-[200px] w-full"
        >
          <span className="absolute max-[500px]:text-[16px] rounded-tl-2xl text-white bg-[linear-gradient(90deg,_#A51B31_39%,_#3F0A1300_100%)] p-2.5 top-0 left-0 text-20 font-inter font-semibold z-50">
            Szynka bartosza
          </span>
          <Image
            src={"/szynkaBartosza.png"}
            fill
            className="rounded-2xl object-cover"
            alt="Szynka bartosza"
          />
        </motion.div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-12 max-[1150px]:gap-6 justify-between">
          {/* PRODUCT 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.03 }}
            className="relative h-full w-full max-[750px]:min-h-[200px]"
          >
            <span className="absolute max-[500px]:text-[16px] rounded-tl-2xl text-white bg-[linear-gradient(90deg,_#A51B31_39%,_#3F0A1300_100%)] p-2.5 top-0 left-0 text-20 font-inter font-semibold z-50">
              Kiełbasa wiejska
            </span>
            <Image
              src={"/kielbasa_wiejska.png"}
              fill
              className="rounded-2xl object-cover"
              alt="Kiełbasa wiejska"
            />
          </motion.div>

          {/* PRODUCT 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.03 }}
            className="relative max-[750px]:min-h-[200px] h-full w-full"
          >
            <span className="absolute max-[500px]:text-[16px] rounded-tl-2xl text-white bg-[linear-gradient(90deg,_#A51B31_39%,_#3F0A1300_100%)] p-2.5 top-0 left-0 text-20 font-inter font-semibold z-50">
              Boczek wędzony
            </span>
            <Image
              src={"/boczek_wedzony.png"}
              fill
              className="rounded-2xl object-cover"
              alt="Boczek wędzony"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="self-center"
      >
        <Button
          style="full"
          classNames="w-fit"
          label="Zobacz wszystkie"
          href="/produkty"
        />
      </motion.div>

      {/* BOTTOM GARLIC DECORATION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute right-0 -bottom-52 max-[750px]:-bottom-82 max-[450px]:hidden"
      >
        <Image
          src={"/czosnek.png"}
          height={180}
          width={161}
          alt="Rysowany czosnek"
        />
      </motion.div>
    </motion.div>
  );
};
