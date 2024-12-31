import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageBanner from "@/components/PageBanner";
import {
  Megaphone,
  Users,
  Home,
  Sparkles
} from "lucide-react";

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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative bg-primary/5 p-6 rounded-lg text-center">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <p className="mt-4 font-semibold">1 Billion Disciples</p>
                    <p className="text-sm text-gray-600 mt-2">by 2065</p>
                  </div>
                  <div className="relative bg-primary/5 p-6 rounded-lg text-center">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <p className="mt-4 font-semibold">25 Million House Churches</p>
                    <p className="text-sm text-gray-600 mt-2">organic discipleship units</p>
                  </div>
                  <div className="relative bg-primary/5 p-6 rounded-lg text-center">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <p className="mt-4 font-semibold">Hasten Christ's Coming</p>
                    <p className="text-sm text-gray-600 mt-2">through obedient disciples</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  Key Aspects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 border rounded-lg flex flex-col items-center text-center">
                    <Megaphone className="w-12 h-12 mb-4 text-primary" strokeWidth={1.5} />
                    <h4 className="font-semibold mb-2">Proclamation of the Gospel</h4>
                    <p className="text-sm text-gray-600">
                      Touch every person alive with the Gospel in its fullness
                    </p>
                  </div>
                  <div className="p-6 border rounded-lg flex flex-col items-center text-center">
                    <Users className="w-12 h-12 mb-4 text-primary" strokeWidth={1.5} />
                    <h4 className="font-semibold mb-2">Discipleship</h4>
                    <p className="text-sm text-gray-600">
                      Produce converts who obey Jesus in all aspects of life
                    </p>
                  </div>
                  <div className="p-6 border rounded-lg flex flex-col items-center text-center">
                    <Home className="w-12 h-12 mb-4 text-primary" strokeWidth={1.5} />
                    <h4 className="font-semibold mb-2">Structure</h4>
                    <p className="text-sm text-gray-600">
                      Organize into house churches suitable for personal spiritual growth and accountability
                    </p>
                  </div>
                  <div className="p-6 border rounded-lg flex flex-col items-center text-center">
                    <Sparkles className="w-12 h-12 mb-4 text-primary" strokeWidth={1.5} />
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