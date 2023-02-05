import React from "react";
import Zurag1 from "../../assets/toglogch1.jpg";

const Bar = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-[10%]">
        <div className="">
          <img src={Zurag1} alt="/" className="w-[100%] h-auto rounded-[20px]"/>
        </div>
        <div className="w-[100%] h-[auto] rounded-[15px] relative">
            <div className=" bg-[black] absolute w-full h-full top=0 left-0 opacity-[50%] rounded-[30px]"></div>
          <p className=" text-[1.5rem] text-center p-[20px] ">
            Mongolia's top basketball player. Under his great leadership, the
            Khuleguud team won most of their championship. In the current league
            season, he holds the highest avg score per game.
          </p>
        </div>
    </div>
  );
};
export default Bar;
