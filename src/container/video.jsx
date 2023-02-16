import React from "react";
import Vid from './vid';

const Video = () =>{
    return(
        <div className="w- full h-[80vh] bg-black">
            <div className="w-full h-[100%] relative">
                <div>
                    <h2 className="w-[70%] uppercase text-4xl absolute left-[17%] text-white top-[40%] font-sans z-30 font-bold">Celebrating over 19 years of Khasiin Khuleguud Basketball Team</h2>
                </div>
                 <div id="IntorductionVideo" className="w-full h-full overflow-hidden ">
                    <Vid />
                 </div>
            </div>
        </div>
    )
}
export default Video;