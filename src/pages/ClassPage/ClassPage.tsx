import React from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";
import ClassPageBody from "./ClassPageBody";


export interface ICalenderProps {
}

const ClassPage: React.FC<ICalenderProps> = () => {

    return (
        <>
            <div className="bg-white h-screen">
                <Navbar />
                <Sidebar />
                <ClassPageBody />
            </div>
        </>
    )
}

export default ClassPage
