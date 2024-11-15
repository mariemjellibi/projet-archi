// InteriorPC.jsx
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Motherboard from "./Motherboard";
import "./motherboard.css";

export default function InteriorPC() {
  return (
    <div className="w-full h-screen app-background flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 1, 4], fov: 50 }}
        className="w-full h-full"
      >
        {/* Lighting Setup */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[2, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* 3D Model */}
        <Suspense fallback={<Loader />}>
          <Motherboard />
        </Suspense>

        {/* Environment & Controls */}
        <Environment preset="warehouse" />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          zoomSpeed={0.8} // Increased zoom speed for better control
          rotateSpeed={0.6} // Adjusted rotation speed for smoother rotation
          dampingFactor={0.15} // Smoother stop and less abrupt movement
          minDistance={0.5} // Minimum zoom distance (close to the object)
          maxDistance={8} // Maximum zoom distance (far from the object)
        />
      </Canvas>
    </div>
  );
}

// Loader Component
const Loader = () => (
  <div className="loader">
    <span>Loading 3D Model...</span>
  </div>
);
