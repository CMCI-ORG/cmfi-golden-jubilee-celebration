import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";

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
      <section className="py-16 md:py-24 bg-white">
        <div className="w-full px-4 md:container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 font-playfair">
              CELEBRATION OF CMFI GOLDEN JUBILEE
            </h2>
            <div className="prose prose-lg mx-auto text-left space-y-6">
              <p className="italic text-xl text-center">
                Precious and beloved co-workers in the Lord,
              </p>
              <p className="text-center font-semibold">
                Praise the Lord! Let's celebrate the Lord.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic">
                "Come, let us bow down in worship, let us kneel before the Lord our Maker; for he is our God and we are the people of his pasture, the flock under his care" (Psalm 95:6-7).
              </blockquote>
              <p>
                The year 2025 marks a capstone (crowning achievement) of our ministry thus far: it is the 50th anniversary of our ministry. Praise the Lord! Praise the Lord!! Praise the Lord!!!
              </p>
              <p className="text-gray-700">
                Yes, it's soon 50 years since the arrival of Brother Zach in Cameroon on 11 May 1975, soon 50 years since the beginning of our ministry on 12 May 1975 through that historic prayer night and the writing of the evangelistic tract, "How to know the Lord Jesus".
              </p>
              <Link 
                to="/about" 
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors mt-8 mx-auto text-center"
              >
                Read More About Our Journey
              </Link>
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
            <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Explore Full Timeline
            </button>
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
        </div>
      </section>
    </div>
  );
};

export default Index;
