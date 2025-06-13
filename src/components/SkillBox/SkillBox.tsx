import { Suspense, useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {
    TextureLoader,
    ClampToEdgeWrapping,
    Group,
    Vector3,
    Euler,
    EulerOrder,
    Color,
    Mesh,
} from "three";
import { Float, Html } from "@react-three/drei";

type Props = {
    textureUrl: string;
    skillName: string;
    position?: Vector3 | [x: number, y: number, z: number];
    rotation?: Euler | [x: number, y: number, z: number, order?: EulerOrder];
    glow?: boolean;
    scale: any;
    scene?: any;
    emmisivColor?: string;
};

const SkillBox = ({
    textureUrl,
    skillName,
    position = [0, 0, 0],
    rotation,
    glow = false,
    scale,
    scene,
    emmisivColor,
}: Props) => {
    const texture = useLoader(TextureLoader, textureUrl);
    const groupRef = useRef<Group>(null);
    const [hovered, setHovered] = useState(false);
    const meshRef = useRef<Mesh>();
    // Отключаем повторение текстуры
    texture.wrapS = texture.wrapT = ClampToEdgeWrapping;
    texture.repeat.set(1, 1);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.01;
        }
    });

    useEffect(() => {
        if (!scene || !glow) return;

        const mesh = scene.children[0] as Mesh;

        if (mesh.isMesh) {
            meshRef.current = mesh;
            mesh.material.emissive = new Color(emmisivColor);
            mesh.material.toneMapped = false;
        }
    }, [scene, glow]);

    useFrame(({ clock }) => {
        if (!glow || !meshRef.current) return;

        const time = clock.getElapsedTime();
        const intensity = 1.5 + Math.sin(time * 1.5) * 1.5; // мерцание от 0 до 3
        meshRef.current.material.emissiveIntensity = intensity;
    });

    return (
        <Float speed={0.6} rotationIntensity={3} floatIntensity={8}>
            <group
                ref={groupRef}
                scale={scale}
                position={position}
                rotation={rotation}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                {/* Сфера */}
                {scene ? (
                    <group>
                        <primitive object={scene} />
                        {/* <EffectComposer>
                            <Bloom
                                intensity={1.5}
                                luminanceThreshold={0}
                                luminanceSmoothing={0.9}
                                height={300}
                            />
                        </EffectComposer> */}
                    </group>
                ) : (
                    <group>
                        <mesh position={[0, 0.5, 0]}>
                            <sphereGeometry args={[0.5, 8, 8]} />
                            <meshStandardMaterial
                                transparent
                                emissive={glow ? "#ffaa00" : "#4a8f94"}
                                emissiveIntensity={glow ? 1.5 : 0.5}
                                toneMapped={false}
                            />
                        </mesh>

                        <mesh position={[0, 0.5, 0.5 + 0.01]}>
                            <planeGeometry args={[0.6, 0.6]} />
                            <meshStandardMaterial map={texture} transparent />
                        </mesh>
                    </group>
                )}
                {/* Название навыка — показывается только при наведении */}
                {hovered && (
                    <Html position={[0, 1.2, 0]}>
                        <div className="text-white text-sm bg-black/70 px-2 py-1 rounded text-nowrap">
                            {skillName}
                        </div>
                    </Html>
                )}
            </group>
        </Float>
    );
};

const SkillBoxWithSuspence = ({
    textureUrl,
    skillName,
    position = [0, 0, 0],
    rotation,
    glow = false,
    scale,
    scene,
    emmisivColor,
}: Props) => {
    return (
        <Suspense
            fallback={
                <Html>
                    <div style={{ color: "#fff", fontSize: 22 }}>Loading...</div>
                </Html>
            }
        >
            <SkillBox
                emmisivColor={emmisivColor}
                scene={scene}
                scale={scale}
                glow={glow}
                textureUrl={textureUrl}
                skillName={skillName}
                position={position}
                rotation={rotation}
            />
        </Suspense>
    );
};

export default SkillBoxWithSuspence;
