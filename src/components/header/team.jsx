import React from "react";
import { Link } from "react-router-dom"
const Team = () =>{
    return(
        <div className="flex justify-center ">
            <div className="text-[100px]">
                <h1>Team</h1>
            </div>
            <div className="text-[20px] text-[red]">
                <h1>
                    <Link to="/">home</Link>
                </h1>
            </div>
        </div>
    )
}
export default Team