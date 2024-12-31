import { motion } from "framer-motion";
import { ArrowRight, Heart, Star, Calendar, MapPin, Book } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Our Journey of Faith</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">50 Years of God's Faithfulness</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg mx-auto"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <p className="text-xl italic text-center mb-8">
                  "Lord, You establish peace for us; all that we have accomplished, you have done for us" (Isaiah 26:12)
                </p>
                <p className="mb-6">
                  Yes, it's soon 50 years since the arrival of Brother Zach in Cameroon on 11 May 1975, soon 50 years since the beginning of our ministry on 12 May 1975 through that historic prayer night and the writing of the evangelistic tract, "How to know the Lord Jesus". The Lord has been faithful towards His servant Brother Zach and towards our entire community in the course of the past 50 years. Glory be to His excellent name.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                  <div className="flex items-start space-x-4">
                    <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Historic Beginning</h3>
                      <p className="text-gray-600">May 11, 1975 - The arrival that marked the beginning of a great movement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Global Impact</h3>
                      <p className="text-gray-600">From Cameroon to the nations, spreading the message of hope</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl mt-8">
                <h2 className="text-2xl font-bold mb-6">Join Our Celebration</h2>
                <p className="mb-6">
                  Please, join us in this praise and celebration feast. Plan and carry out aggressive and exaggerated mighty deeds in the area of your gifts and talents (soul-winning, church-planting, disciple-making, giving, service, love, praise, etc.) as an offering of gratitude to the Lord.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="flex items-start space-x-4">
                    <Star className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Year of Gratitude</h3>
                      <p className="text-gray-600">Let's make 2025 the year of gratitude to the Lord in CMFI</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Heart className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Praise Sieges</h3>
                      <p className="text-gray-600">Join us in lifting sieges of praise and thanksgiving</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl mt-8">
                <h2 className="text-2xl font-bold mb-6">Our Vision Forward</h2>
                <p>
                  Let us lift up sieges and sieges and sieges of thanksgiving and praise to Him. Let's sound the trumpets and mobilise the saints for this celebration. Localities and nations that already have praise nights should increase them to praise sieges of 24 hours: either once a year, or every six months, or every trimester, or every two months, or every month according to the overflow of gratitude.
                </p>
                <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-lg font-semibold text-center">
                    Ivory Coast has committed itself to give us more than 1,000 praise sieges of 24 hours during the 365 days in 2025.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;