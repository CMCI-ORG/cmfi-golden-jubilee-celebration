import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  delay?: number;
}

const TestimonialCard = ({ quote, author, location, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="testimonial-card"
      role="listitem"
      aria-label={`Testimonial from ${author}`}
    >
      <p className="text-lg md:text-xl mb-6 italic text-gray-700" role="text">
        {quote}
      </p>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-gray-500">{location}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;