import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IntegrationTypes } from "@/constants/Integration";

type Props = IntegrationTypes & {
  handleConnect: (id: string) => void;
};

const IntegrationCard = ({
  id,
  icon,
  name,
  description,
  connected,
  handleConnect,
}: Props) => {
  return (
    <Card key={id}>
      <CardHeader>
        <div className="flex items-center space-x-4">
          {icon}
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 min-h-16">
          {connected
            ? "This integration is currently active."
            : "Connect this integration to enhance your dashboard."}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          variant={connected ? "destructive" : "default"}
          onClick={() => handleConnect(id)}
        >
          {connected ? "Disconnect" : "Connect"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IntegrationCard;
