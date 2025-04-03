// import React from 'react';
import {
  FaFacebookF,
  FaSearch,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaFire,
  FaGift,
  FaProjectDiagram,
  FaNewspaper,
  FaMoneyBillWave,
  FaInfoCircle,
  FaBitcoin,
  FaChartLine,
  FaChartBar,
  FaCoins,
  FaClock,
  FaTemperatureHigh,
  FaHandHolding,
  FaStar,
  FaCheckCircle,
  FaHourglassEnd,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Branding/Logo Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl sm:text-3xl font-bold">Web3 Insights</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Your go-to platform for the latest in Web3, blockchain, and future technologies.
            </p>
          </div>

          {/* Site Map Section 1: Main Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg sm:text-xl font-semibold">Explore</h4>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <FaFire className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Trending
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaGift className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Airdrops
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaProjectDiagram className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaNewspaper className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  News
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMoneyBillWave className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Funding
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaInfoCircle className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Site Map Section 2: Additional Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg sm:text-xl font-semibold">Resources</h4>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <FaProjectDiagram className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Web3 Projects
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaBitcoin className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  NFT Marketplace
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaCoins className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Token & Coin Listing
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaNewspaper className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Web3 & Blockchain News
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMoneyBillWave className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Funding Announcements
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaSearch className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Project Discovery
                </a>
              </li>
            </ul>
          </div>

          {/* Currency Tracker Section with Sub-Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg sm:text-xl font-semibold">Currency Tracker</h4>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <FaChartLine className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Trending Coins
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaChartBar className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Top Losers
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaChartLine className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Top Gainers
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaCoins className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Stable Coins
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaClock className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Upcoming Tokens
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaChartLine className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Real-time Coins Prices
                </a>
              </li>
            </ul>
          </div>

          {/* Airdrops Section with Sub-Links + Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg sm:text-xl font-semibold">Airdrops</h4>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <FaTemperatureHigh className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Hot Airdrops
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaHandHolding className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Free Airdrops
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaStar className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  New Airdrops
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  Completed Airdrops
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaHourglassEnd className="w-5 h-5 text-yellow-400" />
                <a href="#" className="hover:text-white transition">
                  End Soon
                </a>
              </li>
            </ul>

            {/* Contact Info */}
            <h4 className="text-lg sm:text-xl font-semibold mt-6">Contact Us</h4>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <FaEnvelope className="w-5 h-5 text-yellow-400" />
                <a href="mailto:info@web3insights.com" className="hover:text-white transition">
                  info@web3insights.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="w-5 h-5 text-yellow-400" />
                <a href="tel:+1234567890" className="hover:text-white transition">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm sm:text-base">
          <p>© {new Date().getFullYear()} Web3 Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;