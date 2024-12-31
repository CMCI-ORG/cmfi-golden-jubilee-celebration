import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import PageBanner from "@/components/PageBanner";

const Vision = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageBanner />
      
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Vision</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The totality of what God has revealed to us as His will
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-playfair font-semibold mb-4">Definition</h2>
                <p className="text-lg leading-relaxed">
                  The vision is the totality of what God has revealed to us as His will. It is the guiding revelation for our ministry, given by God, seen by us, and embraced in obedience.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-playfair font-semibold mb-4">Key Insights</h2>
                <ul className="list-disc list-inside space-y-3 text-lg">
                  <li>Vision grows and must be clarified regularly to avoid drifting.</li>
                  <li>A vision is received as revelation and obeyed, not conceived by human intellect.</li>
                  <li>Example: Abraham's vision of descendants (earthly and spiritual) guided his faith and actions.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-playfair font-semibold mb-4">Reflection Practice</h2>
                <p className="text-lg leading-relaxed">
                  As individuals and as a ministry, we regularly revisit the vision, redefining our role in God's unfolding plan.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Card className="bg-primary/5">
              <CardContent className="p-6">
                <h2 className="text-2xl font-playfair font-semibold mb-4">Our Vision Today</h2>
                <p className="text-lg leading-relaxed">
                  To be like Christ in being, doing, and possessing, and to lead individuals, localities, nations, and generations to the same, that the earth may be filled with the knowledge of God.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Vision;