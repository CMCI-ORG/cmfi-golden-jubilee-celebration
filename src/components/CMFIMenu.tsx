import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"

const CMFIMenu = () => {
  const menuItems = [
    {
      title: "Vision",
      path: "/vision",
      description: "The totality of what God has revealed to us as His will"
    },
    {
      title: "Goal",
      path: "/goal",
      description: "A measurable concretization of the vision"
    },
    {
      title: "Ministry",
      path: "/ministry",
      description: "All that God has given us to accomplish the vision"
    },
    {
      title: "Work",
      path: "/work",
      description: "What we must do in individuals, localities, and nations"
    },
    {
      title: "Mission",
      path: "/mission",
      description: "The recurrent tasks needed to accomplish the vision"
    }
  ]

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary/90">
            CMFI
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[400px]">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">{item.title}</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default CMFIMenu