import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const location = useLocation();
  
  const aboutMenuItems = [
    {
      title: "Vision",
      path: "/vision"
    },
    {
      title: "Goal",
      path: "/goal"
    },
    {
      title: "Ministry",
      path: "/ministry"
    },
    {
      title: "Work",
      path: "/work"
    },
    {
      title: "Mission",
      path: "/mission"
    }
  ];

  const MenuItems = ({ isMobile = false }) => (
    <NavigationMenuList className={isMobile ? "flex flex-col space-y-2" : ""}>
      <NavigationMenuItem>
        <Link to="/">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem className={isMobile ? "w-full" : ""}>
        <NavigationMenuTrigger className={isMobile ? "w-full justify-start" : ""}>
          About
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className={`grid gap-3 p-6 ${isMobile ? "w-[90vw]" : "w-[400px]"}`}>
            <Link
              to="/about"
              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              <div className="text-sm font-medium leading-none">About Us</div>
            </Link>
            {aboutMenuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="text-sm font-medium leading-none">{item.title}</div>
              </Link>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/timeline">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Timeline
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/testimonials">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Testimonials
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/praise">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Praise
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/contact">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  );

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/898700da-8392-44a4-a09b-56242d2feeae.png" 
            alt="CMFI Golden Jubilee Logo" 
            className="h-8 w-auto"
          />
        </Link>
        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <MenuItems />
            </NavigationMenu>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[350px] pt-10">
                <NavigationMenu className="block w-full">
                  <MenuItems isMobile={true} />
                </NavigationMenu>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;