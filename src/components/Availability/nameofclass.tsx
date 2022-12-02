import React from "react";


export interface ItextProps {
    title:string
}

const NameOfClass: React.FC<ItextProps> = (props) => {

    return (
        <>
            <div className="ml-3">
                {props.title}
            </div>
        </>
    )
}

export default NameOfClass
