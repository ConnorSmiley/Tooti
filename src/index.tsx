import {StrictMode} from "react";
import * as ReactDOMClient from "react-dom/client";
import "./styles.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById("root");
// @ts-ignore
const root = ReactDOMClient.createRoot(rootElement);

root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
