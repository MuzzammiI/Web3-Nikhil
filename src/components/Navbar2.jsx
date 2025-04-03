import { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaNewspaper,
  FaMoneyBillWave,
  FaChartLine,
  FaFire,
  FaHandHolding,
  FaStar,
  FaCheckCircle,
  FaHourglassEnd,
  FaNewspaper as FaNews,
  FaBullhorn,
  FaChartBar,
  FaCoins,
  FaClock,
  FaPalette,
  FaGamepad,
  FaMusic,
  FaCamera,
} from 'react-icons/fa';

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle
  const [openDropdown, setOpenDropdown] = useState(null); // For mobile dropdown toggle

  const navItems = [
    {
      name: 'Airdrops',
      description: 'Discover the latest airdrop opportunities.',
      subItems: [
        { name: 'Hot Airdrops', href: './Footer.jsx', icon: <FaFire className="w-5 h-5 text-purple-400" /> },
        { name: 'Free Airdrops', href: '#', icon: <FaHandHolding className="w-5 h-5 text-purple-400" /> },
        { name: 'New Airdrops', href: '#', icon: <FaStar className="w-5 h-5 text-purple-400" /> },
        { name: 'Completed Airdrops', href: '#', icon: <FaCheckCircle className="w-5 h-5 text-purple-400" /> },
        { name: 'End Soon', href: '#', icon: <FaHourglassEnd className="w-5 h-5 text-purple-400" /> },
      ],
    },
    {
      name: 'Project Discovery',
      href: '#',
    },
    {
      name: 'Web3 News',
      description: 'Stay updated with the latest news in Web3 and blockchain.',
      subItems: [
        { name: 'Trending News', href: '#', icon: <FaNews className="w-5 h-5 text-purple-400" /> },
        { name: 'Upcoming News', href: '#', icon: <FaClock className="w-5 h-5 text-purple-400" /> },
        { name: 'Top News', href: '#', icon: <FaStar className="w-5 h-5 text-purple-400" /> },
        { name: 'Market Releases', href: '#', icon: <FaBullhorn className="w-5 h-5 text-purple-400" /> },
        { name: 'Press Releases', href: '#', icon: <FaNewspaper className="w-5 h-5 text-purple-400" /> },
      ],
    },
    {
      name: 'Funding',
      description: 'Explore funding opportunities and partnerships.',
      subItems: [
        { name: 'Partnership', href: '#', icon: <FaHandHolding className="w-5 h-5 text-purple-400" /> },
        { name: 'Company Back', href: '#', icon: <FaMoneyBillWave className="w-5 h-5 text-purple-400" /> },
      ],
    },
    {
      name: 'NFT Marketplace',
      description: 'Dive into the world of NFTs across various categories.',
      subItems: [
        { name: 'Art', href: '#', icon: <FaPalette className="w-5 h-5 text-purple-400" /> },
        { name: 'Gaming', href: '#', icon: <FaGamepad className="w-5 h-5 text-purple-400" /> },
        { name: 'Music', href: '#', icon: <FaMusic className="w-5 h-5 text-purple-400" /> },
        { name: 'Photography', href: '#', icon: <FaCamera className="w-5 h-5 text-purple-400" /> },
      ],
    },
    {
      name: 'Currency Tracker',
      description: 'Track cryptocurrency prices and trends.',
      subItems: [
        { name: 'Trending Coins', href: '#', icon: <FaChartLine className="w-5 h-5 text-purple-400" /> },
        { name: 'Top Losers', href: '#', icon: <FaChartBar className="w-5 h-5 text-purple-400" /> },
        { name: 'Top Gainers', href: '#', icon: <FaChartLine className="w-5 h-5 text-purple-400" /> },
        { name: 'Stable Coins', href: '#', icon: <FaCoins className="w-5 h-5 text-purple-400" /> },
        { name: 'Upcoming Token/Coins', href: '#', icon: <FaClock className="w-5 h-5 text-purple-400" /> },
        { name: 'Real-time Coin Price', href: '#', icon: <FaChartLine className="w-5 h-5 text-purple-400" /> },
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div className="bg-gray-100 text-black w-full bg-opacity-80 backdrop-blur-md rounded-lg">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Left: Logo */}
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold ">Web3 Insights</h1>
              </div>

              {/* Middle: Navigation List (Hidden on small screens) */}
              <div className="hidden lg:flex items-center space-x-6">
                {navItems.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Parent Link */}
                    <a
                      href={item.href || '#'}
                      className=" hover:border-2 border-gray-100 border-2 hover:border-purple-500 hover:rounded-lg px-3 py-2 text-base font-medium flex items-center gap-1 whitespace-nowrap transition-all duration-200"
                    >
                      {item.name}
                      {item.subItems && <FaChevronDown className="w-4 h-4" />}
                    </a>

                    {/* Dropdown Menu (Hover for Desktop) */}
                    {item.subItems && (
                      <div className="absolute left-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300">
                        {item.subItems.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg"
                          >
                            {subItem.icon}
                            {subItem.name}
                          </a>
                        ))}
                        {/* Dropdown Description (Similar to Polygon) */}
                        <div className="px-4 py-3 border-t border-gray-800">
                          <div className="flex items-start gap-3">
                            <div>
                              <p className="text-sm font-semibold ">{item.name}</p>
                              <p className="text-xs text-gray-400">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right: Buttons (Hidden on small screens) */}
              <div className="hidden lg:flex items-center space-x-3">
                <button className=" hover:underline px-3 py-2 text-base font-medium">
                  Login
                </button>
                <button className=" hover:underline px-3 py-2 text-base font-medium">
                  Register
                </button>
                <button className="bg-purple-600  px-4 py-2 rounded-lg text-base font-medium hover:bg-purple-700 transition">
                  Connect Wallet
                </button>
              </div>

              {/* Hamburger Icon (Visible on small screens) */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                  {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Visible when hamburger is clicked) */}
        {isOpen && (
          <div className="lg:hidden bg-gray-900 bg-opacity-90 backdrop-blur-md mx-4 sm:mx-6 lg:mx-8 rounded-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item, index) => (
                <div key={index}>
                  {/* Parent Link (Clickable for Dropdown Toggle on Mobile) */}
                  <div
                    className="flex items-center justify-between text-white hover:underline px-3 py-2 text-base font-medium cursor-pointer whitespace-nowrap"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span>{item.name}</span>
                    {item.subItems && <FaChevronDown className="w-4 h-4" />}
                  </div>

                  {/* Dropdown Menu (Click to Toggle on Mobile) */}
                  {item.subItems && openDropdown === index && (
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white rounded-md"
                        >
                          {subItem.icon}
                          {subItem.name}
                        </a>
                      ))}
                      {/* Dropdown Description (Similar to Polygon) */}
                      <div className="px-3 py-2 border-t border-gray-800">
                        <div className="flex items-start gap-3">
                          <div>
                            <p className="text-sm font-semibold text-white">{item.name}</p>
                            <p className="text-xs text-gray-400">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-2 pt-4">
                <button className="text-white hover:underline px-3 py-2 text-base font-medium text-left">
                  Login
                </button>
                <button className="text-white hover:underline px-3 py-2 text-base font-medium text-left">
                  Register
                </button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-purple-700 transition">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar2;