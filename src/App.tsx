import {RecoilRoot} from "recoil";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./styles.css";
import Greeting from "./pages/greeting";
import Calendar from "./pages/ClassPage/ClassPage";
import ClassPage from "./pages/ClassPage/ClassPage";

export default function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Greeting/>} />
                    <Route path="calendar" element={<Calendar />}/>
                    <Route path="class" element={<ClassPage />}/>
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}
