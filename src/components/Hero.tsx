import React from "react";
import { Leaf } from "lucide-react";
import useParallax from "../hooks/useParallax";
import { motion } from "framer-motion";

interface HeroProps {
  scrollPosition: number;
}

const Hero: React.FC<HeroProps> = ({ scrollPosition }) => {
  const parallax1 = useParallax({ speed: 0.3, direction: "up" });
  const parallax2 = useParallax({ speed: 0.5, direction: "down" });
  const parallax3 = useParallax({ speed: 0.2, direction: "left" });

  const opacity = Math.max(1 - scrollPosition / 700, 0);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Leaves */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-5%] right-[-5%] text-green-600 opacity-10"
          style={parallax1.style}
        >
          <Leaf size={300} strokeWidth={1} />
        </div>
        <div
          className="absolute bottom-[10%] left-[-5%] text-green-600 opacity-10"
          style={parallax2.style}
        >
          <Leaf size={200} strokeWidth={1} />
        </div>
        <div
          className="absolute top-[30%] left-[20%] text-green-600 opacity-10 animate-float"
          style={parallax3.style}
        >
          <Leaf size={80} strokeWidth={1} />
        </div>
        <div
          className="absolute top-[60%] right-[15%] text-green-600 opacity-10 animate-float"
          style={{ ...parallax3.style, animationDelay: "1s" }}
        >
          <Leaf size={60} strokeWidth={1} />
        </div>
        <div
          className="absolute bottom-[20%] right-[30%] text-green-600 opacity-10 animate-float"
          style={{ ...parallax3.style, animationDelay: "2s" }}
        >
          <Leaf size={40} strokeWidth={1} />
        </div>
      </div>

      {/* Foreground Hero Content */}
      <div
        className="text-center relative z-10  max-700:hidden"
        style={{ opacity }}
      >
        <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] mt-[-60px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-[58%] -translate-y-1/2 w-[90vw] max-w-[900px] h-full relative">
            {/* Base Hand */}
            <img
              src="./parts/orange-hand.png"
              className="absolute top-1/2 left-1/2 w-[60vw] m:w-[50vw] max-w-[300px] -translate-x-1/2 -translate-y-1/2 sm:max-w-[350px] left-[48%]"
            />

            {/* Decorative Layers */}
            <img
              src="./parts/green-tree.png"
              className="absolute top-[58%] left-[54%] w-[32vw] sm:w-[30vw] max-w-[150px] sm:max-w-[185px] -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src="./parts/il.png"
              className="absolute top-[44%] left-[54%] w-[18vw] sm:w-[15vw] max-w-[80px] sm:max-w-[100px] -translate-x-1/2 -translate-y-1/2"
            />

            {/* l1 - EdTech */}
            <a
              href="#"
              className="absolute top-[51%] left-[44%] -translate-x-1/2 -translate-y-1/2 z-[100] group sm:left-[37%]"
            >
              <motion.img
                src="./parts/l1.png"
                className="w-[20vw] sm:w-[15vw] max-w-[60px] sm:max-w-[73px]"
                animate={{
                  filter: [
                    "drop-shadow(0 0 10px rgba(0,255,0,0.6))",
                    "drop-shadow(0 0 20px rgba(0,255,0,1))",
                    "drop-shadow(0 0 10px rgba(0,255,0,0.6))",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                EdTech
              </span>
            </a>

            {/* l2 - Brand Marketing */}
            <a
              href="#"
              className="absolute top-[28%] left-[55%] -translate-x-1/2 -translate-y-1/2 z-[100] group"
            >
              <motion.img
                src="./parts/l2.png"
                className="w-[10vw] sm:w-[8vw] max-w-[28px] sm:max-w-[35px]"
                animate={{
                  filter: [
                    "drop-shadow(0 0 10px rgba(255,0,255,0.6))",
                    "drop-shadow(0 0 20px rgba(255,0,255,1))",
                    "drop-shadow(0 0 10px rgba(255,0,255,0.6))",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                Brand Marketing
              </span>
            </a>

            {/* l3 - IT Services */}
            <a
              href="#"
              className="absolute top-[60%] left-[68%] -translate-x-1/2 -translate-y-1/2 z-[100] group sm:left-[69%] top-[60%]"
            >
              <motion.img
                src="./parts/l3.png"
                className="w-[14vw] sm:w-[12vw] max-w-[55px] sm:max-w-[65px]"
                animate={{
                  filter: [
                    "drop-shadow(0 0 10px rgba(0,200,255,0.6))",
                    "drop-shadow(0 0 20px rgba(0,200,255,1))",
                    "drop-shadow(0 0 10px rgba(0,200,255,0.6))",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                IT Services
              </span>
            </a>

            {/* Overlay Face and Title */}
            <img
              src="./parts/ol.png"
              className="absolute top-[46%] left-[56%] w-[50vw] sm:w-[45vw] max-w-[280px] sm:max-w-[330px] -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src="./parts/green-face.png"
              className="absolute top-[55%] left-[69%] w-[45vw] -translate-x-1/2 -translate-y-1/2 sm:w-[40vw] max-w-[250px] sm:max-w-[275px] left-[74%] "
            />
            <img
              src="./parts/title.png"
              className="absolute top-[98%] left-[58%] w-[80vw] sm:w-[70vw] max-w-[550px] -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
      {/* Mobile-only section */}
      <div className="hidden max-700:block">
        {" "}
        <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] mt-[-60px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-[58%] -translate-y-1/2 w-[90vw] max-w-[900px] h-full relative">
            {/* Base Hand */}
            <img
              src="./parts/orange-hand.png"
              className="absolute top-[50%] left-[47%] w-[60vw] sm:w-[50vw] max-w-[300px] sm:max-w-[350px] -translate-x-1/2 -translate-y-1/2"
            />

            {/* Decorative Layers */}
            <img
              src="./parts/green-tree.png"
              className="absolute top-[57%] left-[55%] w-[29vw] sm:w-[30vw] max-w-[150px] sm:max-w-[185px] -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src="./parts/il.png"
              className="absolute top-[45%] left-[54%] w-[18vw] sm:w-[15vw] max-w-[80px] sm:max-w-[100px] -translate-x-1/2 -translate-y-1/2"
            />

            {/* l1 - EdTech */}
            <a
              href="#"
              className="absolute top-[50%] left-[32%] -translate-x-1/2 -translate-y-1/2 z-[100] group"
            >
              <motion.img
                src="./parts/l1.png"
                className="w-[10vw] sm:w-[15vw] max-w-[60px] sm:max-w-[73px]"
                animate={{
                  filter: [
                    "drop-shadow(0 0 10px rgba(0,255,0,0.6))",
                    "drop-shadow(0 0 20px rgba(0,255,0,1))",
                    "drop-shadow(0 0 10px rgba(0,255,0,0.6))",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                EdTech
              </span>
            </a>

            {/* l2 - Brand Marketing */}
            <a
              href="#"
              className="absolute top-[34%] left-[53%] -translate-x-1/2 -translate-y-1/2 z-[100] group"
            >
              <motion.img
                src="./parts/l2.png"
                className="w-[5vw] sm:w-[8vw] max-w-[28px] sm:max-w-[35px]"
                animate={{
                  filter: [
                    "drop-shadow(0 0 10px rgba(255,0,255,0.6))",
                    "drop-shadow(0 0 20px rgba(255,0,255,1))",
                    "drop-shadow(0 0 10px rgba(255,0,255,0.6))",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                Brand Marketing
              </span>
            </a>

            {/* l3 - IT Services */}
            <a
              href="#"
              className="absolute top-[55%] left-[76%] -translate-x-1/2 -translate-y-1/2 z-[100] group"
            >
              <motion.img
                src="./parts/l3.png"
                className="w-[9vw] sm:w-[12vw] max-w-[55px] sm:max-w-[65px]"
                animate={{
                  filter: [
                    "drop-shadow(0 0 10px rgba(0,200,255,0.6))",
                    "drop-shadow(0 0 20px rgba(0,200,255,1))",
                    "drop-shadow(0 0 10px rgba(0,200,255,0.6))",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                IT Services
              </span>
            </a>

            {/* Overlay Face and Title */}
            <img
              src="./parts/ol.png"
              className="absolute top-[46%] left-[56%] w-[50vw] sm:w-[45vw] max-w-[280px] sm:max-w-[330px] -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src="./parts/green-face.png"
              className="absolute top-[54%] left-[78%] w-[45vw] sm:w-[40vw] max-w-[250px] m:max-w-[275px] -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src="./parts/title.png"
              className="absolute top-[98%] left-[58%] w-[80vw] sm:w-[70vw] max-w-[550px] -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
