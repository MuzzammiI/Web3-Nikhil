import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { ethers } from "ethers";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when clicking a menu item (for mobile)
  const closeMenu = () => setMenuOpen(false);

  // Check if wallet is already connected (persistent state)
  useEffect(() => {
    const checkWallet = async () => {
      if (window.ethereum) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const accounts = await window.ethereum.request({ method: "eth_accounts" });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error);
        }
      }
    };
    checkWallet();
  }, []);

  // Connect Wallet function
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } catch (error) {
        console.error("Wallet connection error:", error);
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask.");
    }
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400">
          <Link to="/" onClick={closeMenu}>CryptoHub</Link>
        </h1>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent text-center md:text-left transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          {["Trending", "Airdrops", "Projects", "News", "Funding", "About us"].map((item) => (
            <li key={item} className="py-3 md:py-0 border-b border-gray-700 md:border-none">
              <Link
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block md:inline px-6 py-2 hover:text-yellow-300"
                onClick={closeMenu}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Connect Wallet Button */}
        <button
          onClick={connectWallet}
          className="hidden md:block bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg"
        >
          {walletAddress
            ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
            : "Connect Wallet"}
        </button>
      </div>

      {/* Mobile Wallet Address Display */}
      {walletAddress && (
        <div className="md:hidden text-center text-yellow-400 mt-2">
          Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
