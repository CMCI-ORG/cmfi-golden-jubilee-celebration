import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageBanner from "@/components/PageBanner";

const Work = () => {
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
            Our Work
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
                  What we must do in individuals, localities, nations, and the world.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  In Individuals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Putting on Christ</h4>
                    <p className="text-sm text-gray-600">Conforming to His likeness</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Following Christ</h4>
                    <p className="text-sm text-gray-600">Adopting His attitudes and behaviors</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Witnessing for Christ</h4>
                    <p className="text-sm text-gray-600">Sharing Him through word and deed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  In Localities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Establish churches as light in the community.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Churches function as families of God</li>
                  <li>Helpers of Christ in His mission</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  In Nations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Apostolic planting of churches nationwide, mirroring the work in Yaoundé.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  Worker Roles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">In Churches</h4>
                    <p className="text-sm text-gray-600">
                      Everyone works according to their gifts
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">In the Work</h4>
                    <p className="text-sm text-gray-600">
                      Apostles and their teams lead, with local churches partnering in support
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;