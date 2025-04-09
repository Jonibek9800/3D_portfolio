import { NavLink, Route, Routes } from "react-router-dom";
import Container from "../Container/Container";
import { Input } from "antd";
import Home from "../../pages/Home/Home";

const Header = () => {
    return (
        <>
            <Container>
                <header className="h-[100px] flex items-center justify-between text-white border-b-1 border-b-gray-400">
                    <h4 className="font-medium text-2xl">
                        <i className="text-blue-400">{`<C/>`}</i> Mahmudov J
                    </h4>
                    <nav className="flex justify-between w-[150px]">
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isPending ? "text-gray-400" : isActive ? "text-sky-500" : ""
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isPending ? "text-gray-400" : isActive ? "text-sky-500" : ""
                            }
                            to="/contacts"
                        >
                            Contacts
                        </NavLink>
                    </nav>
                    <div className="flex w-[150px] justify-between">
                        <a href="/">
                            <img
                                className="h-[34px]"
                                src="./src/assets/icons/github-logo.png"
                                alt="github"
                            />
                        </a>
                        <a href="/">
                            <img
                                className="h-[34px]"
                                src="./src/assets/icons/instagram.png"
                                alt="instagram"
                            />
                        </a>
                        <a href="/">
                            <img
                                className="h-[34px]"
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
