import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="flex flex-row p-7 justify-between">
        <motion.a
          href="https://in.linkedin.com/in/karthik-manthitta"
          initial={{ x: -500, opacity: 0.5, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <BsLinkedin className="text-xl" />
        </motion.a>
        <motion.a
          href="mailto: karthikmanthitta@gmail.com"
          initial={{ x: 500, opacity: 0.5, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <MdOutlineMail className="text-xl" />
        </motion.a>
      </div>
      <motion.div
        className="flex flex-col mt-48"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <p className="flex justify-center text-2xl md:text-4xl">
          Hi, I'm&nbsp;<span className="text-[#f64c72]">Karthik Manthitta</span>.
        </p>
        <p className="flex justify-center text-md md:text-lg">
          Full-Stack Web Developer
        </p>
      </motion.div>
      <motion.div
        className="absolute left-1/2 -ml-4 bottom-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: 3, delay: 0.5 }}
      >
        <BsChevronDown size="20px" />
      </motion.div>
      <motion.div
        className="absolute left-1/2 -ml-4 bottom-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: 3, delay: 0.7 }}
      >
        <BsChevronDown size="20px" />
      </motion.div>
    </div>
  );
};

export default Hero;
