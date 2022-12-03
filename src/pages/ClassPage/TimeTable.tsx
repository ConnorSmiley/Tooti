import React from "react";
import WeeklyColumnComponent from "../../components/WeeklySchedule/WeeklyColumnComponent";

export interface ITimeTableProps {

}

const TimeTable: React.FC<ITimeTableProps> = () => {

    return (
        <>
            {/*<div className="border border-red-500 w-full overflow-y-scroll">*/}
            {/*</div>*/}
            <div className="w-full flex justify-evenly ">
                <WeeklyColumnComponent />
            </div>
        </>
    )
}

export default TimeTable
