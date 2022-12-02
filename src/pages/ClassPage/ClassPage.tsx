import React from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";
import BodyClassPage from "./BodyClassPage";


export interface ICalenderProps {
}

const ClassPage: React.FC<ICalenderProps> = () => {

    return (
        <>
            <Navbar />
            <Sidebar />
            <BodyClassPage />
        </>
    )
}

export default ClassPage
