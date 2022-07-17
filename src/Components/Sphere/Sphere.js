import React from 'react'
import { Sphere,MeshDistortMaterial } from '@react-three/drei'

function SphereItem() {
  return (
    <Sphere visible args={[1,100,200]} scale={2} >
        <MeshDistortMaterial color="#8352FD" attach="material" distort={0.7} />
    </Sphere>
  )
}

export default SphereItem