// App.jsx
// import { Physics, useBox, usePlane } from "@react-three/cannon";
import { KeyboardControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CuboidCollider, Physics } from "@react-three/rapier";
import Controller from "ecctrl";
import { Suspense, forwardRef, useImperativeHandle, useRef } from "react";
import DevCardWithSuspense from "../../components/DevCard/DevCard";
import SkillGroups from "../../components/SkillGroups/SkillGroups";

import { RigidBody } from "@react-three/rapier";

export function Plane() {
    return (
        <>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
                <planeGeometry args={[1000, 1000]} />
                <meshStandardMaterial color="green" />
            </mesh>
            <CuboidCollider
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -3, 0]}
                args={[500, 500, 4]}
            />
        </>
    );
}

const Cube = forwardRef((props, ref) => {
    const cubeRef = useRef();

    // Прокидываем ref наружу
    useImperativeHandle(ref, () => ({ ref: cubeRef, api: cubeRef.current }));

    return (
        <RigidBody ref={cubeRef} position={[0, 0, 0]} mass={1} {...props}>
            <mesh castShadow>
                <boxGeometry />
                <meshStandardMaterial color="red" />
            </mesh>
        </RigidBody>
    );
});

export default function CssGamePlatform() {
    const keyboardMap = [
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        { name: "jump", keys: ["Space"] },
        { name: "run", keys: ["Shift"] },
        // Optional animation key map
        { name: "action1", keys: ["1"] },
        { name: "action2", keys: ["2"] },
        { name: "action3", keys: ["3"] },
        { name: "action4", keys: ["KeyF"] },
    ];

    return (
        <Canvas
            style={{ height: "100vh" }}
            shadows
            camera={{ position: [0, 15, 30], fov: 80, rotation: [1, 0, 0.5] }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

            <Suspense fallback={null}>
                <Sky />
                {/* <OrbitControls /> */}
                <SkillGroups />
                <DevCardWithSuspense position={[-30, 5, 30]} />
                <Physics timeStep="vary" gravity={[0, -9.81, 0]}>
                    {/* <FirstPersonControls /> */}
                    <KeyboardControls map={keyboardMap}>
                        <Controller maxVelLimit={5}>
                            <Cube />
                        </Controller>
                    </KeyboardControls>
                    <Plane />
                </Physics>
            </Suspense>
        </Canvas>
    );
}
