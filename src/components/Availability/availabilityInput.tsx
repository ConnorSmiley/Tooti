import React from "react";
import RadioButton from "../radioButton";
import NameOfClass from "./nameofclass";
import ThreeDots from "./threeDots";
import Coloredcircles from "./coloredcircles";

export interface IavailabilityInputProps {

}

const AvailabilityInput: React.FC<IavailabilityInputProps> = (props) => {

    return (
        <>
            <div className="pt-8">
                <div className="pl-2 h-10 flex items-center">
                    <RadioButton />
                    <NameOfClass title="View All" />
                    <ThreeDots />
                </div>
                <div className="pl-2 h-10 flex items-center">
                    <RadioButton />
                    <NameOfClass title="English Classes" />
                    <Coloredcircles color="#B1B2FF"/>
                    <ThreeDots />
                </div>

                <div className="pl-2 h-10 flex items-center">
                    <RadioButton />
                    <NameOfClass title="Conversation Classes" />
                    <Coloredcircles color="red"/>
                    <ThreeDots />

                </div>
                <div className="pl-2 h-10 flex items-center">
                    <RadioButton />
                    <NameOfClass title="Night Classes" />
                    <Coloredcircles color="#56C795"/>
                    <ThreeDots />
                </div>
            </div>
        </>
    )
}

export default AvailabilityInput
