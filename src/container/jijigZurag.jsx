import React from "react";
import Zurag1 from "../assets/jijig zurag.jpg";
import Zurag2 from "../assets/328493305_898003968294310_3445054953830073342_n.jpg";
import Zurag3 from "../assets/328130853_485476210454082_7742600456429623970_n.jpg";
import Zurag4 from "../assets/327994253_911057623643748_4331281771619734834_n.jpg";
import Zurag5 from "../assets/326897773_716043673244571_3384446714633081265_n.jpg";
import Zurag6 from "../assets/326756341_710127657376759_7237387178208262454_n.jpg";
import Zurag7 from "../assets/323568684_746557983558895_379527181294929521_n.jpg";
import Bar from "../components/barsa/barsa";

function Jijigzurag() {
  const jijigBannerZurag = [
    {
      id: 1,
      img: Zurag7,
      text: "Bilguun",
    },
    {
      id: 2,
      img: Zurag2,
      text: "Bilguun",
    },
    {
      id: 3,
      img: Zurag3,
      text: "Bilguun",
    },
    {
      id: 4,
      img: Zurag4,
      text: "Bilguun",
    },
    {
      id: 5,
      img: Zurag5,
      text: "Bilguun",
    },
    {
      id: 6,
      img: Zurag6,
      text: "Bilguun",
    },
  ];
  return (
    <div className="w-full h-auto flex">
      <div className="w-[60%] h-[900px] bg-[black] rounded-[30px] relative">
        <img
          src={Zurag1}
          className="w-[100%] h-[100%] rounded-[30px]"
          alt="/"
        />
        <h1 className="absolute top-[0] text-[3rem] text-[white] left-[50%] translate-x-[-50%]">
          MBA
        </h1>
        <h1 className="absolute top-[5%] text-[3rem] text-[white] left-[50%] translate-x-[-50%]">
          Play offs
        </h1>
        <button className="absolute top-[12%] text-[1.5rem] text-[white] left-[50%] translate-x-[-50%]  ">
          unbalanced
        </button>
        <div className="absolute grid grid-cols-3 w-full top-[170px] px-[15%] gap-[30px] ">
          {jijigBannerZurag.map((utga) => (
            <div className="w-full text-center">
              <img
                src={utga.img}
                className="h-auto w-full object-cover rounded-[30px]"
                alt="/"
              />
              <p className="text-[red] ">{utga.text}</p>
            </div>
          ))}
        </div>
        <div className="w-[80%] h-[70px] bg-black absolute top-[78%] left-[10%] rounded-tl-[30px] rounded-bl-[30px] flex">
          <div className="w-[15%] h-[70px] bg-white  rounded-tl-[30px] rounded-bl-[30px]">
            <p className="pl-[20%] pt-[20%]">bilguun</p>
          </div>
          <div className="w-[250px] h-[70px] bg-[purple]">
            <p className="pl-[35%] pt-[8%]">bilguun</p>
          </div>
          <div className="w-[300px] h-[70px] bg-[white]">
            <p className="pl-[40%] pt-[8%]">bilguun</p>
          </div>
        </div>
        <div className="w-[80%] h-[70px] bg-black absolute top-[87%] left-[10%] rounded-tl-[30px] rounded-bl-[30px] flex">
          <div className="w-[15%] h-[70px] bg-white  rounded-tl-[30px] rounded-bl-[30px]">
            <p className="pl-[20%] pt-[20%]">bilguun</p>
          </div>
          <div className="w-[250px] h-[70px] bg-[purple]">
            <p className="pl-[35%] pt-[8%]">bilguun</p>
          </div>
          <div className="w-[300px] h-[70px] bg-[white]">
            <p className="pl-[40%] pt-[8%]">bilguun</p>
          </div>
        </div>
      </div>
      <div className="w-[40%] h-[100%]">
        <Bar />
      </div>
    </div>
  );
}

export default Jijigzurag;
