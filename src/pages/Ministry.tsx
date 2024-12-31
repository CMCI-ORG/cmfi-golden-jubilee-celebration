import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageBanner from "@/components/PageBanner";

const Ministry = () => {
  const ministryComponents = [
    { title: "Models", description: "Exemplary lives that inspire and guide others in the faith" },
    { title: "Missionaries", description: "Sent ones who pioneer and sustain the work of the Gospel" },
    { title: "Men", description: "Leaders and workers committed to fulfilling God's purposes" },
    { title: "Ministries", description: "Specialized gifts for targeted aspects of the work" },
    { title: "Miracles", description: "Manifestations of God's power that authenticate the message" },
    { title: "Message", description: "The Gospel and teaching unique to our calling" },
    { title: "Materials", description: "Tools like books, tracts, and digital media for spreading the Word" },
    { title: "Means", description: "Resources like radio, internet, and technology for outreach" },
    { title: "Methods", description: "Practices like prayer, fasting, and church planting" },
    { title: "Missions", description: "Focused undertakings that advance the ministry" },
    { title: "Movements", description: "Systematic efforts like intercession, church growth, and literature distribution" },
    { title: "More", description: "Future provisions from God to fulfill His purposes" }
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
            Our Ministry
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
                  All that God has given us and all we have acquired to accomplish the vision and goal.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  Core Components (The 12 Ms)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ministryComponents.map((component, index) => (
                    <motion.div
                      key={component.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-lg font-semibold mb-2 text-primary">
                        {component.title}
                      </h3>
                      <p className="text-sm text-gray-600">{component.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  Ministry in Practice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From discipleship to book production, each element serves the overarching vision.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Ministry;