import React from 'react';
import { FiUpload, FiDownload, FiCheckCircle, FiInfo } from 'react-icons/fi';

const InstructionStep = ({ icon, title, children }) => {
  const Icon = icon;
  return (
    <div className="flex items-start mb-5 last:mb-0">
      <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600">
        <Icon className="w-5 h-5" />
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <p className="mt-1 text-gray-600">{children}</p>
      </div>
    </div>
  );
};

const Instructions = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 h-full">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
        <FiInfo className="mr-2 text-blue-600" /> How It Works
      </h2>
      <div className="space-y-4">
        <InstructionStep icon={FiUpload} title="Draw Your Thumbprint">
          Use your finger or stylus to carefully draw your thumbprint pattern on the canvas. 
          Try to replicate the ridges and swirls accurately.
        </InstructionStep>
        
        <InstructionStep icon={FiCheckCircle} title="AI Processing">
          Our advanced algorithms analyze your drawing to create a precise digital 
          replica of your thumbprint's unique architecture.
        </InstructionStep>
        
        <InstructionStep icon={FiDownload} title="Download & Use">
          Download your digital thumbprint as a high-quality PNG with authentic 
          blue ink appearance, ready for any application.
        </InstructionStep>
      </div>
    </div>
  );
};

export default Instructions;