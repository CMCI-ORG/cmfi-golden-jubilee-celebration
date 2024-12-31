import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageBanner from "@/components/PageBanner";
import {
  Users,
  Church,
  GraduationCap,
  Hand,
  Timer,
  Globe2,
  Flame,
  Sparkles,
  Music2,
  Plane,
  BookOpen,
  TreePine
} from "lucide-react";

const Mission = () => {
  const movements = [
    { 
      title: "Soul-Winning", 
      description: "Evangelizing persistently and universally",
      icon: Users
    },
    { 
      title: "Church Planting", 
      description: "Establishing local and house churches globally",
      icon: Church
    },
    { 
      title: "Disciple-Making", 
      description: "Training individuals to obey Christ in all things",
      icon: GraduationCap
    },
    { 
      title: "Prayer", 
      description: "Interceding for every aspect of the ministry and mission",
      icon: Hand
    },
    { 
      title: "Fasting", 
      description: "Waging spiritual battles and seeking God's favor",
      icon: Timer
    },
    { 
      title: "Fasting Intercession", 
      description: "Praying for cities, nations, and generations",
      icon: Globe2
    },
    { 
      title: "Revival and Holiness", 
      description: "Deepening spiritual life and encouraging personal consecration",
      icon: Flame
    },
    { 
      title: "Signs and Wonders", 
      description: "Authenticating the Gospel through divine power",
      icon: Sparkles
    },
    { 
      title: "Worship", 
      description: "Exalting God for His works and purposes",
      icon: Music2
    },
    { 
      title: "Missionary Work", 
      description: "Advancing the Gospel locally and internationally",
      icon: Plane
    },
    { 
      title: "Literature", 
      description: "Creating and distributing materials that teach and inspire",
      icon: BookOpen
    },
    { 
      title: "Church Growth", 
      description: "Nurturing mega-churches and supra-churches for greater reach",
      icon: TreePine
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageBanner />
      <div className="container mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 font-playfair">
            Our Mission
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            The recurrent tasks and responsibilities needed to accomplish the vision
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  Core Movements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {movements.map((movement, index) => (
                    <motion.div
                      key={movement.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col items-center text-center">
                        <movement.icon className="w-12 h-12 mb-4 text-primary" strokeWidth={1.5} />
                        <h3 className="text-lg font-semibold mb-2 text-primary">
                          {movement.title}
                        </h3>
                        <p className="text-sm text-gray-600">{movement.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  Unified Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  These movements drive every individual and collective effort, ensuring 
                  sustained progress toward the goal.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Mission;
