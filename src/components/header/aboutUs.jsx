import React from "react";
import { Link } from "react-router-dom"
const About = () =>{
    return(
        <div className="flex justify-center ">
            <div className="text-[100px]">
                <h1>About</h1>
            </div>
            <div className="text-[20px] text-[red]">
                <h1>
                    <Link to="/">home</Link>
                </h1>
            </div>
        </div>
    )
}
export default About