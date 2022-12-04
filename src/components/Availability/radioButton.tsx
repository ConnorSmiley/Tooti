import React, {useState} from "react";

export interface IradioButtonProps {

}

const RadioButton: React.FC<IradioButtonProps> = () => {
    const [click, setClick] = useState(true)

    return (
        <>
            {click ? (
                    // <div className="ml-[5px] border border-green-500 rounded-full h-4 w-4 flex justify-center items-center">
                    //     <div className="h-7 w-7 bg-green-500 rounded-full flex items-center justify-center opacity-20">
                    //         <button
                    //             className='h-4 w-full bg-[#dff1e8] rounded-full flex items-center justify-center'
                    //             onClick={() => setClick(!click)}
                    //         >
                    //             <div
                    //                 className=" bg-[#dff1e8] items-center justify-center h-4 w-4 border border-[#56C795] border-2 rounded-full">
                    //                 <div className="bg-white w-2 h-2 flex justify-center items-center rounded-full">
                    //                 </div>
                    //             </div>
                    //         </button>
                    //     </div>
                    // </div>


                    <div className="-mr-[7px]">
                        <button
                            className='h-7 w-7 bg-[#dff1e8] rounded-full flex items-center justify-center'
                            onClick={() => setClick(!click)}>
                            <div
                                className="flex bg-[#dff1e8] items-center justify-center h-5 w-5 w-full h-full border-[#56C795] border-2 rounded-full">
                                <div className="bg-white w-5 h-4 rounded-full flex items-center justify-center"
                                     onClick={() => setClick(!click)}>

                                </div>
                            </div>
                        </button>
                    </div>

                ) :

                <div className="-mr-[7px]">
                    <button
                        className='h-7 w-7 bg-[#dff1e8] rounded-full flex items-center justify-center'
                        onClick={() => setClick(!click)}>
                        <div
                            className="flex bg-[#dff1e8] items-center justify-center h-5 w-5 w-full h-full border-[#56C795] border-2 rounded-full">
                            <div className=" w-2 h-2 flex justify-center items-center rounded-full"
                                 onClick={() => setClick(!click)}>
                                <div className="h-2 w-2 bg-[#56C795] rounded-full">

                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            }
        </>
    )
}

export default RadioButton



