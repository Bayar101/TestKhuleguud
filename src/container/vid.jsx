import React, {useRef} from "react";
import Highlights from '../assets/Y2Mate.is - Game Recap Nuggets 134, Warriors 117-wdYwPUMj_gU-360p-1654775870161.mp4'


function Vid (props) {
    const videoRef = useRef ();

    const handlePlay =() =>{
        videoRef.current.play();
    };

    const handlePause =() =>{
        videoRef.current.pause();
    }
    
        return (
            <div className="w-full h-full object-cover opacity-60 relative">
                 <div className="absolute z-10 bottom-[0%] left-[45%] opacity-40">
                <button className="w-[60px] h-[30px] bg-black text-white" onClick={handlePause}>
                       Pause
                </button>
                
                <button className="w-[60px] h-[30px] bg-black text-white" onClick={handlePlay}>
                       Play
                </button>
                </div>
                <video ref={videoRef} src={Highlights} height="2000px" width="1400px" autoPlay={true} muted/>
                
            </div>
        )
    

}
export default Vid;