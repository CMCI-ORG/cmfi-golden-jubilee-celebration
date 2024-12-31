import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageBanner from "@/components/PageBanner";
import { Users, Building2, Globe2, UserCheck, HomeIcon, Church, MapPin, Users2 } from "lucide-react";

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
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 font-playfair">
            Our Work
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            What we must do in individuals, localities, nations, and the world
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <Card className="bg-primary/5 hover:bg-primary/10 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl font-playfair text-primary">
                    In Individuals
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Putting on Christ</h4>
                      <p className="text-sm text-gray-600">Conforming to His likeness</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users2 className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Following Christ</h4>
                      <p className="text-sm text-gray-600">Adopting His attitudes and behaviors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe2 className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Witnessing for Christ</h4>
                      <p className="text-sm text-gray-600">Sharing Him through word and deed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 hover:bg-primary/10 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl font-playfair text-primary">
                    In Localities
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Church className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-gray-600">
                        Establish churches as light in the community.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                        <li>Churches function as families of God</li>
                        <li>Helpers of Christ in His mission</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 hover:bg-primary/10 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl font-playfair text-primary">
                    In Nations
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Apostolic planting of churches nationwide, mirroring the work in Yaoundé.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 hover:bg-primary/10 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <HomeIcon className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl font-playfair text-primary">
                    Worker Roles
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Church className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">In Churches</h4>
                      <p className="text-sm text-gray-600">
                        Everyone works according to their gifts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">In the Work</h4>
                      <p className="text-sm text-gray-600">
                        Apostles and their teams lead, with local churches partnering in support
                      </p>
                    </div>
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