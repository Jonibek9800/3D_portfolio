import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import CssGamePlatform from "./pages/CssGamePlatform/CssGamePlatform";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/css" element={<CssGamePlatform />} />
            </Routes>
            <Header />
        </div>
    );
}

export default App;
