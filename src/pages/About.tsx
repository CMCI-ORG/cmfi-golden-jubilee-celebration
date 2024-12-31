import { motion } from "framer-motion";
import AboutMenu from "@/components/AboutMenu";
import PageBanner from "@/components/PageBanner";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageBanner 
        title="About CMFI Golden Jubilee" 
        subtitle="Celebrating 50 Years of Faith and Ministry"
      />
      
      <AboutMenu />

      <div className="container mx-auto px-4 py-8 space-y-16">
        <section id="overview">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p>Learn about our 50-year journey and the milestones we've achieved.</p>
        </section>
        <section id="story">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p>The history of CMFI since 1975, highlighting key events and transformations.</p>
        </section>
        <section id="celebration">
          <h2 className="text-2xl font-bold">Join the Celebration</h2>
          <p>Be part of our Golden Jubilee celebrations and events planned throughout the year.</p>
        </section>
      </div>
    </div>
  );
};

export default About;
