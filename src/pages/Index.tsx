import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center" />
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
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto px-4"
          >
            "Praise the Lord! Praise Him for His acts of power; praise Him for His surpassing greatness"
            <span className="block mt-2 text-base md:text-lg">- Psalm 150:2</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full px-2"
          >
            <CountdownTimer />
          </motion.div>
        </div>
      </section>

      {/* Jubilee Introduction Section */}
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
                  CELEBRATION OF CMFI GOLDEN JUBILEE
                </h2>
              </motion.div>
              <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
            </div>
            
            <div className="prose prose-lg mx-auto text-left space-y-6 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary/10">
              <p className="italic text-xl text-center !mt-0">
                Precious and beloved co-workers in the Lord,
              </p>
              <p className="text-center font-semibold">
                Praise the Lord! Let's celebrate the Lord.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic bg-primary/5 py-4 rounded-r-lg">
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

      {/* Statistics Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full px-4 md:container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 font-playfair px-2">
            50 Years of God's Faithfulness
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-2">
            <StatCard number="6M+" label="Believers Worldwide" delay={0.2} />
            <StatCard number="150+" label="Nations Reached" delay={0.4} />
            <StatCard number="331+" label="International Missionaries" delay={0.6} />
            <StatCard number="1300+" label="National Missionaries" delay={0.8} />
          </div>
        </div>
      </section>

      {/* Full Length Banner Section */}
      <section className="w-full py-12 md:py-20">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full"
          >
            <img
              src="/lovable-uploads/d4136a8e-34fc-4112-ab92-a827833262e6.png"
              alt="CMFI Golden Jubilee Banner"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Timeline Preview */}
      <section className="py-12 md:py-20 bg-white">
        <div className="w-full px-4 md:container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 font-playfair px-2">
            Our Journey
          </h2>
          <div className="relative max-w-2xl mx-auto px-2">
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
        <div className="w-full px-4 md:container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 font-playfair px-2">
            Testimonies of His Grace
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-2">
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