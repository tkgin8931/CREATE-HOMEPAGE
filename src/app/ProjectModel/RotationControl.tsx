"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Mesh } from "three"

type RotatingCubeProps = {
    rotationSpeed: [number,number,number];
};

const RotatingCube: React.FC<RotatingCubeProps> = ({ rotationSpeed }) => {
    const meshRef = useRef<Mesh>(null);

    useFrame(() => {
        if(meshRef.current) {
            meshRef.current.rotation.x += (rotationSpeed[0] * Math.PI / 180)
            meshRef.current.rotation.y += (rotationSpeed[1] * Math.PI / 180)
            meshRef.current.rotation.z += (rotationSpeed[2] * Math.PI / 180)       
        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2,2,2]}/>
            <meshStandardMaterial color="#AAA500"/>
        </mesh>
    )
}

export default function RotateApp() {
    const rotationSpeed : [number,number,number] = [5,5,0];
    return (
        <div>
            <Canvas>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[10,10,10]}/>
                <RotatingCube rotationSpeed={rotationSpeed}/>
            </Canvas>
        </div>
    )
}

