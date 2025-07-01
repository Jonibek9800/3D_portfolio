import { Gltf } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Stone = (props) => {
    return (
        <RigidBody {...props}>
            <mesh>
                <Gltf src="/rook.gltf" />
            </mesh>
        </RigidBody>
    );
};

export default Stone;
