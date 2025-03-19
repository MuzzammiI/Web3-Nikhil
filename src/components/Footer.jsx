const Footer = () => {
  return (
    <footer className="bg-black-500 text-gray-300 py-6 px-6 h-20 bottom-0 left-0 w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Social Media Links (Left) */}
        <div className="flex gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>

        {/* Copyright Section (Center) */}
        <div className="text-sm flex items-center gap-1">
          <span className="text-lg">©</span> {new Date().getFullYear()} CryptoHub. All rights reserved.
        </div>

        {/* Terms & Privacy Policy (Right) */}
        <div className="text-sm">
          <a href="/terms" className="hover:underline">Terms & Conditions</a> | 
          <a href="/privacy" className="hover:underline ml-2">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
