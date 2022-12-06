import React from "react";
import WeeklyColumn from "./WeeklyColumn";
import WeeklyColumnBoxNoBorder from "./WeeklyColumnBoxNoBorder";
import WeeklyColumn2 from "./WeeklyColumn2";

export interface IFullDayComponentProps {

}

const WeeklyColumnComponent: React.FC<IFullDayComponentProps> = () => {

    return (
        <>
            <div className="flex flex-1 justify-between h-[34rem] overflow-y-scroll pl-12 mt-3 mb-4">
                <div className="">
                    <WeeklyColumnBoxNoBorder />
                </div>
                <div className="flex flew-col w-full h-full">
                    <WeeklyColumn />
                    {/*<WeeklyColumn2 />*/}
                </div>
            </div>

        </>
    )
}

export default WeeklyColumnComponent
