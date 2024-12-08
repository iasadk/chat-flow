"use client";
import { initialIntegrations, IntegrationTypes } from "@/constants/Integration";
import { useState } from "react";
import IntegrationCard from "./_component/IntegrationCard";

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
          <IntegrationCard
            key={integration.id}
            id={integration.id}
            name={integration.name}
            description={integration.description}
            connected={integration.connected}
            handleConnect={handleConnect}
            icon={integration.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Integrations;
