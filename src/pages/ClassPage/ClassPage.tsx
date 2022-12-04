import React from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";
import ClassBody from "./ClassBody";


export interface ICalenderProps {
}

const ClassPage: React.FC<ICalenderProps> = () => {

    return (
        <>
            <div className="bg-white h-screen">
                <Navbar />
                <Sidebar />
                <ClassBody />
            </div>
        </>
    )
}

export default ClassPage
