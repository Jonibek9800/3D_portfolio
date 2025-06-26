import { Gltf } from "@react-three/drei";

const Three = (props) => {
    return (
        <mesh {...props}>
            <Gltf src="/three.gltf" />
        </mesh>
    );
};

export default Three;
