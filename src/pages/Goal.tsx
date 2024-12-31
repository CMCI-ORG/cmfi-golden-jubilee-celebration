import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageBanner from "@/components/PageBanner";

const Goal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageBanner />
      <div className="container mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-playfair">
            Our Goal
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
                  A goal is the measurable concretization of a vision, pursued without distraction.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  Our Main Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="bg-primary/5 p-4 rounded-lg">
                    To labor to bring 1 billion disciples to render total obedience to Christ by 2065
                  </li>
                  <li className="bg-primary/5 p-4 rounded-lg">
                    Establish 25 million house churches as organic family units of discipleship
                  </li>
                  <li className="bg-primary/5 p-4 rounded-lg">
                    Contribute to hastening the coming of Christ through a critical mass of obedient disciples
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  Key Aspects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Proclamation of the Gospel</h4>
                    <p className="text-sm text-gray-600">
                      Touch every person alive with the Gospel in its fullness
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Discipleship</h4>
                    <p className="text-sm text-gray-600">
                      Produce converts who obey Jesus in all aspects of life
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Structure</h4>
                    <p className="text-sm text-gray-600">
                      Organize into house churches suitable for personal spiritual growth and accountability
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Overflow</h4>
                    <p className="text-sm text-gray-600">
                      Spur revival and global spiritual awakening
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  Personal Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Each member defines their contribution to this collective goal based on 
                  their specific gifts and calling.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Goal;