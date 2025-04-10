import { Canvas } from "@react-three/fiber";
import SidePanel from "../../components/SidePanel/SidePanel";
import { Mail } from "lucide-react";
import { Sky, Stars } from "@react-three/drei";
import Container from "../../components/Container/Container";
import HackerRoom from "../../components/HackerRoom/HackerRoom";
import styles from "./Home.module.css";
import SkillBox from "../../components/SkillBox/SkillBox";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Footer from "../../components/Footer/Footer";
import { ILearningInfo, learningInfo } from "../../utils/constants";
import { Suspense } from "react";
import DevCardWithSuspense from "../../components/DevCard/DevCard";

const Home = () => {
    return (
        <>
            <SidePanel classes="fixed" />
            <main className={styles.main_wrap}>
                <div className={styles.header_title_wrap}>
                    <h1 className={styles.header_title}>Developer</h1>
                </div>
                {/* <div> */}
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
                            <meshStandardMaterial color={"#9dfaf5"} />
                        </mesh>
                        <Sky />
                        <ambientLight intensity={3} />
                        <directionalLight intensity={0.5} />
                    </Canvas>
                </Suspense>
                {/* </div> */}
                <div className={styles.info_section_wrap}>
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
                            <h3 className={styles.left_block_action_title}>Let's Talk </h3>{" "}
                            <div
                                onClick={() => {
                                    console.log("Talk");
                                }}
                                className={styles.left_block_action_btn}
                            >
                                <Mail className={styles.btn_icon} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.info_right_block_wrap}>
                        {learningInfo.map((item: ILearningInfo) => {
                            return (
                                <div className={styles.right_block_item_wrap} key={item.id}>
                                    <div className={styles.item_count}>{item.count}</div>
                                    <div className={styles.item_name}>{item.name}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <section className={styles.neonBg}>
                <Container>
                    {/* <div className="flex flex-col items-center mb-6 animate-bounce">
                        <div className="w-[1px] h-6 bg-cyan-300 mb-1" />
                        <div className="w-2 h-2 rounded-full bg-cyan-300" />
                    </div> */}
                    <span className={styles.abote_title}>Abote Me</span>
                    <p className={styles.aboute_info}>
                        <code className={styles.code_color}>&lt;p&gt;</code>
                        <br />
                        <span className={styles.aboute_info_title}>Hello!</span> <br /> My name is
                        Jonibek and I specialize in web developement that utilizes HTML, CSS, JS,
                        and REACT etc. I am a highly motivated individual and eternal optimist
                        dedicated to writing clear, concise, robust code that works. Striving to
                        never stop learning and improving. When I'm not coding, I am writing bolgs,
                        reading, or picking up some new hands-on art project like photography. I
                        like to have my perspective and belief systems challenged so that I see the
                        world through new eyes.
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
                            camera={{ position: [0, 2, 10], fov: 50 }}
                            style={{
                                height: "50vh",
                                backgroundColor: "#1e1f26",
                                borderRadius: 30,
                                marginTop: 64,
                            }}
                        >
                            <SkillBox
                                position={[-10, -2, 0]}
                                rotation={[-0.2, 0.7, 0]}
                                textureUrl="./src/assets/icons/html.png"
                                skillName="HTML 5"
                            />
                            <SkillBox
                                position={[-6.5, -2, 0]}
                                rotation={[-0.2, 0.55, 0]}
                                textureUrl="./src/assets/icons/csslogo.png"
                                skillName="Css 3"
                            />
                            <SkillBox
                                position={[-3, -2, 0]}
                                rotation={[-0.2, 0.3, 0]}
                                textureUrl="./src/assets/icons/javascript_logo.png"
                                skillName="JavaScript"
                            />
                            <SkillBox
                                position={[0.5, -2, 0]}
                                rotation={[-0.2, 0.0, 0]}
                                textureUrl="./src/assets/icons/react_logo.png"
                                skillName="React Js"
                            />
                            <SkillBox
                                position={[4, -2, 0]}
                                rotation={[-0.2, -0.3, 0]}
                                textureUrl="./src/assets/icons/next.js_logo.png"
                                skillName="Next Js"
                            />
                            <SkillBox
                                position={[7.5, -2, 0]}
                                rotation={[-0.2, -0.6, 0]}
                                textureUrl="./src/assets/icons/sass_logo.png"
                                skillName="Sass"
                            />
                            <SkillBox
                                position={[11, -2, 0]}
                                rotation={[-0.2, -0.8, 0]}
                                textureUrl="./src/assets/icons/typescript_logo.png"
                                skillName="TypeScript"
                            />
                            <pointLight position={[10, 10, 10]} />
                            <Stars
                                radius={100}
                                depth={50}
                                count={5000}
                                factor={4}
                                saturation={0}
                                fade
                            />
                            <ambientLight intensity={0.5} />
                            <EffectComposer>
                                <Bloom
                                    luminanceThreshold={0}
                                    luminanceSmoothing={0.9}
                                    height={300}
                                />
                            </EffectComposer>
                            {/* <OrbitControls  /> */}
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

                    {/* Мониторы */}
                    <div className="flex flex-col md:flex-row items-center text-7xl gap-10">
                        {/* Монитор с кодом */}
                        Скоро тут будут проекты
                        {/* <div className="bg-gray-800 rounded-lg p-4 shadow-lg w-[200px] h-[300px] overflow-hidden">
                            <pre className="text-xs text-green-400 overflow-y-auto whitespace-pre-wrap">
                                {`const hello = "world";
        function sayHi() {
                console.log(hello);
            }
            sayHi();`}
                            </pre>
                        </div>

                        <div className="relative bg-white rounded-lg shadow-lg w-[280px] h-[300px] flex items-center justify-center">
                            <img
                                src="https://via.placeholder.com/250x150"
                                alt="Project Screenshot"
                                className="object-contain"
                            />
                            <a
                                href="#"
                                className="absolute top-2 right-4 text-cyan-400 underline text-sm hover:text-cyan-300 transition"
                            >
                                View Website
                            </a>
                        </div> */}
                    </div>

                    {/* Стрелка вправо */}
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
