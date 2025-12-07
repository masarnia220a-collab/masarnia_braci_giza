import { Mail, Phone, Pin } from "lucide-react";
import React from "react";

export const ContactUs = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-2 text-center max-w-[60%] p-6 max-[650px]:max-w-full self-center">
        <p className="text-brand-red uppercase font-inter tracking-wide font-bold subheading-md subheading-sm">
          Masz pytanie?
        </p>
        <h2 className="text-36 font-bold capitalize heading-md heading-sm ">
          Napisz do nas
        </h2>
        <p className="paragraph paragraph-sm paragraph-md">
          Niezależnie od tego czy chcesz się skontaktować bo ci się nudzi czy
          masz downa i chcesz cośt porobić daj znaća jakoś to ogarniemy tego
          typu
        </p>
      </div>
      <div className="grid max-[750px]:grid-cols-1 grid-cols-[1fr_2fr] bg-background-softer p-5 rounded-2xl  max-[450px]:p-2">
        <div className="flex max-[450px]:p-4 flex-col gap-9 bg-brand-red rounded-2xl p-8 ">
          <div className="flex gap-3 flex-col">
            <h4 className="text-20 font-medium text-white max-[500px]:text-[18px] max-[410px]:text-[16px]">
              Dane Kontaktowe
            </h4>
            <p className="paragraph !text-white/70 paragraph-sm paragraph-md">
              Zadaj pytanie dowiedz się czegoś wiecej a napewno coś wymyślkimy{" "}
            </p>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex gap-5">
              <Phone size={24} fill="#fff" color="#fff" />
              <p className="paragraph !text-white/80 font-light paragraph-sm paragraph-md">
                +48 14 683 39 90
              </p>
            </div>
            <div className="flex gap-5">
              <Mail size={24} color="#fff" />
              <p className="paragraph !text-white/80 font-light paragraph-sm paragraph-md">
                masarnia220a@gmail.com
              </p>
            </div>
            <div className="flex gap-5">
              <Pin size={24} fill="#fff" color="#fff" />
              <p className="paragraph !text-white/80 font-light paragraph-sm paragraph-md">
                 Żarówka 220A, 39-312 Żarówka
              </p>
            </div>
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
