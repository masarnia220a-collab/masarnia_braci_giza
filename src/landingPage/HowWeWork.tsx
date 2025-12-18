import Image from "next/image";
import Link from "next/link";

export const HowWeWork = () => {
  return (
    <section className="w-full bg-background-soft">
      {/* ===== OUR MISSION ===== */}
      <div className="bg-brand-red relative text-white py-20 px-6 rounded-tl-2xl rounded-tr-2xl">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2
"
        >
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
            <h2 className="text-36 text-brand-red w-full font-bold capitalize absolute z-50 top-[-8px] left-1/2 text-center  -translate-x-1/2">
              Jak pracujemy
            </h2>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mt-6">
            {[
              {
                number: "01",
                text: "Selekcja i Rozbiór Każdy dzień zaczynamy od surowej oceny mięsa. Przeprowadzamy ręczny rozbiór półtusz, oddzielając to, co najlepsze. Nie używamy mięsa oddzielanego mechanicznie (MOM) – u nas liczy się czysty surowiec.",
              },
              {
                number: "02",
                text: "Marynowanie i Przyprawianie To tutaj dzieje się magia smaku. Mięso leżakuje w autorskich solankach i jest nacierane mieszankami naturalnych ziół. Dajemy mu czas, aby przeszło aromatem – bez przyspieszaczy i nastrzykiwania",
              },
              {
                number: "03",
                text: "Wędzenie i Parzenie Ostatni etap to kunszt wędzarniczy. Używamy tradycyjnych komór i naturalnego dymu z drewna liściastego. Pilnujemy temperatury i czasu, by wędliny nabrały idealnego koloru i kruchości, które zobaczysz na zdjęciach poniżej.",
              },
            ].map((item) => (
              <div className="flex flex-col items-center" key={item.number}>
                <p className="text-4xl font-semibold mb-4">{item.number}</p>
                <p className="text-15 font-light text-white/80 font-inter max-w-[300px] ">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== IMAGE CTA GRID ===== */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 rounded-br-2xl">
        {/* LEFT */}
        <div className="relative h-[420px]">
          <Image
            src="/produkcja_1.png" // ← podmień
            alt="Workshops"
            fill
            className="object-cover object-top "
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
            <h3 className="text-2xl font-semibold mb-4 tracking-wide">
              RĘCZNA PRODUKCJA
            </h3>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative h-[420px] rounded-br-2xl">
          <Image
            src="/produkcja_2.png" // ← podmień
            alt="Online store "
            fill
            className="object-cover object-top rounded-br-2xl"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
            <h3 className="text-2xl font-semibold mb-4 tracking-wide">
              TRADYCYJNE WYROBY
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
