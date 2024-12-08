import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Clock, MessageSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Automation } from "@/constants/Automation";

type Props = Automation & {};

const AutomationCard = ({id, type, status, name, description, triggers, lastRun}: Props) => {
    const getTypeIcon = (type: Automation['type']) => {
        switch (type) {
          case 'message':
            return <MessageSquare className="h-4 w-4" />
          case 'schedule':
            return <Clock className="h-4 w-4" />
          case 'audience':
            return <Users className="h-4 w-4" />
        }
      }
  return (
    <Card
      key={id}
      className="bg-[#003322] border-gray-800 hover:border-green-500/50 transition-colors cursor-pointer group"
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            {getTypeIcon(type)}
            <Badge
              variant={status === "active" ? "default" : "secondary"}
              className={
                status === "active" ? "bg-green-500" : "bg-gray-700"
              }
            >
              {status}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <CardTitle className="mt-3">{name}</CardTitle>
        <CardDescription className="text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-gray-400">
          <span>{triggers} triggers</span>
          {lastRun && <span>Last run: {lastRun}</span>}
        </div>
      </CardContent>
    </Card>
  );
};

export default AutomationCard;
