import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TimelinePeriod from "./TimelinePeriod";
import { TimelinePeriodType } from "@/types/timeline";

interface TimelineAccordionProps {
  timelineData: TimelinePeriodType[];
}

const TimelineAccordion = ({ timelineData }: TimelineAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {timelineData.map((period, index) => (
        <AccordionItem
          key={period.era}
          value={period.era}
          className="border rounded-lg overflow-hidden bg-white shadow-sm"
        >
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <h3 className="text-2xl md:text-3xl font-playfair text-left">
              {period.era}
            </h3>
          </AccordionTrigger>
          <AccordionContent className="px-6">
            <TimelinePeriod
              era={period.era}
              events={period.events}
              index={index}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default TimelineAccordion;