import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import TestimonialCard from "@/components/TestimonialCard";
import { useState } from "react";

const testimonials = [
  {
    quote: "The CMFI has been a beacon of light in my spiritual journey for over two decades. The transformation I've witnessed is truly miraculous.",
    author: "John Smith",
    location: "New York, USA"
  },
  {
    quote: "Being part of this 50-year journey has been an incredible blessing. The impact on communities worldwide is immeasurable.",
    author: "Maria Rodriguez",
    location: "Mexico City, Mexico"
  },
  {
    quote: "The teachings and guidance have helped shape not just my faith, but my entire approach to life and service.",
    author: "David Chen",
    location: "Singapore"
  }
];

const Testimonials = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Testimonial submitted!",
      description: "Thank you for sharing your story with us. Your testimonial will be reviewed and published soon.",
      duration: 5000,
    });
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="container py-12 px-4 md:px-6" role="main" aria-label="Testimonials Page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4" id="testimonials-title">
            Testimonials
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" id="testimonials-description">
            Stories of faith, transformation, and grace from our global community
          </p>
        </header>

        <div 
          className="grid gap-8 md:gap-10" 
          role="list" 
          aria-label="Testimonials list"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              delay={index * 0.2}
            />
          ))}
        </div>

        <section 
          className="bg-muted/50 rounded-xl p-6 md:p-10 shadow-sm"
          aria-labelledby="share-story-title"
        >
          <h2 
            className="text-2xl md:text-3xl font-playfair font-semibold text-center mb-8" 
            id="share-story-title"
          >
            Share Your Story
          </h2>
          <form 
            onSubmit={handleSubmit} 
            className="max-w-xl mx-auto space-y-6"
            role="form"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              <Input 
                id="name"
                placeholder="Enter your full name" 
                required 
                aria-required="true"
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-medium">
                Your Location
              </label>
              <Input 
                id="location"
                placeholder="City, Country" 
                required 
                aria-required="true"
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="experience" className="text-sm font-medium">
                Your Experience
              </label>
              <Textarea 
                id="experience"
                placeholder="Share your journey and experience with CMFI..."
                className="min-h-[150px] resize-y"
                required 
                aria-required="true"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-11 text-base"
              disabled={isSubmitting}
              aria-label="Submit testimonial"
            >
              {isSubmitting ? "Submitting..." : "Submit Your Testimonial"}
            </Button>
          </form>
        </section>
      </motion.div>
    </div>
  );
};

export default Testimonials;