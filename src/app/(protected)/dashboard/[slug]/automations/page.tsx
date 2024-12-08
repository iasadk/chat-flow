"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import AutomationCard from "./_component/AutomationCard";
import { Automation, initialAutomations } from "@/constants/Automation";
import Link from "next/link";
import { getRedirectLinkWithUser } from "@/lib/utils";

export default function Automations() {
  const [automations, setAutomations] =
    useState<Automation[]>(initialAutomations);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAutomations = automations.filter((automation) =>
    automation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full bg-background text-white p-6">
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search automations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-[#003322] border-gray-800 text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAutomations.map((automation) => (
          <Link href={getRedirectLinkWithUser(`automations/${automation.id}`)}>
            <AutomationCard
              key={automation.id}
              id={automation.id}
              name={automation.name}
              description={automation.description}
              status={automation.status}
              triggers={automation.triggers}
              type={automation.type}
              lastRun={automation.lastRun}
            />
          </Link>
        ))}
      </div>

      {filteredAutomations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">
            No automations found. Try a different search term.
          </p>
        </div>
      )}
    </div>
  );
}
