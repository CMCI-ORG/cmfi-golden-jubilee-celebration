import { motion } from "framer-motion";
import { PageBanner } from "@/components/PageBanner";

const PraiseContent = [
  {
    id: 1,
    content: "Praise God the Father for His attributes and for His works: His works in creation, salvation, individuals, national and human history.",
    image: "/lovable-uploads/photo-1618160702438-9b02ab6515c9"
  },
  {
    id: 2,
    content: "Praise our Lord and Saviour Jesus Christ! Proclaim His divine person and His works on behalf of men. Praise Him for His life, passion, death, resurrection, ascension, reign and imminent Kingdom on earth.",
    image: "/lovable-uploads/photo-1721322800607-8c38375eef04"
  },
  // ... Add all 25 content blocks with alternating images
];

const Praise = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageBanner 
        title="Praise Reports" 
        subtitle="Let us praise and thank the Lord as follows"
      />
      
      <div className="container mx-auto py-12 px-4">
        {PraiseContent.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8 mb-16 items-center`}
          >
            <div className="flex-1 space-y-4">
              <div className="text-lg leading-relaxed text-foreground">
                {item.content}
              </div>
            </div>
            <div className="flex-1">
              <img
                src={item.image}
                alt={`Illustration for praise point ${item.id}`}
                className="rounded-lg shadow-xl w-full h-[300px] object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Praise;