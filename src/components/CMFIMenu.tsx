import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CMFIMenu = () => {
  const menuItems = [
    {
      title: "Vision",
      content: {
        definition: "The totality of what God has revealed to us as His will. It is the guiding revelation for our ministry, given by God, seen by us, and embraced in obedience.",
        keyPoints: [
          "Vision grows and must be clarified regularly to avoid drifting",
          "A vision is received as revelation and obeyed, not conceived by human intellect",
          "Example: Abraham's vision of descendants guided his faith and actions",
        ],
        mainVision: "To be like Christ in being, doing, and possessing, and to lead individuals, localities, nations, and generations to the same, that the earth may be filled with the knowledge of God."
      }
    },
    {
      title: "Goal",
      content: {
        definition: "A goal is the measurable concretization of a vision, pursued without distraction.",
        mainGoals: [
          "Labor to bring 1 billion disciples to render total obedience to Christ by 2065",
          "Establish 25 million house churches as organic family units of discipleship",
          "Contribute to hastening the coming of Christ through obedient disciples"
        ],
        keyAspects: [
          "Proclamation of the Gospel to every person",
          "Discipleship producing fully obedient converts",
          "House church structure for growth",
          "Revival and global spiritual awakening"
        ]
      }
    },
    {
      title: "Ministry",
      content: {
        definition: "All that God has given us and all we have acquired to accomplish the vision and goal.",
        coreComponents: [
          "Models: Exemplary lives that inspire",
          "Missionaries: Sent ones pioneering work",
          "Men: Committed leaders and workers",
          "Ministries: Specialized spiritual gifts",
          "Miracles: God's power manifestation",
          "Message: Unique Gospel teaching",
          "Materials: Books and media tools",
          "Means: Technology for outreach",
          "Methods: Prayer and fasting practices",
          "Missions: Focused undertakings",
          "Movements: Systematic ministry efforts",
          "More: Future divine provisions"
        ]
      }
    },
    {
      title: "Work",
      content: {
        definition: "What we must do in individuals, localities, nations, and the world.",
        focusAreas: [
          {
            title: "In Individuals",
            points: [
              "Transform into Christ's disciples",
              "Conform to His likeness",
              "Adopt His attitudes",
              "Share Him through word and deed"
            ]
          },
          {
            title: "In Localities",
            points: [
              "Establish churches as community light",
              "Function as God's family",
              "Help fulfill Christ's mission"
            ]
          },
          {
            title: "In Nations",
            points: [
              "Plant churches nationwide",
              "Mirror Yaoundé's work",
              "Build kingdom bases"
            ]
          }
        ]
      }
    },
    {
      title: "Mission",
      content: {
        definition: "The recurrent tasks and responsibilities needed to accomplish the vision.",
        movements: [
          "Soul-Winning: Universal evangelism",
          "Church Planting: Global establishment",
          "Disciple-Making: Total obedience training",
          "Prayer: Comprehensive intercession",
          "Fasting: Spiritual warfare",
          "Revival and Holiness: Spiritual deepening",
          "Signs and Wonders: Gospel authentication",
          "Worship: Exalting God's purposes",
          "Missionary Work: Global advancement",
          "Literature: Teaching materials",
          "Church Growth: Expanding reach"
        ]
      }
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
            <ScrollArea className="h-[500px] w-[800px] p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4"
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="text-xl font-playfair text-primary">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-gray-600 italic">
                          {item.content.definition}
                        </p>
                        {item.content.mainVision && (
                          <div className="bg-primary/5 p-3 rounded-lg">
                            <p className="text-sm font-medium">{item.content.mainVision}</p>
                          </div>
                        )}
                        {item.content.mainGoals && (
                          <ul className="list-disc list-inside space-y-2">
                            {item.content.mainGoals.map((goal, i) => (
                              <li key={i} className="text-sm">{goal}</li>
                            ))}
                          </ul>
                        )}
                        {item.content.coreComponents && (
                          <div className="grid grid-cols-2 gap-2">
                            {item.content.coreComponents.map((component, i) => (
                              <div key={i} className="text-xs bg-gray-50 p-2 rounded">
                                {component}
                              </div>
                            ))}
                          </div>
                        )}
                        {item.content.focusAreas && (
                          <div className="space-y-3">
                            {item.content.focusAreas.map((area, i) => (
                              <div key={i} className="space-y-1">
                                <h4 className="text-sm font-semibold">{area.title}</h4>
                                <ul className="list-disc list-inside">
                                  {area.points.map((point, j) => (
                                    <li key={j} className="text-xs">{point}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                        {item.content.movements && (
                          <div className="grid grid-cols-2 gap-2">
                            {item.content.movements.map((movement, i) => (
                              <div key={i} className="text-xs bg-gray-50 p-2 rounded">
                                {movement}
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollArea>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default CMFIMenu