import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 w-full pt-12 pb-6 text-white">
      <div className="text-center space-y-1 text-xs sm:text-sm">
        <p>
          تم التطوير بواسطة شركة{" "}
          <a 
            href="https://web.facebook.com/TheBestSOlutoin/" 
            className="text-[#E52020] mr-1 hover:underline"
          >
            THE BEST SOLUTION
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
