import { useState, useEffect } from 'react';
import { FaBitcoin, FaBook, FaMoneyBillWave, FaSearch } from 'react-icons/fa';

const web3Data = {
  topLeft: {
    title: 'Web3 Blockchain Technology',
    description: 'Stay informed with our blog section dedicated to future technology.',
    icon: <FaBitcoin className="w-8 h-8 text-yellow-400" />,
  },
  bottomLeft: {
    title: 'Research Insights Blogs',
    description: 'Dive deep into future tech concepts with our research section.',
    icon: <FaBook className="w-8 h-8 text-yellow-400" />,
  },
  topRight: [
    {
      title: 'Web3 Projects',
      description: 'Over 1,000+ articles on emerging trends and breakthroughs.',
    },
    {
      title: 'Token & Coin Listing',
      description: 'Articles cover fields like AI, robotics, biotechnology, and more.',
    },
    {
      title: 'NFT Marketplace',
      description: 'Written by our team of tech experts and industry professionals.',
    },
    {
      title: 'Web3 & Blockchain News',
      description: '500+ research articles for in-depth understanding.',
    },
  ],
  bottomRight: [
    {
      title: 'Funding Announcements',
      description: 'Explore emerging trends in future technology.',
      icon: <FaMoneyBillWave className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: 'Project Discovery',
      description: 'Contributions from tech researchers and academics.',
      icon: <FaSearch className="w-8 h-8 text-yellow-400" />,
    },
  ],
};

const Web3BlockchainSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate data fetch with a delay
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setData(web3Data);
      } catch (error) {
        console.error('Error fetching web3 data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (Top Left and Bottom Left) */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            {/* Top Left Card */}
            {loading ? (
              <div className="bg-gray-800 rounded-lg p-6 animate-pulse h-64">
                <div className="w-8 h-8 bg-gray-700 rounded-full mb-4 blur-sm"></div>
                <div className="w-3/4 h-6 bg-gray-700 rounded mb-2 blur-sm"></div>
                <div className="w-full h-4 bg-gray-700 rounded blur-sm"></div>
              </div>
            ) : (
              <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between h-64">
                <div>
                  {data?.topLeft.icon && <div className="mb-4">{data.topLeft.icon}</div>}
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {data?.topLeft.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">{data?.topLeft.description}</p>
                </div>
              </div>
            )}

            {/* Bottom Left Card */}
            {loading ? (
              <div className="bg-gray-800 rounded-lg p-6 animate-pulse h-64">
                <div className="w-8 h-8 bg-gray-700 rounded-full mb-4 blur-sm"></div>
                <div className="w-3/4 h-6 bg-gray-700 rounded mb-2 blur-sm"></div>
                <div className="w-full h-4 bg-gray-700 rounded blur-sm"></div>
              </div>
            ) : (
              <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between h-64">
                <div>
                  {data?.bottomLeft.icon && <div className="mb-4">{data.bottomLeft.icon}</div>}
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {data?.bottomLeft.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {data?.bottomLeft.description}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column (Top Right and Bottom Right) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Top Right (4 Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {loading
                ? [...Array(4)].map((_, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6 animate-pulse h-32">
                      <div className="w-3/4 h-6 bg-gray-700 rounded mb-2 blur-sm"></div>
                      <div className="w-full h-4 bg-gray-700 rounded blur-sm"></div>
                    </div>
                  ))
                : data?.topRight.map((card, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between h-32"
                    >
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                          {card.title}
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base">{card.description}</p>
                      </div>
                    </div>
                  ))}
            </div>

            {/* Bottom Right (2 Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {loading
                ? [...Array(2)].map((_, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6 animate-pulse h-32">
                      <div className="w-8 h-8 bg-gray-700 rounded-full mb-4 blur-sm"></div>
                      <div className="w-3/4 h-6 bg-gray-700 rounded mb-2 blur-sm"></div>
                      <div className="w-full h-4 bg-gray-700 rounded blur-sm"></div>
                    </div>
                  ))
                : data?.bottomRight.map((card, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between h-32"
                    >
                      <div>
                        {card.icon && <div className="mb-4">{card.icon}</div>}
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                          {card.title}
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base">{card.description}</p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3BlockchainSection;