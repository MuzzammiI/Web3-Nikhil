import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle, FaSignOutAlt, FaCog, FaQuestionCircle, FaEnvelope, FaUsers, FaWallet } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = () => {
      const storedLoginState = localStorage.getItem("isLoggedIn");
      const storedWallet = localStorage.getItem("walletAddress");

      if (storedLoginState === "true") {
        setIsLoggedIn(true);
      }
      if (storedWallet) {
        setWalletAddress(storedWallet);
      }
    };

    checkAuthStatus();
    window.addEventListener('storage', checkAuthStatus);
    return () => window.removeEventListener('storage', checkAuthStatus);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const connectWallet = async () => {
    try {
      setIsConnecting(true);
      // Simulate wallet connection (replace with your actual wallet connection logic)
      await new Promise(resolve => setTimeout(resolve, 1000));
      const demoWallet = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F";
      setWalletAddress(demoWallet);
      localStorage.setItem("walletAddress", demoWallet);
      toast.success("Wallet connected successfully!");
    } catch (error) {
      toast.error("Failed to connect wallet");
      console.error(error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    localStorage.removeItem("walletAddress");
    toast.info("Wallet disconnected");
  };

  const handleLogin = () => {
    // This should redirect to your login page where actual authentication happens
    navigate("/login");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    setWalletAddress(null);
    localStorage.removeItem("walletAddress");
    setProfileOpen(false);
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400">
          <Link to="/" onClick={() => setMenuOpen(false)}>CryptoHub</Link>
        </h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent text-center md:text-left transition-all duration-300 ease-in-out z-40 ${
            menuOpen ? "block" : "hidden md:block"
          }`}
        >
          {["Trending", "Airdrops", "Projects", "News", "Funding"].map(
            (item) => (
              <li key={item} className="py-3 md:py-0 border-b md:border-none border-gray-700">
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="block md:inline px-6 py-2 hover:text-yellow-300 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Authentication & Wallet Connection */}
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Link
                to="/register"
                className="hidden sm:inline-block bg-black text-white px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-800 transition duration-200"
              >
                Register
              </Link>
              <button
                onClick={handleLogin}
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
              >
                Login
              </button>
            </>
          ) : (
            <>
              {!walletAddress ? (
                <button
                  onClick={connectWallet}
                  disabled={isConnecting}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition duration-200 ${
                    isConnecting
                      ? "bg-gray-600 text-gray-300"
                      : "bg-yellow-500 text-black hover:bg-yellow-600"
                  }`}
                >
                  <FaWallet />
                  {isConnecting ? "Connecting..." : "Connect Wallet"}
                </button>
              ) : (
                <button
                  onClick={disconnectWallet}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-yellow-300 hover:bg-gray-700 transition duration-200"
                >
                  <FaWallet />
                  <span className="hidden sm:inline">
                    {walletAddress.substring(0, 6)}...{walletAddress.slice(-4)}
                  </span>
                </button>
              )}

              {/* Profile Dropdown */}
              <div className="relative" ref={profileRef}>
                <button
                  className="flex items-center gap-2 px-4 py-2 text-yellow-300 font-semibold bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-200"
                  onClick={() => setProfileOpen(!profileOpen)}
                  aria-label="Profile menu"
                  aria-expanded={profileOpen}
                >
                  <FaUserCircle size={20} />
                  <span className="hidden sm:inline">Profile</span>
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-gray-800 text-white rounded-lg shadow-xl border border-gray-700 overflow-hidden z-50">
                    <div className="px-4 py-3 border-b border-gray-700 bg-gray-900">
                      <p className="text-sm font-medium text-yellow-300 truncate">
                        {localStorage.getItem("userEmail") || "User"}
                      </p>
                      {walletAddress && (
                        <p className="text-xs text-gray-400 mt-1 truncate">
                          {walletAddress.substring(0, 6)}...{walletAddress.slice(-4)}
                        </p>
                      )}
                    </div>
                    
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setProfileOpen(false)}
                    >
                      <FaUserCircle className="mr-3 text-gray-400" />
                      <span>My Profile</span>
                    </Link>
                    
                    <Link
                      to="/settings"
                      className="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setProfileOpen(false)}
                    >
                      <FaCog className="mr-3 text-gray-400" />
                      <span>Settings</span>
                    </Link>
                    
                    <Link
                      to="/help"
                      className="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setProfileOpen(false)}
                    >
                      <FaQuestionCircle className="mr-3 text-gray-400" />
                      <span>Help Center</span>
                    </Link>
                    
                    <Link
                      to="/community"
                      className="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setProfileOpen(false)}
                    >
                      <FaUsers className="mr-3 text-gray-400" />
                      <span>Community</span>
                    </Link>
                    
                    <Link
                      to="/contact"
                      className="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors duration-200 border-b border-gray-700"
                      onClick={() => setProfileOpen(false)}
                    >
                      <FaEnvelope className="mr-3 text-gray-400" />
                      <span>Contact Us</span>
                    </Link>
                    
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center px-4 py-3 bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
                    >
                      <FaSignOutAlt className="mr-3" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;