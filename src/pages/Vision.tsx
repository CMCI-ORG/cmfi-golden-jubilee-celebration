import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageBanner from "@/components/PageBanner";

const Vision = () => {
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
            Our Vision
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
                  The vision is the totality of what God has revealed to us as His will. 
                  It is the guiding revelation for our ministry, given by God, seen by us, 
                  and embraced in obedience.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  Key Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Vision grows and must be clarified regularly to avoid drifting.</li>
                  <li>A vision is received as revelation and obeyed, not conceived by human intellect.</li>
                  <li>Example: Abraham's vision of descendants (earthly and spiritual) guided his faith and actions.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  Our Vision Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <p className="text-lg font-medium text-center">
                    To be like Christ in being, doing, and possessing, and to lead individuals, 
                    localities, nations, and generations to the same, that the earth may be 
                    filled with the knowledge of God.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  Reflection Practice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  As individuals and as a ministry, we regularly revisit the vision, 
                  redefining our role in God's unfolding plan.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;