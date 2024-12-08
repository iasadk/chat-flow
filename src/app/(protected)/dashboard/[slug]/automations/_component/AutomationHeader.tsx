"use client";

import { Button } from "@/components/ui/button";
import { Pencil, Undo2, Redo2, Radio, Workflow } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface AutomationHeaderProps {
  title: string;
  isSaved?: boolean;
  onUndo?: () => void;
  onRedo?: () => void;
  onPreview?: () => void;
  onSetActive?: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
  className?: string;
}

export function AutomationHeader({
  title,
  isSaved = true,
  onUndo,
  onRedo,
  onPreview,
  onSetActive,
  canUndo = false,
  canRedo = false,
  className,
}: AutomationHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 h-14 bg-[#1a1a1a] border-b border-gray-800 rounded-full",
        className
      )}
    >
      {/* Left section */}
      <div className="flex items-center space-x-2 text-sm text-gray-300">
        <SidebarTrigger />
        <span className="hidden lg:inline-block">Automations</span>
        <Workflow className="lg:hidden w-8 h-8 xs:w-5 xs:h-5"/>
        <span className="text-gray-500">/</span>
        <span className="flex items-center">
          <p className="line-clamp-1">{title}</p>
          <button className="ml-2 hover:text-gray-100">
            <Pencil className="h-3.5 w-3.5" />
          </button>
        </span>
      </div>

      {/* Center section */}
      <div className="flex items-center space-x-4 ">
        {/* <span className="hidden lg:block text-sm text-gray-400">
          {isSaved ? "Changes Saved" : "Unsaved Changes"}
        </span> */}
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Button
            variant="ghost"
            size="sm"
            onClick={onUndo}
            disabled={!canUndo}
            className="h-8 px-2 text-gray-400 hover:text-gray-100 disabled:opacity-50"
          >
            <Undo2 className="h-3.5 w-3.5" />
            <span className="hidden lg:inline-block ml-1">Undo</span>
          </Button>
          <Separator orientation="vertical" className="h-4 bg-gray-700" />
          <Button
            variant="ghost"
            size="sm"
            onClick={onRedo}
            disabled={!canRedo}
            className="h-8 px-2 text-gray-400 hover:text-gray-100 disabled:opacity-50"
          >
            <Redo2 className="h-3.5 w-3.5" />
            <span className="hidden lg:inline-block ml-1">Redo</span>
          </Button>
        </div>
      </div>

      {/* Right section */}
      <div className="hidden lg:flex items-center space-x-3 ">
        <Button
          variant="outline"
          size="sm"
          onClick={onPreview}
          className="h-9 bg-white/5 border-gray-700 hover:bg-white/10 text-gray-200"
        >
          <Radio className="mr-2 h-4 w-4" />
          Preview
        </Button>
        <Button
          size="sm"
          onClick={onSetActive}
          className="h-9 bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          Set active
        </Button>
      </div>
    </div>
  );
}
