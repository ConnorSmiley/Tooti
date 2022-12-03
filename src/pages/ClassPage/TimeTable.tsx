import React from "react";
import FullDayComponent from "../../components/Calendar/FullDayComponent";

export interface ITimeTableProps {

}

const TimeTable: React.FC<ITimeTableProps> = () => {

    return (
        <>
            {/*<div className="border border-red-500 w-full overflow-y-scroll">*/}
            {/*</div>*/}
            <div className="w-full flex justify-evenly ">
                <FullDayComponent />
            </div>
        </>
    )
}

export default TimeTable
