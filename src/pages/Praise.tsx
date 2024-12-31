import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import PraiseCard from "@/components/PraiseCard";
import { cn } from "@/lib/utils";

const PraiseContent = [
  {
    id: 1,
    title: "Praise God the Father",
    content: "Praise God the Father for His attributes and for His works: His works in creation, salvation, individuals, national and human history.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
  },
  {
    id: 2,
    title: "Praise our Lord Jesus Christ",
    content: "Praise our Lord and Saviour Jesus Christ! Proclaim His divine person and His works on behalf of men. Praise Him for His life, passion, death, resurrection, ascension, reign and imminent Kingdom on earth.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
  },
  {
    id: 3,
    title: "Praise the Holy Spirit",
    content: "Praise the Holy Spirit, the Lord, and the Giver of life, for His presence, power and work in the Godhead, and His work within man and in the church and in the world.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  },
  {
    id: 4,
    title: "Praise for Leadership",
    content: "Praise the Lord for raising ZTF as the leader and for all God entrusted to him and enabled him to do and accomplish for His glory. Praise the Lord for all that was accomplished during phase 1 of our work by ZTF and his team to serve the Lord. Praise the Lord for the prophetic directives given to our ministry through ZTF; that is a clear pathway for us to follow.",
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170"
  },
  {
    id: 5,
    title: "Praise for Ministry Growth",
    content: "Praise the Lord for in phase 1, He revealed the ministry, the work and the goal to the leader (ZTF) that He raised, disciplined and commissioned. Praise Him for our founding leader, who, serving as team leader with the other co-workers God had given him, planted and built a megachurch of 12,000 members in Yaoundé, planted churches in 1,300 localities with about 60,000 members in all the administrative regions of Cameroon, sent and backed 200 missionaries in over 60 nations on all the continents.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
  },
  {
    id: 6,
    title: "Praise for National Transformation",
    content: "Proclaim and praise God for the overthrow of the satanic principalities of Yaoundé, Douala and Cameroon and the glorious purposes of God for these cities and the nation. God has pledged to make Cameroon one of the loftiest of nations and the promised mineral wealth has begun to be discovered. What was prophecy is now a national fact and reality -that Cameroon is endowed with unusual mineral wealth.",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
  },
  {
    id: 7,
    title: "Praise for Global Change",
    content: "Proclaim and praise God for the overthrow of the satanic principality of communism and the total alteration of the geo-political and economic mapping of the world in our generation, the massive doors opened for the proclamation of the Gospel! and free worship in hitherto iron or bamboo curtains and nations. How great is our Lord!",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
  },
  {
    id: 8,
    title: "Praise for Spiritual Leadership",
    content: "Praise God for the unusual life and consecration of ZTF that have borne so much fruit in souls won to Christ, disciples made to our Lord Jesus Christ by his example and model, churches planted, a missionary movement begun, intercessory movements of prayer and fasting for the blessing of nations and the advancement of God's purposes in our generation, ministers and ministries raised for the Kingdom of God, and unusual spiritual leadership provided for our generation. Let us bow before the Lord and thank Him for raising a light and a model for many and for the nations.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
  },
  {
    id: 9,
    title: "Praise for Ministry Impact",
    content: "Praise God for the remarkable and extraordinary ministry of ZTF, the work done through prayer and fasting, the books and tracts written, produced and distributed all over the world for the salvation and blessing of multitudes, the media proclamation of the Gospel, the men, ministries and movements founded and built for the glory of God and the salvation of many, the funds raised and invested sacrificially into God's Kingdom and the prosperity it has brought to Cameroon and to many who have emulated his example, the apostolic statesmanship and contribution to God's total purpose by serving, teaching and ministering to other communities of God's people, etc.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
  },
  {
    id: 10,
    title: "Praise for Victory",
    content: "Proclaim, celebrate, and shout aloud the Lord's victory from Bamenda on the 13\" of March 2009. The three hosts and armies of wickedness that held over 75 per cent of the entire world (3.5 billion people) in spiritual captivity were dismantled. The spiritual obstacles on the road map to the accomplishment of the goal of our ministry have been cleared. ZTF has guaranteed the success of the goal. Hallelujah! The goal of our ministry will be accomplished. The soon-return of our Lord Jesus Christ is imminent. Maranatha!!!",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
  }
];

const Praise = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/5 to-background">
      <PageBanner />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-16 px-4 md:px-6"
      >
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-center mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
            Praise and Thanksgiving
          </h1>
          <p className="text-lg md:text-xl text-foreground/80">
            Join us in celebrating God's faithfulness and the remarkable journey of our ministry
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12 lg:gap-16">
          {PraiseContent.map((item, index) => (
            <PraiseCard
              key={item.id}
              {...item}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Praise;