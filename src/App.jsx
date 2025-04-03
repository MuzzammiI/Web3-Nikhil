import  { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import CryptoTicker from "./components/CryptoTicker";
import Footer from "./components/Footer";
import Navbar2 from "./components/Navbar2";
// import TrendingTopics from "./components/TrendingTopics";

// ✅ Lazy loading pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Trending = lazy(() => import("./pages/Trending"));
// const News = lazy(() => import("./pages/News"));
const NewsFeed = lazy(() => import("./pages/News/NewsFeed"));
const AirdropSection = lazy(() => import("./pages/Airdrops/AirdropSection"));
const Projects = lazy(() => import("./pages/Projects"));
const Funding = lazy(() => import("./pages/FundingDetails"));

const App = () => {

  return (
    <>
    
      {/* Navbar */}
      {/* <Navbar /> */}
      <div className="h-20">
      <Navbar2 />
      
    </div>
      {/* Crypto Ticker */}
      <CryptoTicker />
      {/* Suspense Wrapper for Lazy-Loaded Pages */}
      <Suspense fallback={<div className="text-center text-yellow-400 p-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/news" element={<NewsFeed/>} />
          <Route path="/airdrops" element={ <AirdropSection/> } />
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
