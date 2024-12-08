"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import IntegrationCard from "./_component/IntegrationCard";

export type IntegrationTypes = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  connected: boolean;
};

const initialIntegrations: IntegrationTypes[] = [
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

const Integrations = () => {
  const [integrations, setIntegrations] =
    useState<IntegrationTypes[]>(initialIntegrations);
  const [searchTerm, setSearchTerm] = useState("");

  const handleConnect = (id: string) => {
    setIntegrations(
      integrations.map((integration) =>
        integration.id === id
          ? { ...integration, connected: !integration.connected }
          : integration
      )
    );
  };

  const filteredIntegrations = integrations.filter((integration) =>
    integration.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      {/* <div className="mb-6">
        <Label htmlFor="search">Search Integrations</Label>
        <Input
          id="search"
          placeholder="Search for an integration..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.map((integration) => (
          <IntegrationCard key={integration.id} id={integration.id} name={integration.name} description={integration.description} connected={integration.connected} handleConnect={handleConnect} icon={integration.icon}/>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
