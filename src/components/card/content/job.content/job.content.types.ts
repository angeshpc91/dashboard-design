interface Job {
  name: string;
  type: string;
  duration: string;
}

export interface JobContentProps {
  data: Job[];
}
