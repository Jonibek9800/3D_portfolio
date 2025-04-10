import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Earth = () => {
    const boxRef = useRef(null);
    const { nodes, materials } = useGLTF("/earth.glb");

    useFrame(() => {
        boxRef.current.rotation.z += 0.001;
    });

    return (
        <>
            <group ref={boxRef} scale={1} rotation={[-1, 0, 0]} position={[0, 0, 0]}>
                <mesh geometry={nodes["Earth_Earth_0"].geometry} material={materials["Earth"]}>
                    <meshStandardMaterial
                        roughness={1}
                        normalMap={materials["Earth"].normalMap}
                        metalnessMap={materials["Earth"].metalnessMap}
                        aoMapIntensity={materials["Earth"].aoMapIntensity}
                        metalness={0.5} // Можно настроить металлическость, если нужно
                        map={materials["Earth"].map} // Если текстура для материала Earth, можно её передать
                        roughnessMap={materials["Earth"].roughnessMap} // Если есть карта неровностей (roughness map)
                    />
                </mesh>
                <mesh geometry={nodes["Earth_Earth_0_1"].geometry} material={materials["Earth"]}>
                    <meshStandardMaterial
                        roughness={1}
                        metalness={0.5}
                        normalMap={materials["Earth"].normalMap}
                        metalnessMap={materials["Earth"].metalnessMap}
                        aoMapIntensity={materials["Earth"].aoMapIntensity}
                        map={materials["Earth"].map}
                        roughnessMap={materials["Earth"].roughnessMap}
                    />
                </mesh>
                <mesh geometry={nodes["Earth_Earth_0_2"].geometry} material={materials["Earth"]}>
                    <meshStandardMaterial
                        roughness={1}
                        metalness={0.5}
                        normalMap={materials["Earth"].normalMap}
                        metalnessMap={materials["Earth"].metalnessMap}
                        aoMapIntensity={materials["Earth"].aoMapIntensity}
                        map={materials["Earth"].map}
                        roughnessMap={materials["Earth"].roughnessMap}
                    />
                </mesh>
            </group>
        </>
    );
};

export default Earth;
