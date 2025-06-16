import { useFrame } from "@react-three/fiber";
import { ReactElement, useRef } from "react";

function RotatingGroup({ children, speed = 0.01 }: { children: ReactElement; speed: number }) {
    const ref = useRef(null);

    useFrame(() => {
        ref.current.rotation.y += speed;
    });

    return <group ref={ref}>{children}</group>;
}

export default RotatingGroup;
