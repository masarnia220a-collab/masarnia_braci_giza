import { Mail, Phone, Pin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ContactUs = () => {
  return (
    <div id="kontakt" className="flex flex-col gap-16 relative">
      <Image
        src={"/szynka.png"}
        height={173}
        width={237}
        alt="Zdjęcie przedstawiające szynke"
        className="absolute -top-12 right-0"
      />
      <div className="flex flex-col gap-2 text-center max-w-[60%] p-6 max-[650px]:max-w-full self-center">
        <p className="text-brand-red uppercase font-inter tracking-wide font-bold subheading-md subheading-sm">
          Masz pytanie?
        </p>
        <h2 className="text-36 font-bold capitalize heading-md heading-sm ">
          Napisz do nas
        </h2>
        <p className="paragraph paragraph-sm paragraph-md">
          Chcesz zapytać o skład naszych wyrobów, zamówić większą ilość na
          wesele, czy po prostu dowiedzieć się, co dziś wędzimy? Napisz do nas
          lub zadzwoń – chętnie doradzimy i podzielimy się naszą pasją do
          tradycyjnych smaków.
        </p>
      </div>
      <div className="grid max-[750px]:grid-cols-1 grid-cols-[1fr_2fr] bg-background-softer p-5 rounded-2xl  max-[450px]:p-2">
        <div className="flex max-[450px]:p-4 flex-col gap-9 bg-brand-red rounded-2xl p-8 ">
          <div className="flex gap-3 flex-col">
            <h4 className="text-20 font-medium text-white max-[500px]:text-[18px] max-[410px]:text-[16px]">
              Dane Kontaktowe
            </h4>
            <p className="paragraph !text-white/70 paragraph-sm paragraph-md">
              Cenimy sobie bezpośredni kontakt. Zadzwoń, napisz lub odwiedź nas
              osobiście w Żarówce. Czekamy na Ciebie!
            </p>
          </div>
          <div className="flex flex-col gap-12">
            {/* PHONE */}
            <a
              href="tel:+48146833990"
              className="flex items-center gap-5 group"
            >
              <Phone size={24} className="text-white" />
              <p className="paragraph paragraph-sm paragraph-md !text-white font-light group-hover:text-white transition">
                +48 14 683 39 90
              </p>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:masarnia220@wp.pl"
              className="flex items-center gap-5 group"
            >
              <Mail size={24} className="text-white" />
              <p className="paragraph paragraph-sm paragraph-md !text-white font-light group-hover:text-white transition">
                masarnia220@wp.pl
              </p>
            </a>

            {/* ADDRESS */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Żarówka+220A,+39-312+Żarówka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 group"
            >
              <Pin size={24} className="text-white" />
              <p className="paragraph paragraph-sm paragraph-md !text-white font-light group-hover:text-white transition">
                Żarówka 220A, 39-312 Żarówka
              </p>
            </a>
          </div>
        </div>
        <form className="flex flex-col gap-8 p-8 max-[400px]:px-2 ">
          {/* Row 1 — Name + Email */}
          <div className="grid grid-cols-2 max-[500px]:grid-cols-1 gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-black font-medium text-15">Imię</label>
              <input
                type="text"
                className="bg-transparent border-b border-brand-red focus:outline-none text-black text-15 py-1"
                placeholder="Twoje imię"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-black font-medium text-15">Email</label>
              <input
                type="email"
                className="bg-transparent border-b border-brand-red focus:outline-none text-black text-15 py-1"
                placeholder="Twój email"
              />
            </div>
          </div>
          {/* Subject */}
          <div className="flex flex-col gap-1">
            <label className="text-black font-medium text-15">Temat</label>
            <input
              type="text"
              className="bg-transparent border-b border-brand-red focus:outline-none text-black text-15 py-1"
              placeholder="Temat wiadomości"
            />
          </div>
          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-black font-medium text-15">Wiadomość</label>
            <textarea
              rows={4}
              className="bg-transparent border-b border-brand-red focus:outline-none text-black text-15 py-2 resize-none"
              placeholder="Twoja wiadomość..."
            />
          </div>

          <label
            htmlFor="privacy"
            className="flex items-center gap-3 text-[15px] text-black select-none"
          >
            {/* CHECKBOX */}
            <span className="relative flex h-4 w-4 items-center justify-center">
              <input
                id="privacy"
                type="checkbox"
                required
                name="privacy"
                className="
        peer absolute h-4 w-4 appearance-none rounded
        border border-brand-red cursor-pointer
        transition-all duration-200
        hover:ring-2 hover:ring-brand-red/30
        focus-visible:ring-2 focus-visible:ring-brand-red/40
        checked:bg-brand-red checked:border-brand-red
      "
              />

              {/* CHECKMARK */}
              <svg
                className="
        pointer-events-none absolute h-3 w-3 text-white
        opacity-0 peer-checked:opacity-100
        transition-opacity duration-150
      "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </span>

            {/* TEXT + LINK */}
            <span>
              Akceptuję{" "}
              <Link
                href="/polityka-prywatnosci"
                className="text-brand-red font-medium underline underline-offset-2 hover:opacity-80"
              >
                politykę prywatności
              </Link>
              .
            </span>
          </label>
          {/* Divider */}
          {/* Submit Button */}
          <button className="pt-1.5 pb-1.5 pl-5 pr-5 rounded-xl text-white bg-brand-red w-fit text-16 ">
            Wyślij wiadomość
          </button>
        </form>
      </div>
    </div>
  );
};
