import { Suspense, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, ClampToEdgeWrapping, Group, Vector3, Euler, EulerOrder } from "three";
import { Float, Html } from "@react-three/drei";

type Props = {
    textureUrl: string;
    skillName: string;
    position?: Vector3 | [x: number, y: number, z: number];
    rotation?: Euler | [x: number, y: number, z: number, order?: EulerOrder];
};

const SkillBox = ({ textureUrl, skillName, position = [0, 0, 0], rotation }: Props) => {
    const texture = useLoader(TextureLoader, textureUrl);
    const groupRef = useRef<Group>(null);

    // Отключаем повторение текстуры
    texture.wrapS = texture.wrapT = ClampToEdgeWrapping;
    texture.repeat.set(1, 1);

    return (
        <Float speed={0.6} rotationIntensity={3} floatIntensity={8}>
            <group ref={groupRef} scale={2} position={position} rotation={rotation}>
                {/* Сфера */}
                <mesh position={[0, 0.5, 0]}>
                    <sphereGeometry args={[0.5, 8, 8]} />
                    <meshStandardMaterial color="#4a8f94" />
                </mesh>

                {/* Плоскость с текстурой, прикреплена спереди (ось Z+) */}
                <mesh position={[0, 0.5, 0.5 + 0.01]}>
                    <planeGeometry args={[0.6, 0.6]} />
                    <meshStandardMaterial map={texture} transparent />
                </mesh>

                {/* Название навыка */}
                <Html position={[-0.5, 0, 0]}>
                    <p className="text-[13px] whitespace-nowrap text-white">{skillName}</p>
                </Html>
            </group>
        </Float>
    );
};

const SkillBoxWithSuspence = ({ textureUrl, skillName, position = [0, 0, 0], rotation }: Props) => {
    return (
        <Suspense
            fallback={
                <Html>
                    <div style={{ color: "#fff", fontSize: 22 }}>Loading...</div>
                </Html>
            }
        >
            <SkillBox
                textureUrl={textureUrl}
                skillName={skillName}
                position={position}
                rotation={rotation}
            />
        </Suspense>
    );
};

export default SkillBoxWithSuspence;
