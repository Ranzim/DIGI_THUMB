import React, { useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

const PreviewModal = ({ image, onClose, DownloadButton }) => {
  const imageRef = useRef();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative transform transition-all duration-300 animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <FaTimes size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Digital Thumbprint</h2>
        
        <div className="border-2 border-blue-200 rounded-xl p-2 mb-6 bg-gradient-to-br from-blue-50 to-gray-50">
          <img
            ref={imageRef}
            src={image}
            alt="Generated thumbprint"
            className="w-full h-auto rounded-lg"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <DownloadButton imageRef={imageRef} />
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg shadow transition-all duration-300"
          >
            Close Preview
          </button>
        </div>
        
        <p className="mt-4 text-sm text-gray-500 text-center">
          This digital replica matches the exact architecture of your physical thumbprint.
        </p>
      </div>
    </div>
  );
};

export default PreviewModal;