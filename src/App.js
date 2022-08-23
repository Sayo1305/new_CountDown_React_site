import { useEffect, useRef, useState } from "react";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


function App() {
  const [Days , SetDays] = useState("00");
  const [Hour , SetHour] = useState("00");
  const [Minute , SetMinute] = useState("00");
  const [Second , SetSecond] = useState("00");
  var interval = useRef();

  const Timer = ()=>{
    const countdown = new Date(`January 1,2023`).getTime();
    interval = setInterval(() => {
      const Now = Date.now();
      const RemainingTime = countdown - Now;
      const days = Math.floor(RemainingTime  / (1000 * 60 * 60 * 24));
      const hour = Math.floor((RemainingTime  % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60));
      const minute = Math.floor((RemainingTime  % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((RemainingTime  % (1000 * 60)) / (1000));
      if(RemainingTime < 0)
      {
        clearInterval(interval.current);
      }else{
        SetDays(days);
        SetHour(hour);
        SetMinute(minute);
        SetSecond(second);
      }
    }, 1000);
  }
  useEffect(()=>{
    Timer();
  },[]);
  return (
    <div className="w-full h-full text-sky-900 absolute">
      <img className="absolute w-full h-screen bg-auto bg-center -z-10 bg-gradient-to-r from-transparent to-purple-200" src="https://live.staticflickr.com/65535/50018886052_eced43ac83_b.jpg"/>
      <Navbar/>
      <Body Days={Days} Hour ={Hour} Minute = {Minute} Second ={Second}/>
      <Footer/>
    </div>
  );
}

export default App;
