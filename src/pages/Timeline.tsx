import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import TimelinePeriod from "@/components/TimelinePeriod";

const Timeline = () => {
  const timelineData = [
    {
      era: "The Making of the Man (1945-1974)",
      events: [
        {
          year: "1945",
          title: "Birth",
          description: "Born on 20th June 1945 in Wumnembug Meta, Northwest Province of Cameroon, to Pa Solomon Fomum Tanee and Mama Rebecca Angum, who laid a godly foundation for his life."
        },
        {
          year: "1956",
          title: "Salvation",
          description: "Convicted of sin through his father's sermon 'You Must Be Born Again'. Read the tract 'Someone Died for You', received Christ, and immediately shared his faith with his best friend, Ruben, in a neighboring village."
        },
        {
          year: "1960-1965",
          title: "Secondary School Years",
          description: "Read the Bible from Genesis to Revelation before age 11. Evangelized regularly, preaching in and outside his school despite challenges, demonstrating a hunger for God's Word and developing a burden for souls."
        },
        {
          year: "1966",
          title: "University Beginning",
          description: "Started university in Sierra Leone on September 27th, 1966. Encountered Christ as the model for life, leading to radical repentance and absolute surrender. Became president of the Christian Union, influenced by Hans Burky, Joyce Chaplin, and Dr. Mike Oye."
        },
        {
          year: "1973",
          title: "Pentecost in Uganda",
          description: "Filled with the Holy Spirit, developed a distinct teaching ministry, and gained national recognition. Experienced a divine revelation about intercession, won over 500 souls, and received missionary commissioning from Bishop Festo Kivengere."
        }
      ]
    },
    {
      era: "Return and National Impact (1975-1977)",
      events: [
        {
          year: "1975",
          title: "Return to Cameroon",
          description: "Returned as a missionary with a prophetic word. Wrote 'How to Know Jesus' tract on his second day back. Preached 'You Must Be Born Again' at Presbyterian Church Djoungolo, leading to widespread conviction."
        },
        {
          year: "1976",
          title: "National Recognition",
          description: "Preached across all major denominations. Led the famous 'Evangelical Hurricane Storms Bamenda' crusade, earning the title 'Cameroon's Billy Graham'. Learned crucial lessons about denominational work through the Ngaoundéré experience."
        }
      ]
    },
    {
      era: "Church Planting and Growth (1978-1986)",
      events: [
        {
          year: "1978",
          title: "New Direction",
          description: "Excommunicated by the Presbyterian Church, launched house churches emphasizing one-on-one evangelism and personal discipleship. Every member became active in gospel preaching."
        },
        {
          year: "1978-1986",
          title: "Extensive Church Planting",
          description: "Led systematic church planting across Cameroon through trained evangelism teams, nightly prayer meetings, and holiday outreach programs. Developed the 'Way Series' teachings and trained national missionaries."
        },
        {
          year: "1986",
          title: "Ministry Independence",
          description: "Faced excommunication from Pentecostal denomination due to government pressure. Chose to pursue the gospel freely without denominational constraints."
        }
      ]
    },
    {
      era: "Discipleship and Formalization (1986-1994)",
      events: [
        {
          year: "1986-1994",
          title: "Divine Deliverance and Direction",
          description: "God delivered the ministry from denominational mixtures, providing clear direction. This defining period established the ministry's independence, allowing full pursuit of God's specific calling on Brother Zach and the community."
        },
        {
          year: "1986-1994",
          title: "Intensive Discipleship",
          description: "Selected 15 men and 22 women for intentional discipleship. Established weekly home meetings, accountability practices, and fasting disciplines. Distributed over 1 million books to Nigeria and thousands to India."
        },
        {
          year: "1994",
          title: "Church Structure",
          description: "Unified scattered groups under elder leadership, formalizing the church structure. Began systematic missionary sending after years of preparation."
        }
      ]
    },
    {
      era: "Global Impact and Legacy (1994-2009)",
      events: [
        {
          year: "1994-2000",
          title: "Missionary Expansion",
          description: "Led systematic missionary sending across Africa. Established mission bases in multiple nations while maintaining focus on discipleship and spiritual depth."
        },
        {
          year: "2000-2005",
          title: "Literature Ministry Growth",
          description: "Intensified writing ministry, producing numerous books and materials. Publications were translated into multiple languages and distributed globally, impacting millions of readers."
        },
        {
          year: "2005-2009",
          title: "Final Years of Ministry",
          description: "Focused on training next-generation leaders, establishing Bible schools, and strengthening the foundation of the ministry. Continued writing and teaching until his passing in March 2009."
        },
        {
          year: "March 13, 2009",
          title: "Victory Declaration",
          description: "A historic proclamation from Bamenda marked the dismantling of spiritual obstacles, clearing the path for ministry goals. This event signified a major turning point in the ministry's journey."
        }
      ]
    },
    {
      era: "New Leadership and Expansion (2009-2019)",
      events: [
        {
          year: "2009-2012",
          title: "Leadership Transition",
          description: "Brother Theodore assumed leadership after Brother Zach, receiving widespread acceptance and support from leaders and co-workers across the ministry."
        },
        {
          year: "2010",
          title: "Headquarters Dedication",
          description: "Dedication of the ministry headquarters in Koumé, followed by PROCCL 2012 which included the dedication of the Libreville worship and administrative facilities."
        },
        {
          year: "2012",
          title: "International Missionary Concertation",
          description: "Delegates from 45 nations gathered in Libreville for a two-week missionary conference, sharing testimonies and ministry reports."
        },
        {
          year: "December 2019",
          title: "CMFI 3rd World Convention",
          description: "A historic gathering of about 30,000 participants from 97 nations across 6 continents for 15 days in Koumé-Bertoua. This convention marked the completion of phase two and set the stage for phase 3 of the ministry's vision."
        },
        {
          year: "2019",
          title: "Unprecedented Growth",
          description: "Witnessed remarkable growth from 110,000 to around 6 million members. Notable expansion in the Garoua Spiritual Nation, growing from 1,300 to over one million members."
        }
      ]
    },
    {
      era: "Global Expansion and Revival (2020-Present)",
      events: [
        {
          year: "2020",
          title: "Phase 3 Launch",
          description: "Launched phase 3 with 3.1 million believers across 113 nations, meeting in 13,000 localities and 23,000 house churches."
        },
        {
          year: "2024",
          title: "Olympic Outreach",
          description: "Distributed one million copies of 'The Game of Life' across 400 French cities during the Olympic games. Ministry now present in 150 nations with 331 international and 1,300 national missionaries."
        },
        {
          year: "2024",
          title: "Abidjan Summit",
          description: "Strategic leadership summit in Abidjan setting future direction. Established prayer and fasting initiatives across the ministry."
        },
        {
          year: "2024-2029",
          title: "Five-Year Vision",
          description: "Set goal to reach 50-100 million believers in one million House Churches across 200 nations, with one million active discipleship leaders."
        },
        {
          year: "2065",
          title: "Long-term Vision",
          description: "Working towards the goal of 1 billion disciples meeting in 25 million house churches across 250 nations."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageBanner />
      <div className="py-12 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-playfair">
            The Chronicles of ZTF
          </h1>
          
          <div className="space-y-12">
            {timelineData.map((period, index) => (
              <TimelinePeriod
                key={period.era}
                era={period.era}
                events={period.events}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
