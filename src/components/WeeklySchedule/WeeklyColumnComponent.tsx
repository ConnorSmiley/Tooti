import React from "react";
import WeeklyColumn from "./WeeklyColumn";
import WeeklyColumnBoxNoBorder from "./WeeklyColumnBoxNoBorder";

export interface IFullDayComponentProps {

}

const WeeklyColumnComponent: React.FC<IFullDayComponentProps> = () => {

    return (
        <>
            <div className="flex flex-1 justify-between h-[46rem] overflow-y-scroll pl-12 mt-3 mb-4">
                <WeeklyColumnBoxNoBorder />
                <WeeklyColumn />
                <WeeklyColumn />
                <WeeklyColumn />
                <WeeklyColumn />
                <WeeklyColumn />
                <WeeklyColumn />
                <WeeklyColumn />
            </div>

        </>
    )
}

export default WeeklyColumnComponent
