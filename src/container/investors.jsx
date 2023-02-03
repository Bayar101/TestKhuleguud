import React, { useState } from "react";
import './investors.css'
import Basketball from '../assets/basketball.png'
import Faunduel from '../assets/FanDuel-Associated-Press.png';
import Sblog from '../assets/sblogisticslogo.png';
import Xacbank from '../assets/xacbank_white_en.png';
import Puma from '../assets/puma (1).png';
import Addidas from '../assets/Adidas_Logo.svg (1).png';
import Nike from '../assets/nike_PNG11 (1).png';
import NBA from '../assets/NBA-logo-png.png';
import Dcrown from '../assets/D_Crown_White.png';
import Footer from "./footer";
import Jijigzurag from '../container/jijigZurag'

const Investors = ()=>{
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

    ]
    const [show, setShow] = useState(false);
   
    
    return(
        <div className="w-full">
            <div className="w-[full] h-[1000px] bg-[red] px-[100px] pt-[50px]">
            <Jijigzurag />
            </div>
            
            {
                show?<div id="test" className="w-full h-[400px] bg-[#141414] px-[5%]">
                <div className="w-full pl-[50px] py-[20px] h-[15%]">
                    <p className="uppercase text-[2rem] font-[Carter] text-[white]">sponsors</p>
                </div>
                <div className="w-[80%] m-auto h-[300px] pl-[100px] grid grid-cols-4 items-center">
                    {
                        Sponsors.map((holbo)=>(
                            <img src={holbo.img} alt="/" 
                            className="w-[160px] h-auto"
                            />
                        ))
                    }
                </div>
            </div>:null
            }

            <div  className="w-full h-[50vh] bg-[#141414] relative">
                <div id='box' className="w-auto absolute right-0 top-[-290px]">
                    <div id='Basketball' className="absolute top-[-100px] right-0 w-[100px] h-auto rounded-[50%] cursor-pointer"
                    onClick={()=>setShow(!show)}>
                        <img className="w-full h-full" id='ball' src={Basketball} alt="/" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Investors;