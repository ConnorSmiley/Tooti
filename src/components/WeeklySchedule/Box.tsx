import React from "react";


export interface IBoxProps {
    nanoId: any
    clickedBox: any
    wasClicked:any
}

const Box: React.FC<IBoxProps> = (props) => {
    const styles = {
        backgroundColor: props.clickedBox ? "black" : "white"
    }

    return (
        <>
            <div
                style={styles}
                onClick={props.wasClicked}
            >
                {props.nanoId}
                {props.clickedBox}
            </div>
        </>
    )
}

export default Box
