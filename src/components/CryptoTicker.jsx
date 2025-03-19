import React, { useEffect, useState } from "react";

const CryptoTicker = () => {
  const [coins, setCoins] = useState([
    // Placeholder data to prevent blank state on load
    { id: "btc", symbol: "BTC", current_price: 50000, price_change_percentage_24h: 2, image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
    { id: "eth", symbol: "ETH", current_price: 3500, price_change_percentage_24h: -1, image: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
    { id: "bnb", symbol: "BNB", current_price: 400, price_change_percentage_24h: 0.5, image: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png" }
  ]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
        );
        const data = await response.json();
        setCoins(data); // Replace the state with new data instead of appending
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCoins(); // Initial fetch
    const interval = setInterval(fetchCoins, 30000); // Fetch every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black py-2 overflow-hidden">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {[...coins, ...coins].map((coin, index) => ( // Duplicating items for smooth looping
            <div key={index} className="ticker-item">
              <img src={coin.image} alt={coin.name} className="w-6 h-6" />
              <span className="font-semibold">{coin.symbol.toUpperCase()}</span>
              <span>${coin.current_price.toFixed(2)}</span>
              <span
                className={`${
                  coin.price_change_percentage_24h >= 0
                    ? "text-green-500"
                    : "text-red-500"
                } font-medium`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for Infinite Scrolling */}
      <style>
        {`
          .ticker-wrapper {
            display: flex;
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
          }
          
          .ticker-content {
            display: flex;
            width: max-content;
            animation: marquee 50s linear infinite;
          }

          .ticker-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 0 20px;
            color: white;
          }

          @keyframes marquee {
            from { transform: translateX(0%); }
            to { transform: translateX(-50%); } /* Moves only half, ensuring a loop */
          }
        `}
      </style>
    </div>
  );
};

export default CryptoTicker;
