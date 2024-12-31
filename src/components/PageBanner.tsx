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
          src="/lovable-uploads/f8eceeae-8da7-40ab-a857-660c9ee2afc0.png"
          alt="CMFI Golden Jubilee Banner"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </section>
  );
};

export default PageBanner;