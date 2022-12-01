import React from "react";

export interface IthreeDotsProps {

}

const ThreeDots: React.FC<IthreeDotsProps> = () => {

    return (
        <>
            <div className="flex flex-col absolute right-3 space-y-1">
                <div className="bg-gray-400 h-1 w-1 rounded-full" />
                <div className="bg-gray-400 h-1 w-1 rounded-full" />
                <div className="bg-gray-400 h-1 w-1 rounded-full" />
            </div>
        </>
    )
}

export default ThreeDots
