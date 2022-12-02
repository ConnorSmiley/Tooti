import React from "react";

export interface ITimeZoneProps {
    textBold: string
    text: string
}

const TimeZone: React.FC<ITimeZoneProps> = (props) => {

    return (
        <>
            <div className="h-14 flex items-center justify-end">
                <div className="flex items-center justify-end">
                    <text className="text-gray-500 font-semibold pr-4">
                        {props.textBold + ":"}
                    </text>
                    <text className="text-gray-500 pr-6">
                        {props.text}
                    </text>
                    <div className="">
                        chevron
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeZone
