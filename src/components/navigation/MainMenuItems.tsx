import { Link, useLocation } from "react-router-dom";
import { Home, Info, Clock, MessageSquare, Music, Mail } from "lucide-react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SheetClose } from "@/components/ui/sheet";
import { AboutMenuItems } from "./AboutMenuItems";
import { cn } from "@/lib/utils";

interface MainMenuItemsProps {
  isMobile?: boolean;
}

export const MainMenuItems = ({ isMobile = false }: MainMenuItemsProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const HomeMenuItem = () => {
    const isActive = currentPath === "/";
    const content = (
      <Link to="/">
        <NavigationMenuLink 
          className={cn(
            navigationMenuTriggerStyle(), 
            isMobile ? "w-full justify-start" : "",
            isActive && "bg-accent text-accent-foreground"
          )}
        >
          <Home className="w-4 h-4 mr-2" />
          Home
        </NavigationMenuLink>
      </Link>
    );

    return isMobile ? <SheetClose asChild>{content}</SheetClose> : content;
  };

  const AboutMenu = () => {
    const isAboutSection = ["/about", "/vision", "/goal", "/ministry", "/work", "/mission"].includes(currentPath);
    return (
      <>
        <NavigationMenuTrigger 
          className={cn(
            isMobile ? "w-full justify-start" : "",
            isAboutSection && "bg-accent text-accent-foreground"
          )}
        >
          <Info className="w-4 h-4 mr-2" />
          About
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className={`grid gap-1 p-4 ${isMobile ? "w-[90vw]" : "w-[200px]"}`}>
            {isMobile ? (
              <SheetClose asChild>
                <Link
                  to="/about"
                  className={cn(
                    "flex items-center space-x-2 select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    currentPath === "/about" && "bg-accent text-accent-foreground"
                  )}
                >
                  <Info className="w-4 h-4" />
                  <div className="text-sm font-medium leading-none">About Us</div>
                </Link>
              </SheetClose>
            ) : (
              <Link
                to="/about"
                className={cn(
                  "flex items-center space-x-2 select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                  currentPath === "/about" && "bg-accent text-accent-foreground"
                )}
              >
                <Info className="w-4 h-4" />
                <div className="text-sm font-medium leading-none">About Us</div>
              </Link>
            )}
            <AboutMenuItems isMobile={isMobile} currentPath={currentPath} />
          </div>
        </NavigationMenuContent>
      </>
    );
  };

  const RegularMenuItem = ({ path, icon, label }: { path: string; icon: JSX.Element; label: string }) => {
    const isActive = currentPath === path;
    const content = (
      <Link to={path}>
        <NavigationMenuLink 
          className={cn(
            navigationMenuTriggerStyle(), 
            isMobile ? "w-full justify-start" : "",
            isActive && "bg-accent text-accent-foreground"
          )}
        >
          {icon}
          {label}
        </NavigationMenuLink>
      </Link>
    );

    return isMobile ? <SheetClose asChild>{content}</SheetClose> : content;
  };

  return (
    <>
      <NavigationMenuItem className={isMobile ? "w-full" : ""}>
        <HomeMenuItem />
      </NavigationMenuItem>
      <NavigationMenuItem className={isMobile ? "w-full" : ""}>
        <AboutMenu />
      </NavigationMenuItem>
      {[
        { path: "/timeline", icon: <Clock className="w-4 h-4 mr-2" />, label: "Timeline" },
        { path: "/testimonials", icon: <MessageSquare className="w-4 h-4 mr-2" />, label: "Testimonials" },
        { path: "/praise", icon: <Music className="w-4 h-4 mr-2" />, label: "Praise" },
        { path: "/contact", icon: <Mail className="w-4 h-4 mr-2" />, label: "Contact" }
      ].map((item) => (
        <NavigationMenuItem key={item.path} className={isMobile ? "w-full" : ""}>
          <RegularMenuItem {...item} />
        </NavigationMenuItem>
      ))}
    </>
  );
};