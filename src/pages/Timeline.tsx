import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import TimelineAccordion from "@/components/TimelineAccordion";
import { timelineData } from "@/data/timelineData";

const Timeline = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageBanner />
      <div className="py-12 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-playfair">
            The Chronicles of ZTF
          </h1>
          
          <TimelineAccordion timelineData={timelineData} />
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;