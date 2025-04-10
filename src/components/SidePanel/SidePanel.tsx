import { useState } from "react";
import styles from "./SidePanel.module.css";


const SidePanel = ({ classes }: { classes: string }) => {
    const [active, setActive] = useState("1");


    const handleSetActive = (e) => {
        setActive(e.target.id);
    };

    return (
        <div className={`${styles.side_panel_wrap} ${classes}`}>
            <a
                onClick={handleSetActive}
                id="1"
                className={active === "1" ? styles.active_link : styles.side_panel_item}
                href="#"
            >
                <img
                    className={styles.link_img}
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
                id="2"
                className={active === "2" ? styles.active_link : styles.side_panel_item}
                href="#"
            >
                <img
                    className={styles.link_img}
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
                id="3"
                className={active === "3" ? styles.active_link : styles.side_panel_item}
                href="#"
            >
                <img
                    className={styles.link_img}
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
                id="4"
                className={active === "4" ? styles.active_link : styles.side_panel_item}
                href="#"
            >
                <img
                    className={styles.link_img}
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
                id="5"
                className={active === "5" ? styles.active_link : styles.side_panel_item}
                href="#"
            >
                <img
                    className={styles.link_img}
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
                id="6"
                className={active == "6" ? styles.active_link : styles.side_panel_item}
                href="#"
            >
                <img
                    className={styles.link_img}
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
