import React, { useState, useEffect } from "react";

const Trending = () => {
  const [coins, setCoins] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setGainers([...data].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h).slice(0, 5));
        setLosers([...data].sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h).slice(0, 5));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* Top Gainers & Losers */}
      <div className="md:w-2/3 bg-gray-900 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">Trending Coins</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Gainers */}
          <div>
            <h3 className="text-green-400 font-semibold">Top Gainers</h3>
            {gainers.map((coin) => (
              <div key={coin.id} className="flex justify-between p-2 bg-gray-800 rounded-lg my-1">
                <span>{coin.name}</span>
                <span className="text-green-400">+{coin.price_change_percentage_24h.toFixed(2)}%</span>
              </div>
            ))}
          </div>
          {/* Losers */}
          <div>
            <h3 className="text-red-400 font-semibold">Top Losers</h3>
            {losers.map((coin) => (
              <div key={coin.id} className="flex justify-between p-2 bg-gray-800 rounded-lg my-1">
                <span>{coin.name}</span>
                <span className="text-red-400">{coin.price_change_percentage_24h.toFixed(2)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-Time Coin Tracking */}
      <div className="md:w-1/3 bg-gray-900 p-6 rounded-xl shadow-lg h-[500px] overflow-y-auto">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">Real-Time Coin Prices</h2>
        {coins.map((coin) => (
          <div key={coin.id} className="flex justify-between p-2 bg-gray-800 rounded-lg my-1">
            <div className="flex items-center gap-2">
              <img src={coin.image} alt={coin.name} className="w-6 h-6" />
              <span>{coin.name}</span>
            </div>
            <span className="text-white">${coin.current_price.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
