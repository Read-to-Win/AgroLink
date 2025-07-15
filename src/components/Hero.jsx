import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/heroVideo.mp4";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black/20">
      <video
        autoPlay
        muted
        loop
        playsInline
        src={heroVideo}
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

      <div className="relative z-10 flex flex-col justify-center h-full max-w-screen-xl mt-30 px-6 md:px-12 text-white">
        <h1 className="text-4xl md:text-6xl font-semibold leading-[100%] max-w-3xl">
          Rent The Right Equipment For Your Farm
        </h1>
        <p className="text-lg md:text-xl mt-3 max-w-2xl leading-[100%] font-normal">
          Access a wide range of equipment from trusted owners. Find the perfect machine for your farm.
        </p>

        <div className="mt-8">
          <Link to="/products">
            <button className="animate-bounce bg-green-800 text-white font-semibold py-3 px-8 rounded-lg shadow hover:bg-white hover:text-green-950 hover:shadow-lg transition duration-300">
              See Equipments
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
