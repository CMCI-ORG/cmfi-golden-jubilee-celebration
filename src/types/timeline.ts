export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface TimelinePeriodType {
  era: string;
  events: TimelineEvent[];
}