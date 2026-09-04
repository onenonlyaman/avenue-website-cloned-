import React from "react";
import Image from "next/image";

const awardsList = [
  {
    title: "Most Trusted Developer",
    category: "Excellence in Real Estate",
    image: "/awards/trusted-developer.webp",
  },
  {
    title: "Ultra Luxury Project of the Year",
    category: "The One, Civil Lines",
    image: "/awards/ultra-luxury-the-one.webp",
  },
  {
    title: "Commercial Landmark of the Year",
    category: "West 19 & Business Park",
    image: "/awards/commercial-business-park.webp",
  },
  {
    title: "Most Innovative Township Design",
    category: "Paris City",
    image: "/awards/innovative-paris-city.webp",
  },
  {
    title: "Luxury High-Rise of the Year",
    category: "Infinity East",
    image: "/awards/luxurious-infinity-east.webp",
  },
  {
    title: "Premier Builder & Developer",
    category: "Central India Honors",
    image: "/awards/builders-developers.webp",
  },
];

export default function Awards() {
  return (
    <section className="bg-[#14110c] py-28 px-6 md:px-12 lg:px-20 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-[11px] font-grotesk uppercase tracking-[0.3em] text-brand-gold font-semibold mb-3">
            Honours & Recognition
          </div>
          <h2 className="text-3xl sm:text-5xl font-grotesk font-normal uppercase leading-[1.1] tracking-tight">
            Celebrated by the Industry
          </h2>
          <p className="font-hanken text-white/60 text-sm md:text-base mt-4">
            Recognized nationally and regionally for architectural innovation, timely delivery, and construction benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {awardsList.map((award, i) => (
            <div
              key={i}
              className="bg-[#17140f] border border-white/10 p-6 flex flex-col items-center text-center justify-between hover:border-brand-gold/50 transition-all duration-300 group"
            >
              <div className="relative h-28 w-28 mb-4">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div>
                <h4 className="font-grotesk text-xs uppercase font-semibold text-white tracking-wider leading-snug">
                  {award.title}
                </h4>
                <p className="font-hanken text-[11px] text-brand-gold/80 mt-1">
                  {award.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
