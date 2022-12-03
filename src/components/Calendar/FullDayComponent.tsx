import React from "react";
import WeekColumn from "../Schedule/WeekColumn";
import WeekColumnBoxNoBorder from "../Schedule/WeekColumnBoxNoBorder";

export interface IFullDayComponentProps {

}

const FullDayComponent: React.FC<IFullDayComponentProps> = () => {

    return (
        <>
            <div className="flex flex-1  justify-between h-[46rem] overflow-y-scroll">
                <div className="w-full mb-8">
                    <WeekColumnBoxNoBorder />
                </div>
                <WeekColumn />
                <WeekColumn />
                <WeekColumn />
                <WeekColumn />
                <WeekColumn />
                <WeekColumn />
                <WeekColumn />
                <WeekColumn />
            </div>

        </>
    )
}

export default FullDayComponent
