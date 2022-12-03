import React from "react";

export interface IWeeklyColorGridProps {

}

const WeeklyColorGrid: React.FC<IWeeklyColorGridProps> = () => {

    return (
        <>
            <div className="grid grid-flow-col flex flex-col">
                <div className="border border-pink-200 h-16 w-auto">
                </div>
            </div>
        </>
    )
}

export default WeeklyColorGrid
