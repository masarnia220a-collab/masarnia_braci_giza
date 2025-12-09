"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const AboutUs = () => {
  return (
    <motion.div
      id="onas"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="grid grid-cols-[1fr_3.5fr] max-[960px]:flex max-[960px]:flex-col-reverse max-[960px]:text-center max-[960px]:items-center max-[960px]:gap-24"
    >
      {/* LEFT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Image
          src={"/aboutImage.png"}
          height={580}
          width={455}
          className="max-w-none max-[960px]:relative max-[960px]:left-6 max-[480px]:w-full"
          alt="Zdjęcie przedstawiające masarnie oraz duży napis 30 lat istnienia"
        />
      </motion.div>

      {/* TEXT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-col gap-4 justify-self-center max-w-[80%] max-[650px]:max-w-full max-[650px]:px-6 max-[400px]:p-0 relative"
      >
        {/* Floating herb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: -10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-none absolute -right-20 -top-32"
        >
          <Image
            src={"/galazkaZiol.png"}
            height={137}
            width={250}
            alt="Zdjęcie przedstawiające gałązke ziół"
          />
        </motion.div>

        <p className="text-brand-red uppercase font-inter tracking-wide font-bold subheading-md subheading-sm">
          poznaj nas
        </p>

        <h2 className="text-36 font-albert-sans font-bold capitalize max-w-[70%] heading-md heading-sm max-[1050px]:max-w-[100%] tracking-wider">
          Z pasji do <span className="font-bold text-brand-red">tradycji</span>{" "}
          i prawdziwego <span className="font-bold text-brand-red">smaku</span>
        </h2>

        <p className="font-inter text-15 text-black/60 leading-[160%] paragraph-sm paragraph-md">
          Od ponad trzech dekad tworzymy wyroby, które łączą pokolenia przy
          wspólnym stole. Nasza masarnia to rodzinna historia pełna pasji,
          szacunku do rzemiosła i troski o jakość.
          <br /> <br />
          Początki sięgają roku 1990, kiedy z prostego pomysłu narodziła się
          mała, lokalna masarnia. Od tamtej pory nieprzerwanie kultywujemy
          tradycję wyrabiania wędlin według dawnych receptur — bez pośpiechu, z
          wykorzystaniem naturalnych składników i dymu z prawdziwego drewna.
          <br /> <br />
          Każdy produkt, który trafia do naszych klientów, jest efektem pracy
          rąk, doświadczenia i pasji przekazywanej z ojca na syna. Wierzymy, że
          wędliny to nie tylko jedzenie — to smak wspomnień, rodzinnych spotkań
          i świąt spędzanych razem. <br /> <br /> Współpracujemy z lokalnymi
          dostawcami mięsa, wybierając wyłącznie surowce najwyższej jakości.
          Dzięki temu nasze wyroby mają wyjątkowy aromat, głęboki kolor i smak,
          którego nie da się podrobić.
        </p>
      </motion.div>
    </motion.div>
  );
};
