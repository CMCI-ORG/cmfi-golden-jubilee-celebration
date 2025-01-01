import { motion } from "framer-motion";

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
}

const TimelineEvent = ({ year, title, description }: TimelineEventProps) => {
  return (
    <div className="relative pl-8 border-l-2 border-primary/30">
      <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
      <h3 className="text-xl font-bold mb-2">
        <span className="text-primary">{year}:</span> {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TimelineEvent;