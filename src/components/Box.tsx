import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Box = () => {
    const boxRef = useRef(null);
    const { nodes, materials } = useGLTF("/earth.glb");
    console.log(nodes, materials);

    useFrame(() => {
        boxRef.current.rotation.y += 0.001;
    });

    return (
        <>
            <group ref={boxRef} scale={0.8} position={[0, 0, 2]}>
                <mesh geometry={nodes["Earth_Earth_0"].geometry} material={materials["Earth"]}>
                    <meshStandardMaterial
                        roughness={1} // 0 - гладкая, 1 - максимально шероховатая
                        metalness={0.5} // Можно настроить металлическость, если нужно
                        map={materials["Earth"].map} // Если текстура для материала Earth, можно её передать
                        roughnessMap={materials["Earth"].roughnessMap} // Если есть карта неровностей (roughness map)
                    />
                </mesh>
                <mesh geometry={nodes["Earth_Earth_0_1"].geometry} material={materials["Earth"]}>
                    <meshStandardMaterial
                        roughness={1}
                        metalness={0.5}
                        map={materials["Earth"].map}
                        roughnessMap={materials["Earth"].roughnessMap}
                    />
                </mesh>
                <mesh geometry={nodes["Earth_Earth_0_2"].geometry} material={materials["Earth"]}>
                    <meshStandardMaterial
                        roughness={1}
                        metalness={0.5}
                        map={materials["Earth"].map}
                        roughnessMap={materials["Earth"].roughnessMap}
                    />
                </mesh>
            </group>
        </>
    );
};

export default Box;
