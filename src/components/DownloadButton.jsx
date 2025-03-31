import React from 'react';

const DownloadButton = ({ imageRef }) => {
  const handleDownload = () => {
    if (imageRef.current) {
      const link = document.createElement('a');
      link.download = 'digital-thumbprint.png';
      link.href = imageRef.current.src;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Download Thumbprint
    </button>
  );
};

export default DownloadButton;