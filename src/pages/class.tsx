import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";


export interface ICalenderProps {
}

const Class: React.FC<ICalenderProps> = () => {

    return (
        <>
            <Navbar />
            <aside className="absolute left-0">
                <Sidebar />
            </aside>
            <body>
            <header>
            </header>
            <div>
            </div>
            </body>
        </>
    )
}

export default Class
