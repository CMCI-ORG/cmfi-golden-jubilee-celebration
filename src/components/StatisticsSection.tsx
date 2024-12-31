import React from 'react';
import StatCard from './StatCard';
import { Users, Globe2, UserCheck, Users2 } from 'lucide-react';

const StatisticsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full px-4 md:container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 font-playfair px-2">
          50 Years of God's Faithfulness
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-2">
          <StatCard 
            number="6M+" 
            label="Believers Worldwide" 
            delay={0.2}
            icon={<Users className="w-8 h-8 text-primary mb-4" />}
          />
          <StatCard 
            number="150+" 
            label="Nations Reached" 
            delay={0.4}
            icon={<Globe2 className="w-8 h-8 text-primary mb-4" />}
          />
          <StatCard 
            number="331+" 
            label="International Missionaries" 
            delay={0.6}
            icon={<UserCheck className="w-8 h-8 text-primary mb-4" />}
          />
          <StatCard 
            number="1300+" 
            label="National Missionaries" 
            delay={0.8}
            icon={<Users2 className="w-8 h-8 text-primary mb-4" />}
          />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;