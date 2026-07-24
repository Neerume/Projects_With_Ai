import React,{useState} from "react";
import BackgroundImage from "../assets/background.png";
import Robot from "../assets/robot.png";
import { BookOpen } from "lucide-react";
import { Users } from "lucide-react";


const Hero =()=>{
  const [prompt, setPrompt] = useState("");
  return(
  <div>
    <div className ="flex md:gap-20 gap-9">
      <div className="min-h-screen justify-center md:px-20 md:py-20 px-10 py-10">
      <h1 className="md:text-7xl text-3xl text-amber-100 fantasy-font">
        Turn Your
        <br />
        Imagination
        <br />
        Into <span className="text-violet-400 md:text-8xl text-6xl font-bold">Stories</span>
      </h1>

      <p className="text-gray-300 mt-6 max-w-xl md:text-xl text-sm">
        Describe your idea and let AI weave a magical story for you.
      </p>
        <div className="relative w-full max-w-2xl mx-auto md:mb-10 md:mt-7 mb-5 mt-5">
            <textarea
              placeholder="🖋️✨ e.g. A brave knight falls in love with a princess"
              className="w-full h-32 px-6 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder:text-gray-300 outline-none resize-none"
              value={prompt} onChange={(e)=> setPrompt(e.target.value)} maxLength={500}
            />
              <span className="absolute bottom-4 right-5 text-sm text-gray-400">{prompt.length}/ 500 </span>
          </div>
          <div className="-mt-5 justify-start flex gap-4 md:gap-6">
            <button className=" bg-violet-500 hover:bg-violet-400 transition px-5 py-2 rounded-lg text-white">✨ Generate Story</button>
            <button className="bg-transparent border border-yellow-500/20 hover:border-yellow-400 transition px-5 py-2 rounded-lg text-white">📖 Surprise Me</button>
          </div>
      </div>

      <div>
        <img src={Robot} alt="Robot" className="md:w-[350px] max-w-md mx-auto w-[200px]" />
      </div>

</div>

    <div className="flex md:gap-8 gap-5 md:px-10 px-5 border rounded-lg py-5 bg-transparent backdrop-blur-md border-white/20 w-full max-w-2xl mx-auto md:ml-10 ml-5">
      <div className="w-14 h-14 rounded-full bg-violet-900 flex items-center justify-center">
       <BookOpen className="text-yellow-300 w-7 h-7" />
      </div>

      <div className="w-14 h-14 rounded-full bg-violet-900 flex items-center justify-center">
        <Users className="text-yellow-300 w-7 h-7"/>
      </div>
    </div>

</div>
  ) 
  
}

export default Hero;