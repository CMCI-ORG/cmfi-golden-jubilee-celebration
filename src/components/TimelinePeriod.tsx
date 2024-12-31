import { motion } from "framer-motion";
import TimelineEvent from "./TimelineEvent";
import { TimelineEvent as TimelineEventType } from "@/types/timeline";

interface TimelinePeriodProps {
  era: string;
  events: TimelineEventType[];
  index: number;
}

const TimelinePeriod = ({ events, index }: TimelinePeriodProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-6 py-4"
    >
      {events.map((event) => (
        <TimelineEvent
          key={`${event.year}-${event.title}`}
          year={event.year}
          title={event.title}
          description={event.description}
        />
      ))}
    </motion.div>
  );
};

export default TimelinePeriod;