import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-start pt-32">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/97ec4257-b638-4373-98f1-7df27d8060bc.png')] bg-cover bg-center bg-[#002B4C]" />
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative z-10 w-full px-4 md:container mx-auto text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 font-playfair px-2 uppercase"
        >
          CMFI Golden Jubilee
        </motion.h1>
      </div>
    </section>
  );
};

export default HeroSection;