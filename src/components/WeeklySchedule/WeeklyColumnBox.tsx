import React from "react";

export interface IWeekColumnBoxProps {
    time?:number | string
}

const WeeklyColumnBox: React.FC<IWeekColumnBoxProps> = (props) => {
    const k: any[] = []

    function boxmap() {
        for (let i = 0; i <= 24; i++) {
            k.push(i)
        }
        return k
    }

    return (
        <>
            {/*<div className="w-20 h-12 border border-red-500">*/}
            <div>
                {boxmap().map(() => (
                    <div className="grid">
                        <div className="border border-gray-200 h-16 w-auto">
                        </div>
                    </div>
                ))}

            </div>
        </>
    )

}

export default WeeklyColumnBox


// grid template columns and use a hashmap with ""

// repeat(9, 1fr)
