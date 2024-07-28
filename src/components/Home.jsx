import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-50 text-lg">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#00FFCA]">
          Mohammad Ashfaque Ansari
        </h1>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-50 pt-2 flex">
            <span className='mr-2'>I am</span>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                .typeString(" an aspiring Full Stack Web Developer passionate about crafting meaningful digital experiences")
                .pauseFor(1000)
                .deleteAll()
                .typeString(" an aspiring Full Stack Web Developer passionate about crafting meaningful digital experiences") // Repeat the initial phrase
                .pauseFor(1000)
                .deleteAll()
                .typeString(" \"Code is like humor. When you have to explain it, it’s bad.\" - Cory House") // Add a motivational quote
                .pauseFor(3000)
                .deleteAll()
                .typeString(" an aspiring Full Stack Web Developer passionate about crafting meaningful digital experiences")
                .start();
              }}
            />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
