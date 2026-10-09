import React from "react";
import heroImg from "../c8dfa6312c2d8ae9f9373b8ebeb680371e67d3a1.png";

const Hero = () => {
  return (
    <section className="flex items-center justify-between hero">
      <div className="max-w-full">
        <span className="text-orange-500 font-semibold uppercase tracking-wider">
          BEST DESTINATIONS AROUND THE WORLD
        </span>

        <h1 className="text-7xl font-bold text-[#181E4B] leading-tight mt-4">
          Travel, enjoy and live a new and full life
        </h1>

        <p className="text-gray-500 mt-6 leading-7">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors">
            Find out more
          </button>
          <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-100 transition-colors">
            Play Demo
          </button>
        </div>
      </div>

      <div className="hero-right">
        <img
          src={heroImg}
          alt="Traveler"
        />
      </div>
    </section>
  );
};

export default Hero;
