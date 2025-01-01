import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";
import StatisticsSection from "@/components/StatisticsSection";
import HeroSection from "@/components/HeroSection";
import BibleVerseSection from "@/components/BibleVerseSection";
import IntroductionSection from "@/components/IntroductionSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BibleVerseSection />
      <IntroductionSection />
      <StatisticsSection />

      {/* Full Length Banner Section */}
      <section className="w-full py-12 md:py-20">
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-7xl mx-auto px-4"
          >
            <img
              src="/lovable-uploads/e3360e05-0c8d-4e8b-a28c-64a8ca29e0a6.png"
              alt="CMFI Golden Jubilee Banner"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Timeline Preview */}
      <section className="py-12 md:py-20 bg-white">
        <div className="w-full px-4 md:container mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 font-playfair">
            Our Journey
          </h2>
          <div className="relative max-w-2xl w-full">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0 md:ml-[50%] pb-12"
            >
              <div className="absolute left-0 md:left-0 transform md:-translate-x-1/2 mt-1">
                <div className="timeline-dot" />
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">1975</h3>
                <p className="text-gray-600">Brother Zach's arrival marked the beginning of a powerful movement of God.</p>
              </div>
            </motion.div>
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/timeline" 
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all hover:gap-4 group"
            >
              Explore Full Timeline
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-4 md:container mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 font-playfair">
            Testimonies of His Grace
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl w-full">
            <TestimonialCard
              quote="Through CMFI, I discovered my calling to missions. Today, I serve in Asia, witnessing God's transformative power."
              author="Sarah Chen"
              location="Southeast Asia"
              delay={0.2}
            />
            <TestimonialCard
              quote="The teachings and discipleship at CMFI completely transformed my understanding of walking with God."
              author="James Mwangi"
              location="Kenya"
              delay={0.4}
            />
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/testimonials" 
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all hover:gap-4 group"
            >
              Read More Testimonials
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;