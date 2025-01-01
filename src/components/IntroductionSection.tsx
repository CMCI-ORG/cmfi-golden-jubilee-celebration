import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const IntroductionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2" />
      <div className="w-full px-4 md:container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-playfair bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                CMFI GOLDEN JUBILEE
              </h2>
            </motion.div>
            <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
          </div>
          
          <div className="prose prose-lg mx-auto text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary/10">
            <p className="italic text-xl !mt-0">
              Precious and beloved co-workers in the Lord,
            </p>
            <p className="font-semibold">
              Praise the Lord! Let's celebrate the Lord.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic bg-primary/5 py-4 rounded-r-lg text-left">
              "Come, let us bow down in worship, let us kneel before the Lord our Maker; for he is our God and we are the people of his pasture, the flock under his care" (Psalm 95:6-7).
            </blockquote>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg"
            >
              The year 2025 marks a capstone (crowning achievement) of our ministry thus far: it is the 50th anniversary of our ministry. Praise the Lord! Praise the Lord!! Praise the Lord!!!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-700"
            >
              Yes, it's soon 50 years since the arrival of Brother Zach in Cameroon on 11 May 1975, soon 50 years since the beginning of our ministry on 12 May 1975 through that historic prayer night and the writing of the evangelistic tract, "How to know the Lord Jesus".
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all hover:gap-4 group"
              >
                Read More About Our Journey
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroductionSection;