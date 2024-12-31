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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
      role="article"
      aria-label={`Testimonial from ${author}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`}
            alt={`${author}'s avatar`}
            width="48"
            height="48"
            loading="lazy"
            className="rounded-full bg-gray-100"
          />
        </div>
        <div>
          <blockquote className="text-gray-700 mb-4">"{quote}"</blockquote>
          <footer>
            <cite className="not-italic">
              <span className="font-semibold block">{author}</span>
              <span className="text-gray-500 text-sm">{location}</span>
            </cite>
          </footer>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;