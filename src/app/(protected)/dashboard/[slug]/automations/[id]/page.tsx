"use client";

import { useState } from "react";
import { AutomationHeader } from "../_component/AutomationHeader";
import { TriangleAlert } from "lucide-react";
import Trigger from "../_component/triggers";

type Props = {
  params: { id: string };
};
export default function AutomationPage({ params }: Props) {
  const [canUndo, setCanUndo] = useState(true);
  const [canRedo, setCanRedo] = useState(false);
  const [isSaved, setIsSaved] = useState(true);

  const handleUndo = () => {
    setCanRedo(true);
    // Add your undo logic here
  };

  const handleRedo = () => {
    // Add your redo logic here
  };

  const handlePreview = () => {
    // Add your preview logic here
  };

  const handleSetActive = () => {
    // Add your set active logic here
  };

  return (
    <div className="">
      <AutomationHeader
        title="Direct traffic towards website"
        isSaved={isSaved}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onPreview={handlePreview}
        onSetActive={handleSetActive}
        canUndo={canUndo}
        canRedo={canRedo}
      />
      <div className="flex flex-col items-center gap-y-20 my-16 p-4">
        <div className="w-full lg:w-10/12 xl:6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
          <div className="flex gap-x-2">
            <TriangleAlert />
            When....
          </div>
          <Trigger id={params.id} />
        </div>
      </div>
      {/* Rest of your automation editor content */}
    </div>
  );
}
