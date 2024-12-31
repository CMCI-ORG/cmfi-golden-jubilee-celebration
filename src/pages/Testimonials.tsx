import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import TestimonialCard from "@/components/TestimonialCard";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Testimonial submitted!",
      description: "Thank you for sharing your story with us.",
    });
  };

  return (
    <div className="container py-12" role="main" aria-label="Testimonials Page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-playfair font-bold text-center mb-8" id="testimonials-title">Testimonials</h1>
        <p className="text-center text-muted-foreground mb-12" id="testimonials-description">
          Stories of faith, transformation, and grace from our global community
        </p>

        <div className="grid gap-8 mb-16" role="list" aria-label="Testimonials list">
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

        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-playfair font-semibold text-center mb-6" id="share-story-title">
            Share Your Story
          </h2>
          <form 
            onSubmit={handleSubmit} 
            className="max-w-xl mx-auto space-y-4"
            role="form"
            aria-labelledby="share-story-title"
          >
            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <Input 
                id="name"
                placeholder="Your Name" 
                required 
                aria-required="true"
                aria-label="Your name"
              />
            </div>
            <div>
              <label htmlFor="location" className="sr-only">Your Location</label>
              <Input 
                id="location"
                placeholder="Your Location" 
                required 
                aria-required="true"
                aria-label="Your location"
              />
            </div>
            <div>
              <label htmlFor="experience" className="sr-only">Your Experience</label>
              <Textarea 
                id="experience"
                placeholder="Share your experience with CMFI..."
                className="min-h-[150px]"
                required 
                aria-required="true"
                aria-label="Share your experience"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full"
              aria-label="Submit testimonial"
            >
              Submit Your Testimonial
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;