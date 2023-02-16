import React, { useRef, useState } from "react";
import Highlights from "../assets/Y2Mate.is - Game Recap Nuggets 134, Warriors 117-wdYwPUMj_gU-360p-1654775870161.mp4";
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";

function Vid(props) {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };


  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full object-cover opacity-60 relative">
        <div className="absolute z-10 bottom-[0%] left-[45%] flex"></div>
        <video
          ref={videoRef}
          src={Highlights}
          autoPlay
          loop
          muted
          className="w-full h-auto"
        />
      </div>
      <div className="absolute top-[52%] left-[50%] translate-x-[-50%] translate-y-[-100%] flex text-[2rem] gap-[10px]">
        <button
          className="w-50 h-auto text-white p-[5px] bg-black bg-opacity-50 rounded-[50%]
                        flex justify-center text-center "
          onClick={handlePause}
        >
          <BsFillPauseFill />
        </button>
        <button
          className="w-auto h-auto text-white p-[5px] pl-[7px] bg-black bg-opacity-50 rounded-[50%]
                        flex justify-center text-center 
                    "
          onClick={handlePlay}
        >
          <BsFillPlayFill />
        </button>
      </div>
      
      
        <div className="w-full h-[100px] bg-black"></div>

    </div>
  );
}
export default Vid;
