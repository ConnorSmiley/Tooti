import React from "react";


export interface ItextProps {
    title:string
}

const NameOfClass: React.FC<ItextProps> = (props) => {

    return (
        <>
            <text className="ml-3">
                {props.title}
            </text>
        </>
    )
}

export default NameOfClass
