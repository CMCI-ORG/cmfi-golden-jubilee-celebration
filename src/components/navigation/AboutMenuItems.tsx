import { Link } from "react-router-dom";
import { Target, Flag, Users, BookOpen, Award } from "lucide-react";
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export const aboutMenuItems = [
  {
    title: "Vision",
    path: "/vision",
    icon: <Target className="w-4 h-4 mr-2" />
  },
  {
    title: "Goal",
    path: "/goal",
    icon: <Flag className="w-4 h-4 mr-2" />
  },
  {
    title: "Ministry",
    path: "/ministry",
    icon: <Users className="w-4 h-4 mr-2" />
  },
  {
    title: "Work",
    path: "/work",
    icon: <BookOpen className="w-4 h-4 mr-2" />
  },
  {
    title: "Mission",
    path: "/mission",
    icon: <Award className="w-4 h-4 mr-2" />
  }
];

interface AboutMenuItemsProps {
  isMobile?: boolean;
  currentPath?: string;
}

export const AboutMenuItems = ({ isMobile = false, currentPath = "" }: AboutMenuItemsProps) => {
  const MenuItem = ({ item }: { item: typeof aboutMenuItems[0] }) => {
    const isActive = currentPath === item.path;
    const content = (
      <Link
        to={item.path}
        className={cn(
          "flex items-center space-x-2 select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          isActive && "bg-accent text-accent-foreground"
        )}
      >
        {item.icon}
        <div className="text-sm font-medium leading-none">{item.title}</div>
      </Link>
    );

    return isMobile ? <SheetClose asChild>{content}</SheetClose> : content;
  };

  return (
    <>
      {aboutMenuItems.map((item) => (
        <MenuItem key={item.title} item={item} />
      ))}
    </>
  );
};