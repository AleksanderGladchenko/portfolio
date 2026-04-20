import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const AbstractShape = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x -= delta * 0.1;
            meshRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
            {/* Основной объект */}
            <mesh ref={meshRef} scale={1.5}>
                <icosahedronGeometry args={[1, 1]} />

                {/* Темное ядро */}
                <meshStandardMaterial
                    color="#0a0a0a"
                    roughness={0.2}
                    metalness={0.8}
                    transparent
                    opacity={0.8}
                />

                {/* ХИРУРГИЧЕСКИЙ ФИКС: Нативный каркас (Wireframe) поверх ядра */}
                <mesh scale={1.001}>
                    <icosahedronGeometry args={[1, 1]} />
                    <meshBasicMaterial
                        wireframe
                        color="#2997ff"
                        transparent
                        opacity={0.5}
                        blending={THREE.AdditiveBlending}
                    />
                </mesh>
            </mesh>
        </Float>
    );
};

const Hero3D = () => {
    return (
        <Canvas
            dpr={[1, 1.5]}
            camera={{ position: [0, 0, 5], fov: 45 }}
            gl={{ antialias: false, powerPreference: "high-performance" }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
            <directionalLight position={[-10, -10, -5]} intensity={1} color="#2997ff" />
            <AbstractShape />
        </Canvas>
    );
};

export default Hero3D;