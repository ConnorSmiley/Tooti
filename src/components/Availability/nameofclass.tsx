import React from "react";


export interface ItextProps {
    title:string
}

const NameOfClass: React.FC<ItextProps> = (props) => {

    return (
        <>
            <div className="pl-4">
                {props.title}
            </div>
        </>
    )
}

export default NameOfClass
