import React from "react";
import Vid from './vid';

const Video = () =>{
    return(
        <div className="w- full h-[auto] bg-black">
            <div className="w-full h-[100%] relative">
                <div>
                    <h2 className="w-[70%] uppercase text-4xl absolute left-[17%] text-white top-[40%] font-sans z-30">Celebrating over 19 years of Khasiin Khuleguud Basketbal Team</h2>
                </div>
                 <div id="IntorductionVideo" className="w-full h-full overflow-hidden ">
                    <Vid />
                 </div>
            </div>
        </div>
    )
}
export default Video;