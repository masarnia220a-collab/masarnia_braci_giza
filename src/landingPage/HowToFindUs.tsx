import Link from "next/link";

export const HowToFindUs = () => {
  return (
    <section
      id="jak-dojechac"
      className="flex flex-col gap-10 bg-background-soft rounded-section p-8 max-[600px]:p-5"
    >
      {/* HEADER */}
      <div className="text-center max-w-[700px] self-center">
        <p className="text-brand-red uppercase font-bold tracking-wide">
          Lokalizacja
        </p>
        <h2 className="text-36 font-bold mt-1">Jak dojechać do masarni</h2>
        <p className="paragraph mt-3">
          Znajdziesz nas w Żarówce. Zapraszamy do odwiedzin i zakupów
          bezpośrednio w masarni.
        </p>
      </div>

      {/* MAP */}
      <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-card">
        <iframe
          title="Mapa dojazdu – Masarnia Braci Giża"
          src="https://www.google.com/maps?q=Żarówka%20220A,%2039-312%20Żarówka&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          lang="pl"
        />
      </div>

      {/* ACTION */}
      <div className="flex justify-center">
        <Link
          href="https://www.google.com/maps/dir/?api=1&destination=Żarówka+220A,+39-312+Żarówka"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-red text-white px-6 py-2.5 text-16 hover:opacity-90 transition"
        >
          Otwórz w Google Maps
        </Link>
      </div>
    </section>
  );
};
