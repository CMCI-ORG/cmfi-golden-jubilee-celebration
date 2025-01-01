import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-start pt-32">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/97ec4257-b638-4373-98f1-7df27d8060bc.png')] bg-cover bg-center bg-[#002B4C]" />
      <div className="absolute inset-0 hero-gradient" />
    </section>
  );
};

export default HeroSection;