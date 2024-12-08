"use client";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Workflow } from "lucide-react";
import React from "react";
import Loader from "../loader";

const AutomationButton = () => {
  const isMobile = useIsMobile();
  console.log(isMobile);
  return (
    <>
      <Button
        className={cn({
          "rounded-full w-10 h-10": isMobile,
          "rounded-lg": !isMobile,
        })}
      >
        <Loader state={false}>
          <Workflow />
          {!isMobile && <span>Create Automaion</span>}
        </Loader>
      </Button>
    </>
  );
};

export default AutomationButton;
