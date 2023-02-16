import React, { useState } from "react";
import "./styles.css";
import Zurag from "../../assets/animatedSlider/khuleguud.jpg";
import Zurag1 from "../../assets/animatedSlider/khuleguud1.jpg";
import Zurag2 from "../../assets/animatedSlider/khuleguud2.jpg";
import Cover from "../../assets/animatedSlider/cover.png";

import { BiUpArrow } from 'react-icons/bi';
import { BiDownArrow } from 'react-icons/bi';


const AnimatedSlider = () => {
  const [count, setCount] = useState(3);

  function decrementCount() {
    setCount(count - 1);
  }
  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div className="w-full h-auto bg-[#141414] flex flex-col justify-center items-center">
      <div className="bg-[grey] gap-[20px] text-[5rem]">
        <button className="w-[100px] h-[100px]" onClick={decrementCount}>
          -
        </button>
        <span className="w-[100px] h-[100px]">({count})</span>
        <button className="w-[100px] h-[100px]" onClick={increaseCount}>
          +
        </button>
      </div>
      {/* sliderContainer */}
      <div className="w-full h-[80vh] mt-[5vh] relative overflow-hidden">
        {/* backgroundWithShader */}
        <div className="w-full h-full absolute top-0">
          <img src={Cover} alt="/" className="w-full h-full" />
          <div className="w-full h-full absolute top-0 left-0 bg-[black] opacity-[60%]"></div>
        </div>
        {/* Arrows */}
        <button className="w-auto h-auto bg-[silver] bg-opacity-[80%] text-[black] text-[2rem] absolute top-0 left-1/2 translate-x-[-50%]
            p-[10px] rounded-[50%] flex justify-center items-center z-10 shadow-md" onClick={increaseCount}><BiUpArrow /></button>
        <button className="w-auto h-auto bg-[silver] bg-opacity-[80%] text-[black] text-[2rem] absolute bottom-0 left-1/2 translate-x-[-50%]
            p-[10px] rounded-[50%] flex justify-center items-center z-10 shadow-md" onClick={decrementCount}><BiDownArrow /></button>
        {/* sldierContent */}
        {count === 1 ? (
          <div className="absolute w-full h-full left-[-4%] top-0">
            <div id='doosh' className="w-[80%] h-full skew-x-[-10deg] overflow-hidden absolute">
                <img
                src={Zurag}
                alt="/"
                className="h-full w-full skew-x-[10deg]"
                />
            </div>
            <div
              id="deesh"
              className="w-[35%] h-full bg-[silver] absolute top-0 right-[-10%]
                      skew-x-[-10deg] flex justify-center items-center"
            >
              <p className="w-[300px]">
                {" "}
                Хасын Хүлэгүүд 2022. Багийн ивээн тэтгэгч: XacBank SB Logistics
                LLC GAN Sports Center МАРАЛ эрүүл мэндийн төв Гэрэл зургийг:
                Infinite Creative Studio
              </p>
            </div>
          </div>
        ) : count === 4 ? (
          <div className="absolute w-full h-full left-[-4%] top-0">
           <div id='doosh' className="w-[80%] h-full skew-x-[-10deg] overflow-hidden absolute">
                <img
                src={Zurag}
                alt="/"
                className="h-full w-full skew-x-[10deg]"
                />
            </div>
            <div
              id="deesh"
              className="w-[35%] h-full bg-[silver] absolute top-0 right-[-10%]
                      skew-x-[-10deg] flex justify-center items-center"
            >
              <p className="w-[300px]">
                {" "}
                Хасын Хүлэгүүд 2022. Багийн ивээн тэтгэгч: XacBank SB Logistics
                LLC GAN Sports Center МАРАЛ эрүүл мэндийн төв Гэрэл зургийг:
                Infinite Creative Studio
              </p>
            </div>
          </div>
        ) : count === 2 ? (
          <div className="w-full h-full relative">
            <div className="absolute w-full h-full left-[-4%] top-0">
            <div id='doosh1' className="w-[80%] h-full skew-x-[-10deg] overflow-hidden absolute">
                <img
                src={Zurag1}
                alt="/"
                className="h-full w-full skew-x-[10deg]"
                />
            </div>
              <div
                id="deesh1"
                className="w-[35%] h-full bg-[silver] absolute top-0 right-[-10%]
                skew-x-[-10deg] flex justify-center items-center"
              >
                <p className="w-[300px]">
                  {" "}
                  Хасын Хүлэгүүд 2022. Багийн ивээн тэтгэгч: XacBank SB
                  Logistics LLC GAN Sports Center МАРАЛ эрүүл мэндийн төв Гэрэл
                  зургийг: Infinite Creative Studio
                </p>
              </div>
            </div>
          </div>
        ) : count === 5 ? (
          <div className="w-full h-full relative">
            <div className="absolute w-full h-full left-[-4%] top-0">
            <div id='doosh1' className="w-[80%] h-full skew-x-[-10deg] overflow-hidden absolute">
                <img
                src={Zurag1}
                alt="/"
                className="h-full w-full skew-x-[10deg]"
                />
            </div>
              <div
                id="deesh1"
                className="w-[35%] h-full bg-[silver] absolute top-0 right-[-10%]
                skew-x-[-10deg] flex justify-center items-center"
              >
                <p className="w-[300px]">
                  {" "}
                  Хасын Хүлэгүүд 2022. Багийн ивээн тэтгэгч: XacBank SB
                  Logistics LLC GAN Sports Center МАРАЛ эрүүл мэндийн төв Гэрэл
                  зургийг: Infinite Creative Studio
                </p>
              </div>
            </div>
          </div>
        ) : count === 3 ? (
          <div className="absolute w-full h-full left-[-4%] top-0">
            <div id='doosh2' className="w-[80%] h-full skew-x-[-10deg] overflow-hidden absolute">
                <img
                src={Zurag2}
                alt="/"
                className="h-full w-full skew-x-[10deg]"
                />
            </div>
            <div
              id="deesh2"
              className="w-[35%] h-full bg-[silver] absolute top-0 right-[-10%]
                  skew-x-[-10deg] flex justify-center items-center"
            >
              <p className="w-[300px]">
                {" "}
                Jaahan uur zurag avii gej helnee. Esuul yg ene bairlalaaraa
                ushuu goyoor avhuulsan zurag ch ymu (deerees ni darsan esuul
                dotor talaas ni dooroos ni avsan ch ymu)
              </p>
            </div>
          </div>
        ) : count === 6 ? (
          <div className="absolute w-full h-full left-[-4%] top-0">
            <div id='doosh2' className="w-[80%] h-full skew-x-[-10deg] overflow-hidden absolute">
                <img
                src={Zurag2}
                alt="/"
                className="h-full w-full skew-x-[10deg]"
                />
            </div>
            <div
              id="deesh2"
              className="w-[35%] h-full bg-[silver] absolute top-0 right-[-10%]
                  skew-x-[-10deg] flex justify-center items-center"
            >
              <p className="w-[300px]">
                {" "}
                Jaahan uur zurag avii gej helnee. Esuul yg ene bairlalaaraa
                ushuu goyoor avhuulsan zurag ch ymu (deerees ni darsan esuul
                dotor talaas ni dooroos ni avsan ch ymu)
              </p>
            </div>
          </div>
        ) : (
          setCount(2)
        )}
      </div>
    </div>
  );
};

export default AnimatedSlider;
