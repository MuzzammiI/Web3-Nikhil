import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Trending from "./Trending";
import AirdropSection from "./Airdrops/AirdropSection";
import Web3BlockchainSection from "../components/Web3BlockchainSection";

const Home = () => {
  const [showHero, setShowHero] = useState(true);
  const [news, setNews] = useState([]);
  const [likes, setLikes] = useState({});

  //------for hero section---------

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

//------for news section---------

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN");
        const data = await response.json();
        if (data && data.Data) {
          setNews(data.Data.slice(0, 5)); // Fetch top 10 news articles
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  const handleLike = (index) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [index]: prevLikes[index] ? prevLikes[index] + 1 : 1,
    }));
  };

  return (
    <>
    <Web3BlockchainSection/>
    <div className="text-white bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <AnimatePresence>
        {showHero && (
          <motion.div
            className="text-center py-20 bg-gradient-to-r block from-yellow-500 to-red-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold">🚀 Welcome to CryptoHub</h1>
            <p className="mt-2 text-lg">
              Your One-Stop Destination for Crypto Trends, Airdrops & More!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trending Coins Section */}
      <motion.section
        className="py-10 container mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">🔥 Trending Coins</h2>
        <Trending />
      </motion.section>

      {/* Airdrop Section */}
      <motion.section
        className="py-10 container mx-auto bg-gray-800 rounded-lg p-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">🎁 Latest Airdrops</h2>
        <AirdropSection />
      </motion.section>

      {/* Crypto News Section - Horizontal Scroll */}
      <motion.section
        className="py-6 container mx-auto bg-gray-800 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-center mb-4">📰 Latest Crypto News</h2>

        <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide snap-x snap-mandatory">
          {news.length > 0 ? (
            news.map((article, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-md w-72  snap-start">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 font-semibold font-nano"
                >
                  {article.title}
                </a>
                <p className="text-gray-300 text-sm">{article.source_info.name}</p>
                <div className="flex space-x-4 mt-2">
                  <button
                    onClick={() => handleLike(index)}
                    className="text-green-400"
                  >
                    👍 {likes[index] || 0}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-300">Fetching latest news...</p>
          )}
        </div>
      </motion.section>
    </div>
    </>
  );
};

export default Home;
