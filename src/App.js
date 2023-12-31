import Particles from "react-particles";
import {loadFireworksPreset} from "tsparticles-preset-fireworks"
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [newYearMassage, setNewYearMassage] = useState (["Hitung Mundur bareng yuk!!!😁😁😁"])

  const particleInitilization = async(engine) => {
    await loadFireworksPreset(engine)
  }

  function timeLeft(){
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime()
    const nowDate = new Date().getTime()
    const remainingTime = newYearDate - nowDate
    return remainingTime
  }

  return (
    <>
    <Particles
    init ={particleInitilization}
    options={{preset: "fireworks"}} />
    <div className="flex flex-col justify-center items-center min-h-screen gap-5">
      <span className="text-white text text-4xl font-bold z-50 px-4">
        <Typewriter 
        words={newYearMassage}
        loop={false}
        cursorStyle="_"
        cursor
        typeSpeed={10}
        deleteSpeed={10}

    
        
        />
        </span>
        <div className="z-50 text-white font-bold text-2xl:">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => setNewYearMassage([
            "Selamat", "Tahun", "Baru", "2024", "Sifa 🥳"
          ])}
           typeSpeed={10}
           deleteSpeed={5}
          
          />
        </div>
    </div>
    </>
    );
}

export default App;
