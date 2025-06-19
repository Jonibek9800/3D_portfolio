// App.jsx
import { Physics, useBox } from "@react-three/cannon";
import { Html, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

function Platform() {
    return (
        <mesh receiveShadow position={[0, -0.5, 0]}>
            <boxGeometry args={[10, 1, 10]} />
            <meshStandardMaterial color="#1d1d1d" />
        </mesh>
    );
}

import { MathUtils } from "three";

function CssLogoModel() {
    const { scene } = useGLTF("/SCC.glb");
    const scale = 50;

    // Размеры коллизии для физики подбирай под размер модели с учетом масштаба
    const baseSize = [5, 30, 5];
    const scaledSize = baseSize.map((v) => v * scale);

    const [ref] = useBox(() => ({
        args: [50, 30, 50],
        position: [0, -5, 0],
        rotation: [0, 0, MathUtils.degToRad(90)],
        type: "Static",
    }));

    return (
        <primitive
            ref={ref}
            object={scene}
            scale={scale}
            position={[0, -11, 0]}
            rotation={[0, MathUtils.degToRad(90), 0]}
            receiveShadow
        />
    );
}

function Character({ onEasterEgg }) {
    const [ref, api] = useBox(() => ({
        mass: 1,
        position: [0, 0, 2],
        args: [0.5, 1, 0.5], // размеры совпадают с геометрией
    }));

    // useFrame(() => {
    //     if (ref.current) {
    //         // можно считывать позицию через api.position, например:
    //         api.position.subscribe((pos) => {
    //             if (Math.abs(pos[0] + 3) < 0.5 && Math.abs(pos[2] + 3) < 0.5) {
    //                 onEasterEgg?.();
    //             }
    //         });
    //     }
    // });

    // useEffect(() => {
    //     const handleKeyDown = (e) => {
    //         api.position.subscribe((pos) => {
    //             const [x, y, z] = pos;
    //             switch (e.key) {
    //                 case "ArrowUp":
    //                     api.position.set(x, y, z - 0.5);
    //                     break;
    //                 case "ArrowDown":
    //                     api.position.set(x, y, z + 0.5);
    //                     break;
    //                 case "ArrowLeft":
    //                     api.position.set(x - 0.5, y, z);
    //                     break;
    //                 case "ArrowRight":
    //                     api.position.set(x + 0.5, y, z);
    //                     break;
    //                 default:
    //                     break;
    //             }
    //         });
    //     };
    //     window.addEventListener("keydown", handleKeyDown);
    //     return () => window.removeEventListener("keydown", handleKeyDown);
    // }, [api]);

    return (
        <mesh ref={ref} castShadow>
            <boxGeometry args={[0.5, 1, 0.5]} />
            <meshStandardMaterial color="#f9c74f" />
        </mesh>
    );
}

function EasterEgg() {
    return (
        <Html position={[-3, 2, -3]}>
            <div style={{ background: "white", padding: 10, borderRadius: 8 }}>
                🧠 Пасхалка найдена!
            </div>
        </Html>
    );
}

export default function CssGamePlatform() {
    const [showEgg, setShowEgg] = useState(false);

    return (
        <Canvas style={{ height: "100vh" }} shadows camera={{ position: [0, 5, 30], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

            <Suspense fallback={null}>
                <OrbitControls />
                <Physics gravity={[0, -9.81, 0]}>
                    {/* <Platform /> */}
                    <Character onEasterEgg={() => setShowEgg(true)} />
                    <CssLogoModel />
                </Physics>
                {showEgg && <EasterEgg />}
            </Suspense>
        </Canvas>
    );
}
