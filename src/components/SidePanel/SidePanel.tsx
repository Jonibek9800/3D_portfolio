import { useState } from "react";

const SidePanel = ({ classes }: { classes: string }) => {
    const [active, setActive] = useState("1");

    interface HandleSetActiveEvent extends React.MouseEvent<HTMLAnchorElement> {
        target: HTMLAnchorElement & EventTarget;
    }

    const handleSetActive = (e: HandleSetActiveEvent): void => {
        setActive(e.target.id);
    };

    return (
        <div
            style={{ marginTop: 40, marginLeft: 75 }}
            className={`z-10 w=[64px] h-[376px] flex flex-col justify-between  ${classes} border-2 border-white rounded-[40px]`}
        >
            <a
                onClick={handleSetActive}
                style={{ padding: 10, margin: 2 }}
                id="1"
                className={active === "1" ? "bg-white rounded-[50%]" : "cursor-pointer"}
                href="#"
            >
                <img
                    className="h-[24px]"
                    src={
                        active === "1"
                            ? "./src/assets/icons/icon-grid.png"
                            : "./src/assets/icons/icon-grid-w.png"
                    }
                    alt="Grid"
                />
            </a>
            <a
                onClick={handleSetActive}
                style={{ padding: 10, margin: 2 }}
                id="2"
                className={active === "2" ? "bg-white rounded-[50%]" : "cursor-pointer"}
                href="#"
            >
                <img
                    className="h-[24px]"
                    src={
                        active === "2"
                            ? "./src/assets/icons/icon-user-b.png"
                            : "./src/assets/icons/icon-user.png"
                    }
                    alt="User"
                />
            </a>
            <a
                onClick={handleSetActive}
                style={{ padding: 10, margin: 2 }}
                id="3"
                className={active === "3" ? "bg-white rounded-[50%]" : "cursor-pointer"}
                href="#"
            >
                <img
                    className="h-[24px]"
                    src={
                        active === "3"
                            ? "./src/assets/icons/icon-code-b.png"
                            : "./src/assets/icons/icon-code.png"
                    }
                    alt="Code"
                />
            </a>
            <a
                onClick={handleSetActive}
                style={{ padding: 10, margin: 2 }}
                id="4"
                className={active === "4" ? "bg-white rounded-[50%]" : "cursor-pointer"}
                href="#"
            >
                <img
                    className="h-[24px]"
                    src={
                        active === "4"
                            ? "./src/assets/icons/icon-monitor-b.png"
                            : "./src/assets/icons/icon-monitor.png"
                    }
                    alt="Monitor"
                />
            </a>
            <a
                onClick={handleSetActive}
                style={{ padding: 10, margin: 2 }}
                id="5"
                className={active === "5" ? "bg-white rounded-[50%]" : "cursor-pointer"}
                href="#"
            >
                <img
                    className="h-[24px]"
                    src={
                        active === "5"
                            ? "./src/assets/icons/icon-edit-b.png"
                            : "./src/assets/icons/icon-edit.png"
                    }
                    alt="Edit"
                />
            </a>
            <a
                onClick={handleSetActive}
                style={{ padding: 10, margin: 2 }}
                id="6"
                className={active == "6" ? "bg-white rounded-[50%]" : "cursor-pointer"}
                href="#"
            >
                <img
                    className="h-[24px]"
                    src={
                        active === "6"
                            ? "./src/assets/icons/icon-mail-b.png"
                            : "./src/assets/icons/icon-mail.png"
                    }
                    alt="Mail"
                />
            </a>
        </div>
    );
};

export default SidePanel;
