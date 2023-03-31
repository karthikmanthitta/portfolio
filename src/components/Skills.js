import js from "../assets/js.svg";
import react from "../assets/reactjs.svg";
import java from "../assets/java.svg";
import spring from "../assets/spring.svg";
import docker from "../assets/docker.svg";
import kubernetes from "../assets/kubernetes.svg";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center h-full items-center relative cursor-pointer bg-gradient-to-bl  from-[#2f2fa2] via-[#242582] to-[#f64c72]">
      <p className="absolute top-10 text-lg md:text-3xl font-bold justify-center font-mono uppercase tracking-[15px]">
        Skills
      </p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-10">
        <div className="group flex relative">
          <img src={js} className="h-20  md:h-40 group-hover:grayscale rounded-full border-2" />
          <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white z-0 h-full w-full rounded-full">
            <div className="flex items-center justify-center h-full text-black flex-col text-xs md:text-lg font-semibold"><p>Javascript</p><p>Prof: 80%</p></div>
          </div>
        </div>
        <div className="group flex relative">
          <img src={react} className="h-20  md:h-40 group-hover:grayscale rounded-full border-2" />
          <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white z-0 h-full w-full rounded-full">
            <div className="flex items-center justify-center h-full text-black flex-col text-xs md:text-lg font-semibold"><p>React JS</p><p>Prof: 80%</p></div>
          </div>
        </div>
        <div className="group flex relative">
          <img src={java} className="h-20  md:h-40 group-hover:grayscale rounded-full border-2" />
          <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white z-0 h-full w-full rounded-full">
            <div className="flex items-center justify-center h-full text-black flex-col text-xs md:text-lg font-semibold"><p>Java</p><p>Prof: 60%</p></div>
          </div>
        </div>
        <div className="group flex relative">
          <img src={spring} className="h-20  md:h-40 group-hover:grayscale rounded-full border-2" />
          <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white z-0 h-full w-full rounded-full">
            <div className="flex items-center justify-center h-full text-black flex-col text-xs md:text-lg font-semibold"><p>Springboot</p><p>Prof: 60%</p></div>
          </div>
        </div>
        <div className="group flex relative">
          <img src={docker} className="h-20  md:h-40 group-hover:grayscale rounded-full border-2" />
          <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white z-0 h-full w-full rounded-full">
            <div className="flex items-center justify-center h-full text-black flex-col text-xs md:text-lg font-semibold"><p>Docker</p><p>Prof: 40%</p></div>
          </div>
        </div>
        <div className="group flex relative">
          <img src={kubernetes} className="h-20  md:h-40 group-hover:grayscale rounded-full border-2" />
          <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white z-0 h-full w-full rounded-full">
            <div className="flex items-center justify-center h-full text-black flex-col text-xs md:text-lg font-semibold"><p>Kubernetes</p><p>Prof: 40%</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
