import Image from 'next/image';
import React from 'react';
import banner from "@/assets/banner.png";

const Banner = () => {
    return (
        
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      {/* Main Card Container */}
      <div className="bg-gray-900 rounded-2xl p-8 md:p-12 max-w-6xl w-full flex flex-col md:flex-row items-center gap-8">

        {/* Left Side - Text Content */}
        <div className="flex-1 space-y-6">

          {/* Small Label */}
          <p className="text-lime-400 text-sm font-semibold tracking-widest uppercase">
            Workout Library
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          {/* Button */}
          <button className="bg-lime-400 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-lime-300 transition-colors cursor-pointer">
            BROWSE WORKOUTS
          </button>

        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          {/* Replace this with your actual image */}
          <Image
            src={banner}
            alt="Person using a rowing machine"
            className="w-80 md:w-96 h-auto"
          />
        </div>

      </div>
    </div>
  );
}
     
  


export default Banner;