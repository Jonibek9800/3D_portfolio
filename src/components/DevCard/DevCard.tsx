import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Suspense } from "react";

const DevCard = () => {
    const cardRef = useRef(null);
    const targetRotation = useRef([0, 0]);
    const { nodes, materials } = useGLTF("/card.glb");
    const materialRef = useRef(null);

    useFrame((state) => {
        const [targetX, targetY] = targetRotation.current;

        if (cardRef.current) {
            // Плавно интерполируем текущий поворот к целевому
            cardRef.current.rotation.x = THREE.MathUtils.lerp(
                cardRef.current.rotation.x,
                targetX,
                0.1
            );

            cardRef.current.rotation.y = THREE.MathUtils.lerp(
                cardRef.current.rotation.y,
                targetY,
                0.1
            );
        }
    });

    return (
        <group
            ref={cardRef}
            onPointerMove={(e) => {
                // Получаем нормализованные координаты указателя
                const x = e.pointer.x;
                const y = e.pointer.y;

                // Умножаем на угол (чем больше, тем сильнее наклон)
                targetRotation.current = [y * 0.5, x * 0.5];
            }}
            onPointerOut={() => {
                // Сброс поворота при выходе
                targetRotation.current = [0, 0];
            }}
        >
            <mesh
                scale={[2, 3, 0.1]}
                geometry={nodes.card.geometry}
                material={materials.cardMaterial}
            >
                <meshStandardMaterial ref={materialRef} color={"#2e5452"} />
            </mesh>
            <mesh
                scale={[1, 0.1, 1]}
                position={[0, 1.8, 0.1]}
                rotation={[Math.PI * 0.5, 0, 0]}
                geometry={nodes.photo.geometry}
                material={materials.cardMaterial}
            >
                <meshStandardMaterial color={"white"} />
            </mesh>
            <mesh
                scale={[1.4, 1, 1.4]}
                position={[-0.7, 0.4, 0.1]}
                rotation={[Math.PI * 0.5, 0, 0]}
                geometry={nodes.name.geometry}
                material={materials.cardMaterial}
            >
                <meshStandardMaterial color={"white"} />
            </mesh>
            <mesh
                scale={[1.4, 1, 1.4]}
                position={[-1, 0.2, 0.1]}
                rotation={[Math.PI * 0.5, 0, 0]}
                geometry={nodes.position.geometry}
                material={materials.cardMaterial}
            >
                <meshStandardMaterial color={"white"} />
            </mesh>
            <mesh
                scale={[1.4, 1, 1.4]}
                position={[-1.4, -0.4, 0.1]}
                rotation={[Math.PI * 0.5, 0, 0]}
                geometry={nodes.Email.geometry}
                material={materials.cardMaterial}
            >
                <meshStandardMaterial color={"white"} />
            </mesh>
            <mesh
                scale={[1.4, 1, 1.4]}
                position={[-1.4, -0.7, 0.1]}
                rotation={[Math.PI * 0.5, 0, 0]}
                geometry={nodes.address.geometry}
                material={materials.cardMaterial}
            >
                <meshStandardMaterial color={"white"} />
            </mesh>
            <mesh
                scale={[1.4, 1, 1.4]}
                position={[-1.4, -1, 0.1]}
                rotation={[Math.PI * 0.5, 0, 0]}
                geometry={nodes.work_position.geometry}
                material={materials.cardMaterial}
            >
                <meshStandardMaterial color={"white"} />
            </mesh>
            <group>
                <mesh
                    scale={[0.3, 1.2, 0.08]}
                    position={[0.3, -2.2, 0.1]}
                    rotation={[0, 0, Math.PI * 0.5]}
                    geometry={nodes.btn.geometry}
                    material={materials.cardMaterial}
                >
                    <meshStandardMaterial color={"white"} />
                </mesh>
                <mesh
                    scale={[1.2, 1.2, 1.2]}
                    position={[-0.5, -2.22, 0.19]}
                    rotation={[Math.PI * 0.5, 0, 0]}
                    geometry={nodes.DownloadCV.geometry}
                    material={materials.cardMaterial}
                >
                    <meshStandardMaterial color={"black"} />
                </mesh>
            </group>
        </group>
    );
};

const DevCardWithSuspense = () => (
    <Suspense
        fallback={
            <Html center>
                <div style={{ fontSize: 38, color: "#000", fontWeight: "bold" }}>Loading...</div>
            </Html>
        }
    >
        <DevCard />
    </Suspense>
);

export default DevCardWithSuspense;
