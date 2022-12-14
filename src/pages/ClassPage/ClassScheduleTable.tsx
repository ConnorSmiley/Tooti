import React from "react";
import WeeklyColumnComponent from "../../components/WeeklySchedule/WeeklyColumnComponent";

export interface ITimeTableProps {

}

const ClassScheduleTable: React.FC<ITimeTableProps> = () => {

    return (
        <>
            <div className="w-full flex justify-evenly ">
                <WeeklyColumnComponent />
            </div>
        </>
    )
}

export default ClassScheduleTable
