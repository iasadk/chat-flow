import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Bell } from "lucide-react";

const NotificationButton = () => {
  return (
    <>
      <Button variant="outline" className={cn("rounded-full w-10 h-10")}>
        <Bell />
      </Button>
    </>
  );
};

export default NotificationButton;
