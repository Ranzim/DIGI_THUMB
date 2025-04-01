import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import CanvasComponent from '../components/CanvasComponent';
import Instructions from '../components/Instructions';
import DownloadButton from '../components/DownloadButton';
import PreviewModal from '../components/PreviewModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [thumbprintImage, setThumbprintImage] = useState(null);
  const canvasRef = useRef(null);

  const handleGenerate = () => {
    if (canvasRef.current) {
      const dataUrl = canvasRef.current.getDataURL();
      setThumbprintImage(dataUrl);
      setShowModal(true);
    }
  };

  const handleClear = () => {
    if (canvasRef.current) {
      canvasRef.current.clear();
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <Header />
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="w-full lg:w-1/2">
          <CanvasComponent canvasRef={canvasRef} />
          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleGenerate}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Generate signature
            </button>
            <button
              onClick={handleClear}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-xl shadow transition-all duration-300"
            >
              Clear Canvas
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Instructions />
        </div>
      </div>
      
      {showModal && (
        <PreviewModal
          image={thumbprintImage}
          onClose={() => setShowModal(false)}
          DownloadButton={DownloadButton}
        />
      )}
    </div>
  );
};

export default Home;