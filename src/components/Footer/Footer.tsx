const Footer = () => {
    return (
        <footer
            style={{ padding: "16px 0px" }}
            className="text-white flex justify-around items-center"
        >
            <p>© 2025 MahmudovJonibek. All rights reserved.</p>
            <div className="flex gap-3">
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
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
        </footer>
    );
};

export default Footer;
