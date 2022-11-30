import {RecoilRoot} from "recoil";
import {BrowserRouter} from "react-router-dom";
import {Link} from "react-router-dom";
import "./styles.css";

export default function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <div className="App">
                    <h1>Hello interviewer</h1>
                    <h2>implement the following buttons</h2>
                    <section className="space-x-1.5">
                        <button
                            className="btn btn-ghost outline border-blue-500 rounded px-4 py-1 text-3xl m-4 hover:bg-pink-500 cursor-pointer font-bold ">
                            <Link
                                className="btn btn-ghost normal-case text-xl flex items-center justify-center"
                                to="/calendar"
                            >
                                Book a class
                            </Link>
                        </button>
                        <hr />
                        <button
                            className="bg-[#B1B2FF] btn btn-ghost outline border-blue-500 rounded px-4 py-1 text-3xl m-4 hover:bg-pink-500 cursor-pointer">
                            <Link className="btn btn-ghost normal-case text-xl flex items-center justify-center m-2" to="/class">
                                Start a class now (stretch goal)
                            </Link>
                        </button>
                    </section>
                    <p>check instructions on the Readme.md file</p>
                    <section>
                        colors:
                        <ul>
                            <li>Gray: #667085</li>
                            <li>Purple: #B1B2FF</li>
                            <li>Green: #56C795</li>
                        </ul>
                    </section>
                </div>
            </BrowserRouter>
        </RecoilRoot>
    );
}
