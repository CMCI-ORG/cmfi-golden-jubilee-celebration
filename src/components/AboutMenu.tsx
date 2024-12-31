import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Book, Calendar, Heart } from "lucide-react";
import React from "react";

const AboutMenu = () => {
  return (
    <NavigationMenu className="max-w-full w-full justify-start mb-8">
      <NavigationMenuList className="flex-col md:flex-row space-y-2 md:space-y-0">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-primary/5 w-full md:w-auto">
            <Book className="mr-2 h-4 w-4" />
            Overview
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-col justify-end w-full h-full p-6 no-underline outline-none focus:shadow-md bg-primary/5 rounded-lg"
                    href="#overview"
                  >
                    <div className="mb-2 text-lg font-medium">
                      CMFI Golden Jubilee
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Celebrating 50 years of God's faithfulness and ministry impact
                      since 1975.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-primary/5 w-full md:w-auto">
            <Calendar className="mr-2 h-4 w-4" />
            Our Story
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-col justify-end w-full h-full p-6 no-underline outline-none focus:shadow-md bg-primary/5 rounded-lg"
                    href="#story"
                  >
                    <div className="mb-2 text-lg font-medium">
                      A Journey of Faith
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      From the historic beginning in Cameroon to a global ministry
                      impacting nations.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-primary/5 w-full md:w-auto">
            <Heart className="mr-2 h-4 w-4" />
            Join the Celebration
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-col justify-end w-full h-full p-6 no-underline outline-none focus:shadow-md bg-primary/5 rounded-lg"
                    href="#celebration"
                  >
                    <div className="mb-2 text-lg font-medium">
                      Be Part of History
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Join us in praise sieges and celebrations throughout 2025 as
                      we mark this milestone.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default AboutMenu;