import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0" 
        style={{
          background: `linear-gradient(45deg, #1A1F2C, #221F26)`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          opacity: 0.95
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255, 215, 0, 0.1) 50px, rgba(255, 215, 0, 0.1) 100px)`,
          backgroundSize: '141.42px 141.42px',
          backgroundPosition: 'center'
        }}
      />
      <div className="relative z-10 w-full px-4 md:container mx-auto text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 font-playfair px-2 uppercase"
        >
          CMFI Golden Jubilee
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto px-4 text-white/90"
        >
          "Praise the Lord! Praise Him for His acts of power; praise Him for His surpassing greatness"
          <span className="block mt-2 text-base md:text-lg text-white/80">- Psalm 150:2</span>
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;