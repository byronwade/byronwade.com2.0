'use client';
import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

export default function Origin({ width }) {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0, 0, 0],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 }
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
      <div className="relative h-full p-4 space-y-2 overflow-hidden border rounded-md shadow-lg border-gray-800 bg-gray-900">
        <h2 className="mb-10 text-gray-300">
          Originated in <span className="font-bold text-green-600">North American</span>
        </h2>
        <canvas
          ref={canvasRef}
          style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
          className="absolute right-0 -top-10"
        />
      </div>
    </div>
  );
}
