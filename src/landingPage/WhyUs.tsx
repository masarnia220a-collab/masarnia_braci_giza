"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Beef, HeartHandshake } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export const whyUsCards = [
  {
    title: "Kontrola jakości",
    description:
      "Każdy wyrób dokładnie sprawdzamy, by utrzymać najwyższą jakość.",
    icon: BadgeCheck,
  },
  {
    title: "Pokolenio​we rzemiosło",
    description:
      "Wędzimy drewnem liściastym, nadając wyrobom głęboki, naturalny aromat.",
    icon: HeartHandshake,
  },
  {
    title: "Lokalne mięso",
    description:
      "Małe partie produkcji zapewniają zawsze świeże, aromatyczne wyroby.",
    icon: Beef,
  },
];

export const SocialProveCard = ({
  title,
  description,
  icon: Icon,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex max-w-[250px] w-[250px] p-5 flex-col h-fit gap-2 bg-brand-red rounded-card shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="flex h-10 w-10 rounded-full items-center justify-center bg-background-soft">
        <Icon color="#A51B31" size={26} />
      </div>

      <h3 className="font-inter text-18 text-white">{title}</h3>

      <p className="text-15 font-light text-white/80 font-inter">
        {description}
      </p>
    </motion.div>
  );
};

export const WhyUs = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="grid max-[544px]:mb-[640px] max-[850px]:mb-[355px] max-[850px]:grid-cols-1 max-[850px]:text-center max-[950px]:gap-12 grid-cols-[1fr_1fr] gap-24 items-center mt-12 relative h-[500px]"
    >
      {/* LEFT SIDE: DESKTOP CARD ROW */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="flex flex-row max-[850px]:hidden gap-11 absolute max-[850px]:top-42 bottom-16 max-[950px]:bottom-6"
      >
        {whyUsCards.map((item) => (
          <SocialProveCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </motion.div>

      {/* LEFT COLUMN TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-col gap-4 self-start relative"
      >
        {/* Herb Illustration Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute -top-48"
        >
          <Image
            src={"/wedzenie.png"}
            height={260}
            width={220}
            alt="ręcznie rysowana ikona przedstawiajaca wędzenie mięsa"
          />
        </motion.div>

        <h2 className="text-36 font-bold capitalize heading-md heading-sm">
          Dlaczego ludzie wybierają{" "}
          <span className="font-bold text-brand-red">nasze wyroby</span>
        </h2>

        <p className="paragraph paragraph-md paragraph-sm">
          Naturalne receptury, lokalne składniki, dym z prawdziwego drewna. Smak
          przekazywany z pokolenia na pokolenie to coś co nas wyróżnia
        </p>
      </motion.div>

      {/* RIGHT COLUMN: VIDEO + MOBILE CARDS */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="w-full h-[500px] relative -z-10 flex justify-center"
      >
        {/* Mobile Card Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex-row hidden max-[850px]:flex justify-around flex-wrap gap-3.5 absolute -bottom-[60%] max-[850px]:top-[80%]"
        >
          {whyUsCards.map((item) => (
            <SocialProveCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </motion.div>

        {/* Animated Video */}
        <motion.video
          src="/masarnia_wedzenie.mp4"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] w-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};
