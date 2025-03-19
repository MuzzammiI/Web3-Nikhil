import React, { useEffect, useState } from "react";

const News = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [trendingNews, setTrendingNews] = useState([]);
  const [topNews, setTopNews] = useState([]);
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
        );
        const data = await response.json();

        if (data && data.Data) {
          setLatestNews(data.Data.slice(0, 5));
          setTrendingNews(data.Data.slice(5, 10));
          setTopNews(data.Data.slice(10, 15));
        } else {
          console.error("Invalid response structure:", data);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleLike = (id) => {
    setLikes({ ...likes, [id]: (likes[id] || 0) + 1 });
  };

  const handleDislike = (id) => {
    setDislikes((prevDislikes) => ({
      ...prevDislikes,
      [id]: (prevDislikes[id] || 0) + 1, // Corrected syntax
    }));
  };
  

  const renderNewsCards = (news) => {
    return news.map((article) => (
      <a
        key={article.id}
        href={article.url} // Redirect to external news URL
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-black backdrop-blur-2xl p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"

      >
        <img
          src={article.imageurl}
          alt={article.title}
          className="w-full h-48 object-cover rounded-xl"
        />
        <h3 className="text-lg font-semibold mt-3 hover:text-blue-400 transition duration-300">
          {article.title}
        </h3>
        <p className="text-sm text-gray-400">{article.body.slice(0, 100)}...</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xs text-gray-500">{article.published_on}</span>
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent link navigation on button click
                handleLike(article.id);
              }}
              className="bg-green-600 px-3 py-1 text-xs rounded-lg hover:bg-green-700"
            >
              👍 {likes[article.id] || 0}
            </button>
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent link navigation on button click
                handleDislike(article.id);
              }}
              className="bg-red-600 px-3 py-1 text-xs rounded-lg hover:bg-red-700"
            >
              👎 {dislikes[article.id] || 0}
            </button>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <div className="bg-gray-900 text-white py-5 px-10">
      <h1 className="text-3xl font-bold text-center">Crypto News</h1>
      <div className="w-40 mx-auto mt-2 border-b-4 border-gradient"></div>

      <section className="mb-10 mt-6">
        <h2 className="text-xl font-semibold mb-3">Latest News</h2>
        <div className="grid md:grid-cols-3 gap-6">{renderNewsCards(latestNews)}</div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Trending News</h2>
        <div className="grid md:grid-cols-3 gap-6">{renderNewsCards(trendingNews)}</div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Top News</h2>
        <div className="grid md:grid-cols-3 gap-6">{renderNewsCards(topNews)}</div>
      </section>
    </div>
  );
};

export default News;
