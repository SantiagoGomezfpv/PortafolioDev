import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function SparklesPreview({ frase }) {
  return (
    <div className="h-[5rem] w-[100vw] md:h-[10rem] md:w-[50vw] bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-5xl text-4xl font-bold text-center text-white relative z-20 pb-2">
        {frase}
      </h1>
      <div className="w-[40rem] h-[2rem] md:h-[5rem] relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          id={frase}
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_100px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
