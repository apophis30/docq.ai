import React from 'react';
import { FaLinkedin, FaGithub  } from "react-icons/fa";

const FooterComponent: React.FC = () => {
  return (
    <footer className="flex justify-center items-center p-4 bg-gradient-to-l from-gray-700 via-gray-800 to-gray-900 text-white">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
        <FaLinkedin className="w-6 h-6" />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="mx-2">
        <FaGithub className="w-6 h-6" />
      </a>
    </footer>
  );
};

export default FooterComponent;