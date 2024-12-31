import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Timeline = () => {
  const timelineData = [
    {
      era: "The Early Years (1945–1956)",
      events: [
        {
          year: "1945",
          title: "Birth",
          description: "Born on 20th June 1945 in Wumnembug Meta, Northwest Province of Cameroon, to Pa Solomon Fomum Tanee and Mama Rebecca Angum."
        },
        {
          year: "1956",
          title: "Salvation",
          description: "Received the Lord Jesus Christ after reading a tract entitled \"Someone died for you\" given by his father."
        }
      ]
    },
    {
      era: "Born Again, but with Mixed Ambitions (1957–1966)",
      events: [
        {
          year: "1960",
          title: "Early Education",
          description: "Began studies at Cameroon Protestant College, Bali, and participated in evangelism on Sundays."
        },
        {
          year: "1966",
          title: "Consecration",
          description: "1st October 1966: Made a total surrender to the Lord and His service, marking a significant spiritual turning point."
        }
      ]
    },
    {
      era: "Consecration and Ministry (1967–1976)",
      events: [
        {
          year: "1972",
          title: "Marriage and First Book",
          description: "Married Prisca Zei Fokam on 26th February 1972 in Kampala, Uganda. Published his first book: \"Discipleship at Any Cost.\""
        },
        {
          year: "1975",
          title: "Return to Cameroon",
          description: "Returned to Cameroon as a missionary on 11th May 1975. Preached to his first convert the next day. Held his first prayer night and wrote his first tract, \"How to Know Jesus.\""
        }
      ]
    },
    {
      era: "National Missionary in Cameroon (1977–1986)",
      events: [
        {
          year: "1979",
          title: "Church Planting",
          description: "The first house church was planted on 18th February 1979 in Sister Emilia Tendo's house in Obili, Yaoundé. Initiated fasting intercessions for Cameroon."
        },
        {
          year: "1982",
          title: "Discipleship",
          description: "The Lord instructed him to focus on making disciples and expand his vision globally."
        }
      ]
    },
    {
      era: "The Emergence of an International Leader (1987–1996)",
      events: [
        {
          year: "1987",
          title: "Long Fasting",
          description: "Carried out his first 40-day fast from 13th July to 21st August 1987."
        },
        {
          year: "1990",
          title: "Prayer Crusade",
          description: "Held a 51-day prayer crusade focusing on the direction of money in the ministry."
        },
        {
          year: "1991",
          title: "CMFI Official Name",
          description: "The work was officially named Christian Missionary Fellowship International (CMFI)."
        }
      ]
    },
    {
      era: "A Distinct Ministry (1997–2006)",
      events: [
        {
          year: "1997",
          title: "Global Prophecy",
          description: "Received the Colorado Springs Prophecy regarding the ministry's global impact."
        },
        {
          year: "1999",
          title: "Year of Jubilee",
          description: "Declared 1999 a year of Jubilee for the ministry. The number of believers in CMFI reached 35,000 across 37 countries."
        },
        {
          year: "2005",
          title: "DSc Award",
          description: "Received the Doctor of Science (DSc) from the University of Durham, Britain."
        }
      ]
    },
    {
      era: "Launching Phase Two of the Work (2007–2009)",
      events: [
        {
          year: "2007",
          title: "Supra-long Fast",
          description: "Carried out a 56-day supra-long fast for ministry direction."
        },
        {
          year: "2009",
          title: "Homegoing",
          description: "Went home to be with the Lord on 14th March 2009, completing a remarkable life of service."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-4xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-playfair">
          ZTF Timeline
        </h1>
        
        <div className="space-y-12">
          {timelineData.map((period, index) => (
            <motion.div
              key={period.era}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-playfair">
                    {period.era}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {period.events.map((event) => (
                    <div key={event.year} className="relative pl-8 border-l-2 border-primary/20">
                      <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-primary" />
                      <h3 className="text-xl font-bold mb-2">
                        {event.year}: {event.title}
                      </h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;