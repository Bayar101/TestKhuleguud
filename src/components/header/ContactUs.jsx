import React, { useState } from "react";
import { Link } from "react-router-dom";
import Jijigzurag from "../../container/jijigZurag";
import Basketball from "../../assets/basketball.png";



const Contact = () => {
    const [show, setShow] = useState(false);
  return (
    <div className="w-full h-auto">
      <div className="flex justify-center ">
        <div className="text-[100px]">
          <h1>Contact</h1>
        </div>
        <div className="text-[20px] text-[red]">
          <h1>
            <Link to="/">home</Link>
          </h1>
        </div>
      </div>
      <div className="w-[full] h-[1000px] bg-[red] px-[100px] pt-[50px]">
        <Jijigzurag />
      </div>

      

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
    </div>
  );
};
export default Contact;
