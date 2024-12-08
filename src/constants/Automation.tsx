export type Automation = {
    id: string;
    name: string;
    description: string;
    type: "message" | "schedule" | "audience";
    status: "active" | "inactive";
    triggers: number;
    lastRun?: string;
  };
  
export const initialAutomations: Automation[] = [
    {
      id: "1",
      name: "Welcome Message",
      description: "Sends a welcome message to new subscribers",
      type: "message",
      status: "active",
      triggers: 156,
      lastRun: "2 hours ago",
    },
    {
      id: "2",
      name: "Weekly Newsletter",
      description: "Scheduled newsletter every Monday",
      type: "schedule",
      status: "active",
      triggers: 52,
      lastRun: "3 days ago",
    },
    {
      id: "3",
      name: "Re-engagement Campaign",
      description: "Target inactive users after 30 days",
      type: "audience",
      status: "inactive",
      triggers: 89,
      lastRun: "1 week ago",
    },
  ];