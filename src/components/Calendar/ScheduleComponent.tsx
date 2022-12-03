import React from "react";
import TimeTable from "../../pages/ClassPage/TimeTable";

export interface IScheduleComponentProps {

}

const ScheduleComponent: React.FC<IScheduleComponentProps> = () => {

    return (
        <>
            <div className="pl-80 w-full h-auto">
                <div className=" h-16 bg-red-500 ml-16">
                    month and days
                </div>
                <div className="pl-16">
                <TimeTable />
                </div>
            </div>
        </>
    )
}

export default ScheduleComponent
