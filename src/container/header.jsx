import React from "react";
import { Link } from "react-router-dom"
import Logo from '../assets/khas.png'
const Header = () =>{
    return(
        <div className="w-full h-[120px] bg-[#141414] flex justify-center">
            <div className="w-[65%] h-[120px] bg-white flex justify-center">
                <div className="w-[16.5%] h-[120px] bg-[#141414] flex justify-center">
                    <div className="text-[white] text-[40px] mt-[12.5%]">
                        <p>. . .</p>
                    </div>
                </div>
                <div className="w-[10%] h-[120px] bg-[#141414] flex justify-center items-center">
                    <div className="text-[white] text-[25px]">
                        <h2>
                            <Link to="/">Home</Link>
                        </h2>
                    </div>
                </div>
                <div className="w-[11%] h-[120px] bg-[#141414] flex justify-center items-center">
                     <div className="text-[white] text-[25px]">
                        <h2>
                            <Link to="/About">About</Link>
                        </h2>
                    </div>
                </div>
                <div className="w-[9%] h-[120px] bg-[#141414] flex justify-center items-center">
                    <div className="text-[white] text-[25px]">
                        <h2>
                            <Link to="/Team">Team</Link>
                        </h2>
                    </div>
                </div>
                <div className="w-[10%] h-[120px] bg-[#141414] flex justify-center items-center">
                    <div className="mt-[35%]">
                        <Link to='/'> <img src={Logo} alt="/" /> </Link>
                    </div>
                </div>
                <div className="w-[9%] h-[120px] bg-[#141414] flex justify-center
                items-center">
                    <div className="text-[white] text-[25px]">
                        <h2>
                            <Link to="/Shop">Shop</Link>
                        </h2>
                    </div>
                </div>
                <div className="w-[9%] h-[120px] bg-[#141414] flex justify-center items-center">
                    <div className="text-[white] text-[25px]">
                        <h2>
                            <Link to="/Blog">Blog</Link>
                        </h2>
                    </div>
                </div>
                <div className="w-[12%] h-[120px] bg-[#141414] flex justify-center items-center">
                    <div className="text-[white] text-[25px]">
                        <h2>
                            <Link to="/Contact">Contact</Link>
                        </h2>
                    </div>
                </div>
                <div className="w-[16.5%] h-[120px] bg-[#141414] flex justify-center">
                    <div className="text-[white] text-[40px] mt-[12.5%]">
                        <p>. . .</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;