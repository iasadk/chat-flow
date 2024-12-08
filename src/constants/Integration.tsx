import {
  Facebook,
  Twitter,
  Instagram,
  Slack,
  Github,
  Trello,
  DropletIcon as Dropbox,
  ChromeIcon as Google,
} from "lucide-react";

export type IntegrationTypes = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  connected: boolean;
};

export const initialIntegrations: IntegrationTypes[] = [
  {
    id: "1",
    name: "Facebook",
    description: "Connect your Facebook page",
    icon: <Facebook className="h-8 w-8" />,
    connected: false,
  },
  {
    id: "2",
    name: "Twitter",
    description: "Link your Twitter account",
    icon: <Twitter className="h-8 w-8" />,
    connected: false,
  },
  {
    id: "3",
    name: "Instagram",
    description: "Integrate with Instagram",
    icon: <Instagram className="h-8 w-8" />,
    connected: false,
  },
  {
    id: "4",
    name: "Slack",
    description: "Connect with your Slack workspace",
    icon: <Slack className="h-8 w-8" />,
    connected: false,
  },
  {
    id: "5",
    name: "GitHub",
    description: "Link your GitHub repositories",
    icon: <Github className="h-8 w-8" />,
    connected: false,
  },
  {
    id: "6",
    name: "Trello",
    description: "Integrate with Trello boards",
    icon: <Trello className="h-8 w-8" />,
    connected: false,
  },
  {
    id: "7",
    name: "Dropbox",
    description: "Connect your Dropbox account",
    icon: <Dropbox className="h-8 w-8" />,
    connected: false,
  },
  {
    id: "8",
    name: "Google",
    description: "Integrate with Google services",
    icon: <Google className="h-8 w-8" />,
    connected: false,
  },
];
