import { OrbitControls, Sky, Stars, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Mail } from "lucide-react";
import { Suspense } from "react";
import Container from "../components/Container/Container";
import DevCardWithSuspense from "../components/DevCard/DevCard";
import Footer from "../components/Footer/Footer";
import HackerRoom from "../components/HackerRoom/HackerRoom";
import SidePanel from "../components/SidePanel/SidePanel";
import SkillBox from "../components/SkillBox/SkillBox";
import { learningInfo } from "../utils/constans";
import styles from "./Home.module.css";
import RotatingGroup from "../components/RotationGroup/RotationGroup";
import { useNavigate } from "react-router-dom";

const skillModels = [
    { url: "/HTML.glb", key: "htmlScene" },
    { url: "/SCC.glb", key: "cssScene" },
    { url: "/Next.glb", key: "nextScene" },
    { url: "/React.glb", key: "reactScene" },
    { url: "/Js.glb", key: "jsScene" },
    { url: "/Ts.glb", key: "tsScene" },
    { url: "/Zustand.glb", key: "zustandScene" },
];

const Home = () => {
    const navigate = useNavigate();
    const scenes = Object.fromEntries(skillModels.map(({ url, key }) => [key, useGLTF(url).scene]));

    return (
        <>
            <SidePanel classes="fixed" />

            <main className={styles.main_wrap}>
                <div className={styles.header_title_wrap}>
                    <h1 className={styles.header_title}>Developer</h1>
                </div>

                <Suspense fallback="Loading..">
                    <Canvas
                        camera={{ fov: 75, position: [0, 1, 5] }}
                        style={{ height: "100vh", borderRadius: "25%" }}
                    >
                        <DevCardWithSuspense />
                        <mesh
                            castShadow
                            receiveShadow
                            position={[0, -3, 0]}
                            rotation={[-Math.PI * 0.5, 0, 0]}
                        >
                            <planeGeometry args={[30, 30]} />
                            <meshStandardMaterial color="#9dfaf5" />
                        </mesh>
                        <Sky />
                        <ambientLight intensity={3} />
                        <directionalLight intensity={0.5} />
                    </Canvas>
                </Suspense>

                <section className={styles.info_section_wrap}>
                    <div className={styles.info_left_block_wrap}>
                        <code className={styles.code_color}>&lt;h1&gt;</code>
                        <h1 className={styles.left_block_title}>
                            Hey <br /> I’m <br />
                            <span className="text-white">Frontend Developer</span>
                        </h1>
                        <code className={styles.code_color}>&lt;/h1&gt;</code>

                        <div className={styles.left_block_content_wrap}>
                            <code className={styles.code_color}>&lt;p&gt;</code>
                            <p className={styles.left_block_content}>
                                I help business grow by crafting amazing web experiences. If you’re
                                looking for a developer that likes to get stuff done,
                            </p>
                            <code className={styles.code_color}>&lt;/p&gt;</code>
                        </div>

                        <div className={styles.left_block_action_wrap}>
                            <h3 className={styles.left_block_action_title}>Let's Talk </h3>
                            <div
                                onClick={() => console.log("Talk")}
                                className={styles.left_block_action_btn}
                            >
                                <Mail className={styles.btn_icon} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.info_right_block_wrap}>
                        {learningInfo.map((item) => (
                            <div className={styles.right_block_item_wrap} key={item.id}>
                                <div className={styles.item_count}>{item.count}</div>
                                <div className={styles.item_name}>{item.name}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <section className={styles.neonBg}>
                <Container>
                    <span className={styles.abote_title}>About Me</span>
                    <p className={styles.aboute_info}>
                        <code className={styles.code_color}>&lt;p&gt;</code>
                        <br />
                        <span className={styles.aboute_info_title}>Hello!</span>
                        <br />
                        My name is Jonibek and I specialize in web development using HTML, CSS, JS,
                        and React. I am a motivated individual and eternal optimist dedicated to
                        writing clear, robust code. When I'm not coding, I write blogs, read, or
                        pursue creative projects like photography.
                        <br />
                        <code className={styles.code_color}>&lt;/p&gt;</code>
                    </p>

                    <div style={{ marginTop: 200 }}>
                        <Canvas style={{ height: "100vh", width: 700, margin: "auto" }}>
                            <HackerRoom />
                            <ambientLight intensity={0.5} />
                            <directionalLight intensity={1.5} position={[5, 5, 5]} />
                        </Canvas>
                    </div>
                </Container>
            </section>

            <section className={`${styles.skillsBg} relative`}>
                <div className={styles.skills_content_wrap}>
                    <div className={styles.icon_wrap}>
                        <code className={styles.icon}>&lt;/&gt;</code>
                    </div>

                    <div className="flex flex-col items-center mb-6 animate-bounce">
                        <div className="w-[1px] h-6 bg-cyan-300 mb-1" />
                        <div className="w-2 h-2 rounded-full bg-cyan-300" />
                    </div>

                    <h2 className={styles.skills_title}>Skills</h2>
                    <p className={styles.skills_content}>
                        I am striving to never stop learning and improving
                    </p>

                    <Suspense fallback="Loading...">
                        <Canvas
                            camera={{ position: [0, 2, 7], fov: 20 }}
                            style={{
                                height: "100vh",
                                backgroundColor: "#1e1f26",
                                borderRadius: 30,
                                marginTop: 64,
                            }}
                        >
                            <OrbitControls />

                            <group>
                                <SkillBox
                                    emmisivColor="#eb5b34"
                                    scene={scenes.htmlScene}
                                    scale={0.2}
                                    glow
                                    position={[0, 0, 0]}
                                    textureUrl="./src/assets/icons/html.png"
                                    skillName="HTML 5"
                                />

                                <RotatingGroup speed={0.004}>
                                    <>
                                        <SkillBox
                                            onClick={() => navigate("/css")}
                                            emmisivColor="#72118c"
                                            glow
                                            scene={scenes.cssScene}
                                            scale={0.3}
                                            position={[0.4, 0.1, 0]}
                                            textureUrl="./src/assets/icons/csslogo.png"
                                            skillName="CSS 3"
                                        />
                                        <SkillBox
                                            scene={scenes.jsScene}
                                            glow
                                            emmisivColor="#e3b624"
                                            scale={0.06}
                                            position={[-0.5, -0.2, 0]}
                                            textureUrl="./src/assets/icons/javascript_logo.png"
                                            skillName="JavaScript"
                                        />

                                        <RotatingGroup speed={0.005}>
                                            <>
                                                <SkillBox
                                                    scene={scenes.reactScene}
                                                    glow
                                                    emmisivColor="#3056a1"
                                                    scale={0.1}
                                                    position={[-0.6, 0.3, 0]}
                                                    textureUrl="./src/assets/icons/react_logo.png"
                                                    skillName="React JS"
                                                />
                                                <SkillBox
                                                    scene={scenes.nextScene}
                                                    glow
                                                    emmisivColor="#6d6f73"
                                                    scale={0.07}
                                                    position={[0.6, -0.2, 0]}
                                                    textureUrl="./src/assets/icons/next.js_logo.png"
                                                    skillName="Next.js"
                                                />
                                                {/* <SkillBox
                                                    scale={1}
                                                    position={[-7, -2, 0]}
                                                    textureUrl="./src/assets/icons/sass_logo.png"
                                                    skillName="Sass"
                                                /> */}
                                                <SkillBox
                                                    scene={scenes.tsScene}
                                                    glow
                                                    emmisivColor="#3e3ec2"
                                                    scale={0.07}
                                                    position={[0.8, 0.3, 0]}
                                                    textureUrl="./src/assets/icons/typescript_logo.png"
                                                    skillName="TypeScript"
                                                />
                                                <SkillBox
                                                    scene={scenes.zustandScene}
                                                    glow
                                                    emmisivColor="#a38c5d"
                                                    scale={0.25}
                                                    position={[1, 0, 0]}
                                                    textureUrl="./src/assets/icons/typescript_logo.png"
                                                    skillName="Zustand"
                                                />
                                            </>
                                        </RotatingGroup>
                                    </>
                                </RotatingGroup>
                            </group>

                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} />
                            <Stars
                                radius={100}
                                depth={50}
                                count={5000}
                                factor={4}
                                saturation={0}
                                fade
                            />
                            <EffectComposer>
                                <Bloom
                                    luminanceThreshold={0}
                                    luminanceSmoothing={0.9}
                                    height={300}
                                />
                            </EffectComposer>
                        </Canvas>
                    </Suspense>
                </div>
            </section>

            <section className={styles.project_wraper}>
                <div className="flex flex-col items-center mb-6 animate-bounce">
                    <div className="w-[1px] h-6 bg-cyan-300 mb-1" />
                    <div className="w-2 h-2 rounded-full bg-cyan-300" />
                </div>

                <h2 className={styles.project_title}>Works</h2>
                <p className={styles.project_content}>
                    I had the pleasure of working with these awesome projects
                </p>

                <div className="flex items-center gap-6 relative">
                    <button className="w-10 h-10 rounded-full bg-gray-700 hover:bg-cyan-500 flex items-center justify-center text-white text-xl">
                        &#8592;
                    </button>
                    <div className="flex flex-col md:flex-row items-center text-7xl gap-10">
                        Скоро тут будут проекты
                    </div>
                    <button className="w-10 h-10 rounded-full bg-gray-700 hover:bg-cyan-500 flex items-center justify-center text-white text-xl">
                        &#8594;
                    </button>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;
