import React, { useEffect, useRef } from 'react';
import { FaHandPointer } from 'react-icons/fa';
import { fabric } from 'fabric';

const CanvasComponent = ({ canvasRef }) => {
  const canvasContainerRef = useRef(null);
  const fabricCanvasRef = useRef(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!canvasContainerRef.current || isInitialized.current) return;
    isInitialized.current = true;

    // Initialize Fabric canvas
    fabricCanvasRef.current = new fabric.Canvas('thumbprint-canvas', {
      isDrawingMode: true,
      width: 350,
      height: 400,
      backgroundColor: '#f8fafc',
      selection: false
    });

    // Configure brush
    if (fabricCanvasRef.current.freeDrawingBrush) {
      fabricCanvasRef.current.freeDrawingBrush.color = '#2563eb';
      fabricCanvasRef.current.freeDrawingBrush.width = 3;
    }

    // Expose methods to parent
    if (canvasRef) {
      canvasRef.current = {
        getDataURL: () => fabricCanvasRef.current.toDataURL({
          format: 'png',
          quality: 1
        }),
        clear: () => {
          fabricCanvasRef.current.clear();
          fabricCanvasRef.current.backgroundColor = '#f8fafc';
          fabricCanvasRef.current.renderAll();
        }
      };
    }

    return () => {
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.dispose();
        fabricCanvasRef.current = null;
      }
      isInitialized.current = false;
    };
  }, [canvasRef]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
        <FaHandPointer className="mr-2 text-blue-600" /> Draw Your Thumbprint
      </h2>
      <div className="border-2 border-dashed border-blue-200 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-gray-50">
        <div ref={canvasContainerRef} className="flex justify-center">
          <canvas 
            id="thumbprint-canvas" 
            className="canvas-container touch-action-none"
          />
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-500 text-center">
        Draw your thumbprint pattern carefully for best results
      </p>
    </div>
  );
};

export default CanvasComponent;