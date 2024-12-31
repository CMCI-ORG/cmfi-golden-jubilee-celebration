import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageBanner from "@/components/PageBanner";

const Mission = () => {
  const movements = [
    { title: "Soul-Winning", description: "Evangelizing persistently and universally" },
    { title: "Church Planting", description: "Establishing local and house churches globally" },
    { title: "Disciple-Making", description: "Training individuals to obey Christ in all things" },
    { title: "Prayer", description: "Interceding for every aspect of the ministry and mission" },
    { title: "Fasting", description: "Waging spiritual battles and seeking God's favor" },
    { title: "Fasting Intercession", description: "Praying for cities, nations, and generations" },
    { title: "Revival and Holiness", description: "Deepening spiritual life and encouraging personal consecration" },
    { title: "Signs and Wonders", description: "Authenticating the Gospel through divine power" },
    { title: "Worship", description: "Exalting God for His works and purposes" },
    { title: "Missionary Work", description: "Advancing the Gospel locally and internationally" },
    { title: "Literature", description: "Creating and distributing materials that teach and inspire" },
    { title: "Church Growth", description: "Nurturing mega-churches and supra-churches for greater reach" }
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
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-playfair">
            Our Mission
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  Definition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The recurrent tasks and responsibilities needed to accomplish the vision.
                </p>
              </CardContent>
            </Card>

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
                      className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-lg font-semibold mb-2 text-primary">
                        {movement.title}
                      </h3>
                      <p className="text-sm text-gray-600">{movement.description}</p>
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