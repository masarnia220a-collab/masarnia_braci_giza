"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ReviewCard = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews || []));
    console.log(reviews);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="flex flex-col gap-7 p-5 rounded-2xl bg-background-softer shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
    >
      <div className="flex flex-row gap-1">
        <Image
          src={"/opinia.png"}
          height={75}
          width={75}
          alt="Zdjęcie osoby która wystawiła opinie"
        />
        <div className="flex flex-col gap-3 self-center">
          <p className="font-inter text-18 font-medium capitalize">
            Marcin Baran
          </p>
          <span className="flex flex-row gap-1.5">
            <Star size={15} fill="#ecc861" color="#ecc861" />
            <Star size={15} fill="#ecc861" color="#ecc861" />
            <Star size={15} fill="#ecc861" color="#ecc861" />
            <Star size={15} fill="#ecc861" color="#ecc861" />
            <Star size={15} fill="#ecc861" color="#ecc861" />
          </span>
        </div>
      </div>

      <p className="paragraph">
        Znam kiełbasę z Żarówki od wielu lat i nic się nie zmieniła. Jest pyszna
        jak i również inne wyroby z tej masarni. Polecam z czystym sumieniem.
      </p>
    </motion.div>
  );
};

export const Reviews = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="flex flex-col gap-12 relative"
    >
      <Image
        src={"/pento_kielbasy.png"}
        width={266}
        height={183}
        alt="decoratuve"
        className="absolute -top-40"
      />
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-36 font-bold capitalize text-center heading-sm heading-md"
      >
        Opinie od naszych zadowolonych <br />
        <span className="font-bold text-brand-red">klientów</span>
      </motion.h2>

      {/* Animated Cards Grid */}
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
        className="grid grid-cols-2 gap-12 max-[620px]:grid-cols-1"
      >
        <ReviewCard />
        <ReviewCard />
      </motion.div>
    </motion.div>
  );
};
