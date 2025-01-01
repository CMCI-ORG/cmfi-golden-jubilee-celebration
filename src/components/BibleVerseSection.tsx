import { motion } from "framer-motion";

const BibleVerseSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#002B4C] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90">
            "Praise the Lord! Praise Him for His acts of power; praise Him for His surpassing greatness"
            <span className="block mt-2 text-base md:text-lg text-white/80">- Psalm 150:2</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BibleVerseSection;