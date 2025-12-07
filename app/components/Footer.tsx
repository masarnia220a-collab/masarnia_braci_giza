import Image from "next/image";
import { Facebook, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background-soft py-1 px-6 pt-7 border-t border-border-light flex mt-[126px] flex-col gap-12">
      <div className="container flex items-center justify-between text-black/70 max-[700px]:flex-col max-[700px]:gap-6">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <Image
            src="/masarniaLogo.png"
            alt="Masarnia Logo"
            width={45}
            height={45}
            className="object-contain"
          />
        </div>

        {/* Middle Links */}
        <div className="flex gap-10 text-15 text-black/80 font-light">
          <a
            href="/polityka-prywatnosci"
            className="hover:text-brand-red transition font-inter text-center"
          >
            Polityka prywatności
          </a>
          <a
            href="/cookies"
            className="hover:text-brand-red font-inter transition text-center"
          >
            Polityka plików cookies
          </a>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end gap-2">
          {/* Icons */}
          <div className="flex gap-3">
            <a
              href="#"
              className="bg-brand-red rounded-full p-2 hover:bg-brand-red-dark transition"
            >
              <Facebook size={18} color="#fff" />
            </a>
            <a
              href="mailto:masarnia220a@gmail.com"
              className="bg-brand-red rounded-full p-2 hover:bg-brand-red-dark transition"
            >
              <Mail size={18} color="#fff" />
            </a>

            <a
              href="tel:+48146833990"
              className="bg-brand-red rounded-full p-2 hover:bg-brand-red-dark transition"
            >
              <Phone size={18} color="#fff" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center container max-[850px]:flex-col max-[850px]:gap-6 ">
        <span className="text-15 text-center">
          <span className="text-15 font-inter text-black/60 h-fit text-center">
            &copy; {new Date().getFullYear()} Masarnia Braci Giża | Wszelkie
            prawa zastrzeżone
          </span>
        </span>
        <div className="flex justify-center items-center ">
          <a
            href="https://kocikdev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group transition-all duration-300"
          >
            <div className="w-[38px] h-[38px] opacity-30 grayscale transition-all duration-300 flex items-center justify-center group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_#3f37c9]">
              <img
                src="/kocikdevlogo.svg"
                alt="KocikDev Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="relative font-inter text-center  font-semibold text-[#aaa] transition-all duration-300 group-hover:text-[#3f37c9] group-hover:-translate-y-[1px]">
              Zaprojektowane przez KocikDev
              {/* underline effect */}
              <span className="absolute left-0 -bottom-[2px] h-[2px] bg-[#3f37c9] w-0 group-hover:w-full transition-all duration-300"></span>
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};
