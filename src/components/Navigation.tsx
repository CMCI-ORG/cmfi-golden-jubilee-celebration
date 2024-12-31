import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import CMFIMenu from "./CMFIMenu";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/799235f2-59ff-49e5-b108-fc3f92c39503.png" 
            alt="CMFI Golden Jubilee Logo" 
            className="h-8 w-auto"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <CMFIMenu />
          <NavigationMenu>
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
                    ZTF Timeline
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
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;