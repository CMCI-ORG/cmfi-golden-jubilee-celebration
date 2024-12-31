import { motion } from "framer-motion";

interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
}

const StatCard = ({ number, label, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="stat-card"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">{number}</h3>
      <p className="text-gray-600 text-lg">{label}</p>
    </motion.div>
  );
};

export default StatCard;