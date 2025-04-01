import React from 'react';
import { FaFingerprint } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="text-center">
      <div className="inline-flex items-center justify-center mb-4">
        <FaFingerprint className="text-blue-600 text-4xl mr-3" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Digital Signature
        </h1>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Create a precise digital replica of your Signature with professional blue ink effect
      </p>
    </header>
  );
};

export default Header;