import React, { useState } from "react";
import "./investors.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/header/home";
import About from "../components/header/aboutUs";
import Team from "../components/header/team";
import Shop from "../components/header/shop";
import Blog from "../components/header/blog";
import Contact from "../components/header/ContactUs";

import Video from "./video";
import moreHighlights from '../assets/Y2Mate.is - Game Recap Nuggets 134, Warriors 117-wdYwPUMj_gU-360p-1654775870161.mp4'
import Basketball from "../assets/basketball.png";
import Faunduel from "../assets/FanDuel-Associated-Press.png";
import Sblog from "../assets/sblogisticslogo.png";
import Xacbank from "../assets/xacbank_white_en.png";
import Puma from "../assets/puma (1).png";
import Addidas from "../assets/Adidas_Logo.svg (1).png";
import Nike from "../assets/nike_PNG11 (1).png";
import NBA from "../assets/NBA-logo-png.png";
import Dcrown from "../assets/D_Crown_White.png";
import Footer from "./footer";
import Jijigzurag from "../container/jijigZurag";
import AnimatedSlider from "../components/animatedSlider/animatedSlider";
// import Video from "./video";

const Investors = () => {
  const Sponsors = [
    {
      id: 1,
      img: Faunduel,
    },
    {
      id: 2,
      img: Sblog,
    },
    {
      id: 3,
      img: Xacbank,
    },
    {
      id: 4,
      img: Puma,
    },
    {
      id: 5,
      img: Addidas,
    },
    {
      id: 6,
      img: Nike,
    },
    {
      id: 7,
      img: NBA,
    },
    {
      id: 8,
      img: Dcrown,
    },
  ];
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <div className="w-full h-auto relative">
        <div className="w-full h-auto">
            <Video />
            <div
            className="w-[150px] h-[50px] absolute left-1/2 bottom-0 translate-x-[-50%] bg-black bg-opacity-50 rounded-[50px] text-white
                flex justify-center items-center uppercase text-[1.5rem]"
            onClick={() => setShow1(!show1)}
            >
            More
            </div>
        </div>
        <div className="w-full h-[auto]">
            {show1 ? <div className="w-full h-auto bg-[#141414] p-[3%] grid grid-cols-3 gap-[50px]">
            <video  autoPlay loop muted src={moreHighlights} className='w-full h-auto rounded-[50px]'></video>
            <video  autoPlay loop muted src={moreHighlights} className='w-full h-auto rounded-[50px]'></video>
            <video  autoPlay loop muted src={moreHighlights} className='w-full h-auto rounded-[50px]'></video>
            </div> : null}
        </div>
      </div>
      <div className="w-full h-auto flex justify-center items-center">
          <AnimatedSlider />
      </div>
      <div className="w-[full] h-[1000px] bg-[red] px-[100px] pt-[50px]">
        <Jijigzurag />
      </div>

      {show ? (
        <div id="test" className="w-full h-[500px] bg-[#141414] px-[5%]">
          <div className="w-full pl-[50px] py-[20px] h-[15%]">
            <p className="uppercase text-[2rem] font-[Carter] text-[white]">
              sponsors
            </p>
          </div>
          <div className="w-[80%] m-auto h-[300px] pl-[100px] grid grid-cols-4 items-center">
            {Sponsors.map((holbo) => (
              <img src={holbo.img} alt="/" className="w-[160px] h-auto" />
            ))}
          </div>
        </div>
      ) : null}

      <div className="w-full h-[0.1px] bg-[#141414] relative">
        <div id="box" className="w-auto absolute right-0 top-[-290px]">
          <div
            id="Basketball"
            className="absolute top-[-100px] right-0 w-[100px] h-auto rounded-[50%] cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <img
              className="w-full h-full"
              id="ball"
              src={Basketball}
              alt="/"
              draggable="false"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Investors;
