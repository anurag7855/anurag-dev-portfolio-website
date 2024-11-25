import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const carouselData = [
  {
    role: "Full Stack Developer",
    description: "Building exceptional digital experiences with modern web technologies. Specializing in end-to-end application development.",
    image: "https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?q=80&w=1000&auto=format&fit=crop",
  },
  {
    role: "Graphic Designer",
    description: "Creating stunning visual experiences and brand identities. Transforming ideas into captivating designs.",
    image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1470&auto=format&fit=crop",
  },
  {
    role: "Software Developer",
    description: "Crafting efficient and scalable software solutions. Turning complex problems into elegant code.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div name="home" className="w-full h-screen relative overflow-hidden bg-[#0a0a0a]">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] opacity-90"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(25,25,25,0.8)_2px,transparent_2px),linear-gradient(90deg,rgba(25,25,25,0.8)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Main content */}
      <div className="max-w-screen-xl mx-auto px-4 h-full relative z-10">
        <div className="h-full flex flex-col items-center justify-center relative">
          {/* Text content */}
          <motion.div
            ref={ref}
            className="text-center mb-8 z-20 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <h2 className="text-4xl sm:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  {carouselData[currentSlide].role}
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  {carouselData[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 justify-center z-20">
              <Link 
                to="projects" 
                smooth 
                duration={300}
                spy={true}
                exact="true"
                offset={-80}
                className="inline-block"
              >
                <button className="group flex items-center gap-2 px-6 py-3 rounded-lg relative overflow-hidden">
                  {/* Button background with glassmorphism */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/80 to-teal-500/80 backdrop-blur-md rounded-lg"></div>
                  {/* Button content */}
                  <span className="relative text-white font-medium">View Work</span>
                  <span className="relative group-hover:rotate-90 duration-300 text-white">
                    <HiArrowNarrowRight />
                  </span>
                </button>
              </Link>

              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-teal-300 transition-all duration-300 hover:scale-110"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-teal-300 transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image carousel */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <div className="relative w-[95%] max-w-4xl mx-auto">
                  {/* Glassmorphism container */}
                  <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
                    {/* Background blur and gradient */}
                    <div className="absolute inset-0 backdrop-blur-sm bg-white/10"></div>
                    
                    {/* Image */}
                    <img
                      src={carouselData[currentSlide].image}
                      alt={carouselData[currentSlide].role}
                      className="w-full h-full object-cover opacity-80"
                    />
                    
                    {/* Overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/40"></div>
                    
                    {/* Glass border effect */}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20"></div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/50 via-teal-500/50 to-cyan-500/50"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/50 via-teal-500/50 to-emerald-500/50"></div>
                    <div className="absolute top-4 right-4 w-2 h-8 bg-gradient-to-b from-emerald-400/30 to-transparent rounded-full"></div>
                    <div className="absolute top-4 left-4 w-2 h-8 bg-gradient-to-b from-emerald-400/30 to-transparent rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? "w-8 bg-emerald-400" 
                    : "bg-gray-400/50 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
