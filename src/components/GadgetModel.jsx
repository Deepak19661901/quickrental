import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const SimpleModel = ({ type }) => {
    return (
        <mesh>
            {type === 'laptop' && (
                <>
                    <boxGeometry args={[3, 0.2, 2]} />
                    <meshStandardMaterial color="#444" />
                    <mesh position={[0, 0.1, -0.8]} rotation={[0.5, 0, 0]}>
                        <boxGeometry args={[3, 2, 0.1]} />
                        <meshStandardMaterial color="#666" />
                    </mesh>
                </>
            )}

            {type === 'camera' && (
                <>
                    <boxGeometry args={[1.5, 1, 0.8]} />
                    <meshStandardMaterial color="#222" />
                    <mesh position={[0.8, 0, 0]}>
                        <cylinderGeometry args={[0.4, 0.4, 0.8, 32]} />
                        <meshStandardMaterial color="#333" />
                    </mesh>
                </>
            )}

            {type === 'console' && (
                <>
                    <boxGeometry args={[2, 0.5, 1.5]} />
                    <meshStandardMaterial color="#111" />
                </>
            )}
        </mesh>
    );
};

const GadgetModel = ({ type }) => {
    return (
        <div className="h-full w-full">
            <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <SimpleModel type={type} />
                <OrbitControls
                    enableZoom={false}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    );
};

export default GadgetModel;