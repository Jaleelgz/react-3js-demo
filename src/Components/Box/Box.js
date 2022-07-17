import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";
import BrickTexture from "../../Images/weds.jpg";

const Box = () => {
  const brickBox = useLoader(TextureLoader, BrickTexture);
  return (
    <mesh rotation={[90, 0, 45]}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshLambertMaterial attach="material" map={brickBox} />
    </mesh>
  );
};

export default Box;
