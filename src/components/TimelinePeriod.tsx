import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TimelineEvent from "./TimelineEvent";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelinePeriodProps {
  era: string;
  events: TimelineEvent[];
  index: number;
}

const TimelinePeriod = ({ era, events, index }: TimelinePeriodProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-playfair">
            {era}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {events.map((event) => (
            <TimelineEvent
              key={`${event.year}-${event.title}`}
              year={event.year}
              title={event.title}
              description={event.description}
            />
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TimelinePeriod;