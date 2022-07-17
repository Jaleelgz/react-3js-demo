import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function ItemCanvas({ children }) {
  return (
    <>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} enableRotate />
        <ambientLight intensity={0.3} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </>
  );
}

export default ItemCanvas;
