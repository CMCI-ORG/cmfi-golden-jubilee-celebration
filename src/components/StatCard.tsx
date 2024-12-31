import { motion } from "framer-motion";
import React from "react";

interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
  icon?: React.ReactNode;
}

const StatCard = ({ number, label, delay = 0, icon }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="stat-card"
    >
      {icon}
      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-primary">{number}</h3>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

export default StatCard;