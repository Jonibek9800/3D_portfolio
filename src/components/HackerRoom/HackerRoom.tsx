import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { Vector3 } from "three";

const HackerRoom = ({
    castRotation,
}: {
    castRotation: Vector3 | [x: number, y: number, z: number];
}) => {
    const groupRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const { scene } = useGLTF("/hacker_room.glb");

    useFrame(() => {
        if (!groupRef.current) return;
        groupRef.current.rotation.set(0.4, Math.PI * 1.2, 0);

        const targetY = mouse.current.x * 0.5;
        const targetX = mouse.current.y * 0.3;

        groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.2;
        groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.2;

        groupRef.current.position.set(0, -1.3, 0);
    });

    return (
        <>
            <primitive ref={groupRef} object={scene} scale={0.031} rotation={castRotation} />
            <mesh
                onPointerMove={(e) => {
                    mouse.current.x = e.pointer.x;
                    mouse.current.y = e.pointer.y;
                }}
                position={[0, 0, 0]}
                scale={[100, 100, 1]}
                visible={false}
            >
                <planeGeometry />
                <meshBasicMaterial transparent opacity={0} />
            </mesh>
        </>
    );
};

const HackerRoomWithSuspence = () => {
    return (
        <Suspense
            fallback={
                <Html>
                    <div style={{ fontSize: 22, fontWeight: "bold", color: "#000" }}>
                        Подаждите загрузка текстур...
                    </div>
                </Html>
            }
        >
            <HackerRoom castRotation={[0, Math.PI, 0]} />
        </Suspense>
    );
};

export default HackerRoomWithSuspence;
