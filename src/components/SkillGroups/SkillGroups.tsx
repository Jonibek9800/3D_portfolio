import { useGLTF } from "@react-three/drei";
import RotatingGroup from "../RotationGroup/RotationGroup";
import SkillBoxWithSuspence from "../SkillBox/SkillBox";

const skillModels = [
    { url: "/HTML.glb", key: "htmlScene" },
    { url: "/SCC.glb", key: "cssScene" },
    { url: "/Next.glb", key: "nextScene" },
    { url: "/React.glb", key: "reactScene" },
    { url: "/Js.glb", key: "jsScene" },
    { url: "/Ts.glb", key: "tsScene" },
    { url: "/Zustand.glb", key: "zustandScene" },
];

const SkillGroups = (props) => {
    const scenes = Object.fromEntries(skillModels.map(({ url, key }) => [key, useGLTF(url).scene]));
    return (
        <group {...props}>
            <SkillBoxWithSuspence
                emmisivColor="#eb5b34"
                scene={scenes.htmlScene}
                scale={1}
                glow
                position={[0, 0, 0]}
                textureUrl="./src/assets/icons/html.png"
                skillName="HTML 5"
            />

            <RotatingGroup speed={0.004}>
                <>
                    <SkillBoxWithSuspence
                        onClick={() => navigate("/css")}
                        emmisivColor="#72118c"
                        glow
                        scene={scenes.cssScene}
                        scale={1.3}
                        position={[4, 1, 0]}
                        textureUrl="./src/assets/icons/csslogo.png"
                        skillName="CSS 3"
                    />
                    <SkillBoxWithSuspence
                        scene={scenes.jsScene}
                        glow
                        emmisivColor="#e3b624"
                        scale={0.8}
                        position={[-5, -2, 0]}
                        textureUrl="./src/assets/icons/javascript_logo.png"
                        skillName="JavaScript"
                    />

                    <RotatingGroup speed={0.005}>
                        <>
                            <SkillBoxWithSuspence
                                scene={scenes.reactScene}
                                glow
                                emmisivColor="#3056a1"
                                scale={1.1}
                                position={[-6, 3, 0]}
                                textureUrl="./src/assets/icons/react_logo.png"
                                skillName="React JS"
                            />
                            <SkillBoxWithSuspence
                                scene={scenes.nextScene}
                                glow
                                emmisivColor="#6d6f73"
                                scale={0.77}
                                position={[6, -2, 0]}
                                textureUrl="./src/assets/icons/next.js_logo.png"
                                skillName="Next.js"
                            />
                            {/* <SkillBox
                        scale={1}
                        position={[-7, -2, 0]}
                        textureUrl="./src/assets/icons/sass_logo.png"
                        skillName="Sass"
                    /> */}
                            <SkillBoxWithSuspence
                                scene={scenes.tsScene}
                                glow
                                emmisivColor="#3e3ec2"
                                scale={0.77}
                                position={[8, 3, 0]}
                                textureUrl="./src/assets/icons/typescript_logo.png"
                                skillName="TypeScript"
                            />
                            <SkillBoxWithSuspence
                                scene={scenes.zustandScene}
                                glow
                                emmisivColor="#a38c5d"
                                scale={2.25}
                                position={[1.5, 0, 0]}
                                textureUrl="./src/assets/icons/typescript_logo.png"
                                skillName="Zustand"
                            />
                        </>
                    </RotatingGroup>
                </>
            </RotatingGroup>
        </group>
    );
};

export default SkillGroups;
