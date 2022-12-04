import React from "react";
import RadioButton from "./radioButton";
import NameOfClass from "./nameofclass";
import ThreeDots from "./threeDots";
import Coloredcircles from "./coloredcircles";

export interface IavailabilityInputProps {
}

const AvailabilityInput: React.FC<IavailabilityInputProps> = (props) => {

    return (
        <>
            <div className="pt-8 pl-3">
                <div className="flex items-center ">
                    <div className="w-full h-10 flex items-center ">
                        <RadioButton />
                        <NameOfClass title="View All" />
                    </div>
                    <div className="flex items-center justify-end">
                        <ThreeDots />
                    </div>
                </div>
                <div className="flex items-center ">
                    <div className="w-full h-10 flex items-center">
                        <RadioButton />
                        <NameOfClass title="English Classes" />
                    </div>
                    <div className="flex items-center justify-end">
                        <Coloredcircles color="#B1B2FF" />
                        <ThreeDots />
                    </div>
                </div>
                <div className="flex items-center ">
                    <div className="w-full h-10 flex items-center">
                        <RadioButton />
                        <NameOfClass title="Conversation Classes" />
                    </div>
                    <div className="flex items-center justify-end">
                        <Coloredcircles color="red" />
                        <ThreeDots />
                    </div>
                </div>
                <div className="flex items-center ">
                    <div className="w-full h-10 flex items-center">
                        <RadioButton />
                        <NameOfClass title="Conversation Classes" />
                    </div>
                    <div className="flex items-center justify-end">
                        <Coloredcircles color="#56C795" />
                        <ThreeDots />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AvailabilityInput
