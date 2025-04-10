import { NavLink, Route, Routes } from "react-router-dom";
import Container from "../Container/Container";

import Home from "../../pages/Home/Home";
import styles from "./Header.module.css";


const Header = () => {
    return (
        <>
            <Container>
                <header className={styles.header_wrap}>
                    <h4 className={styles.header_title}>
                        <i className={styles.logo_wrap}>{`<C/>`}</i> Mahmudov J
                    </h4>
                    <nav className={styles.navbar}>
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isPending ? styles.nav_link : isActive ? styles.nav_link_active : ""
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isPending ? styles.nav_link : isActive ? styles.nav_link_active : ""

                            }
                            to="/contacts"
                        >
                            Contacts
                        </NavLink>
                    </nav>
                    <div className={styles.social_wrap}>
                        <a href="/">
                            <img
                                className={styles.social_icon}
                                src="./src/assets/icons/github-logo.png"
                                alt="github"
                            />
                        </a>
                        <a href="/">
                            <img
                                className={styles.social_icon}
                                src="./src/assets/icons/instagram.png"
                                alt="instagram"
                            />
                        </a>
                        <a href="/">
                            <img
                                className={styles.social_icon}
                                src="./src/assets/icons/telegram.png"
                                alt="telegram"
                            />
                        </a>
                    </div>
                </header>
            </Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacts" element={"Contacts"} />
            </Routes>
        </>
    );
};

export default Header;
