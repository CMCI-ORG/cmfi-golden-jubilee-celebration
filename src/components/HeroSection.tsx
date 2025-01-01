import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] md:h-screen w-full">
      <div 
        className="absolute inset-0 bg-[url('/lovable-uploads/97ec4257-b638-4373-98f1-7df27d8060bc.png')] 
        bg-cover bg-center bg-no-repeat bg-[#002B4C]
        h-full w-full"
        style={{
          backgroundPosition: 'center 25%',
          backgroundSize: 'cover',
        }}
      />
      <div className="absolute inset-0 hero-gradient" />
    </section>
  );
};

export default HeroSection;