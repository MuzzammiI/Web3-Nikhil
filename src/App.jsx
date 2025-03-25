import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CryptoTicker from "./components/CryptoTicker";
import Footer from "./components/Footer";


// Lazy loading pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Trending = lazy(() => import("./pages/Trending"));
const News = lazy(() => import("./pages/News"));
const AirdropSection = lazy(() => import("./pages/AirdropSection"));
const Projects = lazy(() => import("./pages/Projects"));
const Funding = lazy(() => import("./pages/Funding"));

// Authentication & User-related pages
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const EditProfile = lazy(() => import("./pages/EditProfile"));
const Setting = lazy(() => import("./pages/Setting"));
const HelpCenter = lazy(() => import("./pages/HelpCenter"));
const Community = lazy(() => import("./pages/Community"));

// 404 Not Found Page
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Crypto Ticker */}
      <CryptoTicker />

      {/* Main Content */}
      <main className="flex-grow">
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen text-yellow-400 text-xl">
              Loading...
            </div>
          }
        >
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/news" element={<News />} />
            <Route path="/airdrops" element={<AirdropSection />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/funding" element={<Funding />} />

            {/* Authentication Routes */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* User Profile Routes */}
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/community" element={<Community />} />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;