"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChefHat, HeartHandshake, PiggyBank, ScrollText } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export const socialProofItems = [
  {
    title: "Tradycyjne receptury",
    description:
      "Nasze receptury tworzone są z pokolenia na pokolenie, by zachować autentyczny smak tradycji.",
    icon: ChefHat,
  },
  {
    title: "Pokolenio​we rzemiosło",
    description:
      "Nasze wyroby powstają ręcznie od pokoleń, dzięki czemu każdy produkt zachowuje najwyższą jakość.",
    icon: HeartHandshake,
  },
  {
    title: "Lokalne mięso",
    description:
      "Nasze mięso pochodzi od lokalnych dostawców, by zapewnić świeżość, naturalność i pełnię smaku.",
    icon: PiggyBank,
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
      className="flex max-w-[305px] p-5 flex-col gap-2 bg-background-softer rounded-card shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="flex h-10 w-10 rounded-full items-center justify-center bg-brand-red">
        <Icon color="#fff" size={26} />
      </div>

      <h3 className="font-inter text-18 text-black">{title}</h3>

      <p className="text-15 font-light font-inter">{description}</p>
    </motion.div>
  );
};
export const SocialProve = () => {
  return (
    <div className="flex flex-row max-[1050px]:flex-col  max-[1050px]:gap-8 max-[1050px]:items-center justify-around ">
      {socialProofItems.map((item) => (
        <SocialProveCard
          key={item.title}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
};
