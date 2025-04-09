import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div style={{margin: "auto"}}  className="max-w-[1024px]">
            {children}
        </div>
    );
};

export default Container;
