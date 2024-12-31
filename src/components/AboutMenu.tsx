import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Info, BookOpen, Users } from "lucide-react";

const AboutMenu = () => {
  const menuItems = [
    {
      title: "Overview",
      icon: <Info className="w-4 h-4" />,
      href: "#overview",
      description: "Learn about our 50-year journey",
    },
    {
      title: "Our Story",
      icon: <BookOpen className="w-4 h-4" />,
      href: "#story",
      description: "The history of CMFI since 1975",
    },
    {
      title: "Join the Celebration",
      icon: <Users className="w-4 h-4" />,
      href: "#celebration",
      description: "Be part of our Golden Jubilee",
    },
  ];

  return (
    <NavigationMenu className="max-w-2xl mx-auto my-6">
      <NavigationMenuList className="flex-wrap justify-center gap-2">
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuTrigger className="flex items-center gap-2">
              {item.icon}
              {item.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-[220px]">
                <Link 
                  to={item.href}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">{item.title}</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default AboutMenu;