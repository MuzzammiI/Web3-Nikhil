import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaUserEdit,
  FaCog,
  FaQuestionCircle,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";
import { ethers } from "ethers";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check login state from localStorage
    const storedLoginState = localStorage.getItem("isLoggedIn");
    if (storedLoginState === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    // Close profile dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // Check if wallet is already connected
    const checkWallet = async () => {
      if (window.ethereum) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (accounts.length > 0) setWalletAddress(accounts[0]);
        } catch (error) {
          console.error("Error checking wallet connection:", error);
        }
      }
    };
    checkWallet();
  }, []);

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

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    setWalletAddress(null);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            CryptoHub
          </Link>
        </h1>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <ul
          className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent text-center md:text-left transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden md:block"
          }`}
        >
          {["Trending", "Airdrops", "Projects", "News", "Funding"].map(
            (item) => (
              <li
                key={item}
                className="py-3 md:py-0 border-b border-gray-700 md:border-none"
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="block md:inline px-6 py-2 hover:text-yellow-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Link
                to="/register"
                className="bg-black text-white px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-800"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="bg-black text-white px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-800"
              >
                Login
              </Link>
            </>
          ) : (
            <div className="relative" ref={profileRef}>
              <button
                className="flex items-center gap-2 px-4 py-2 text-yellow-300 font-semibold bg-black rounded-lg border border-gray-600 hover:bg-gray-800"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <FaUserCircle size={20} />
                Profile
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-gray-800 text-white rounded-lg shadow-lg border border-gray-700">
                  <Link
                    to="/edit-profile"
                    className="flex items-center px-4 py-2 hover:bg-gray-700"
                  >
                    <FaUserEdit className="mr-2" /> Edit Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="flex items-center px-4 py-2 hover:bg-gray-700"
                  >
                    <FaCog className="mr-2" /> Settings
                  </Link>
                  <Link
                    to="/help-center"
                    className="flex items-center px-4 py-2 hover:bg-gray-700"
                  >
                    <FaQuestionCircle className="mr-2" /> Help Center
                  </Link>
                  <Link
                    to="/community"
                    className="flex items-center px-4 py-2 hover:bg-gray-700"
                  >
                    <FaUsers className="mr-2" /> Community
                  </Link>
                  <hr className="my-1 border-gray-600" />
                  <button
                    onClick={logout}
                    className="flex w-full text-left items-center px-4 py-2 bg-red-600 text-white hover:bg-red-700 hover:text-white rounded-b-lg"
                  >
                    <FaSignOutAlt className="mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          )}

          <button
            onClick={connectWallet}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg"
          >
            {walletAddress
              ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
              : "Connect Wallet"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
