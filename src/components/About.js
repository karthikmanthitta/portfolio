import Pic from "../assets/pic.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col justify-center h-full items-center gap-10 relative">
      <p className="absolute top-10 text-lg md:text-3xl font-bold justify-center font-mono uppercase tracking-[15px]">
        About
      </p>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex md:w-1/2 justify-center">
          <motion.img
            className="rounded-full h-40 md:h-80"
            src={Pic}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </div>
        <div className="flex flex-col md:w-1/2  p-14 gap-8">
          <p className="flex text-sm md:text-lg justify-evenly">
            Fullstack Web Developer with hands-on experience in product
            development and software development lifecycle. In addition, have
            ample experience in understanding and satisfying client needs and
            ensuring smooth delivery. An avid explorer of unfamiliar
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
