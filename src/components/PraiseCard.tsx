import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PraiseCardProps {
  id: number;
  title: string;
  content: string;
  image: string;
  index: number;
}

const PraiseCard = ({ id, title, content, image, index }: PraiseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-primary/10 hover:border-primary/30 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent group-hover:from-primary/10 transition-colors duration-500" />
      
      {/* Number indicator */}
      <div className="absolute -left-4 top-4 w-16 h-16 flex items-center justify-center rotate-[-12deg]">
        <span className="text-5xl font-playfair font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary/80 to-primary/40">
          {String(id).padStart(2, '0')}
        </span>
      </div>

      <div className="relative p-8 md:p-10 space-y-6">
        <div className="pl-8">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            {content}
          </p>
        </div>

        <div className="relative h-48 md:h-64 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/40 transition-colors duration-500" />
          <img
            src={image}
            alt={`Illustration for ${title}`}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PraiseCard;