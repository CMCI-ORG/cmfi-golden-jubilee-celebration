import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import CMFIMenu from "./CMFIMenu";

const Navigation = () => {
  const location = useLocation();
  
  const MenuItems = () => (
    <NavigationMenuList>
      <NavigationMenuItem>
        <Link to="/">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </Link>
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
        <Link to="/contact">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Contact
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
        <Link to="/about">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            About
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
          <CMFIMenu />
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
              <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
                <NavigationMenu className="block">
                  <MenuItems />
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