import { motion } from "framer-motion";

const PageBanner = () => {
  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full"
      >
        <img
          src="/lovable-uploads/d4136a8e-34fc-4112-ab92-a827833262e6.png"
          alt="CMFI Golden Jubilee Banner"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </section>
  );
};

export default PageBanner;