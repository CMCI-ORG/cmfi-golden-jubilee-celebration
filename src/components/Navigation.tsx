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
            src="/lovable-uploads/45a7fd89-8c1d-4899-b50a-ddf08fa910fb.png" 
            alt="CMFI Golden Jubilee Logo" 
            className="h-10 w-auto"
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
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;