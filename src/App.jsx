import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CryptoTicker from "./components/CryptoTicker";
import Footer from "./components/Footer";

// ✅ Lazy loading pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Trending = lazy(() => import("./pages/Trending"));
const News = lazy(() => import("./pages/News"));
const AirdropSection = lazy(() => import("./pages/AirdropSection"));
const Projects = lazy(() => import("./pages/Projects"));
const Funding = lazy(() => import("./pages/Funding"));

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Crypto Ticker */}
      <CryptoTicker />

      {/* Suspense Wrapper for Lazy-Loaded Pages */}
      <Suspense fallback={<div className="text-center text-yellow-400 p-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/news" element={<News />} />
          <Route path="/airdrops" element={<AirdropSection />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/funding" element={<Funding />} />
        </Routes>
      </Suspense>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
