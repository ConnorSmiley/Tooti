import React, {useState} from "react";
import {nanoid} from "nanoid";
import Box from "./Box";
import {use} from "i18next";


export interface IWeeklyColumn2Props {

}


const WeeklyColumn2: React.FC<IWeeklyColumn2Props> = () => {
    const [clickedBox, setClickBox] = useState<any>()
    const [boxState, setBoxState] = useState(generateBoxes())

    function wasClicked(id: any) {
        setClickBox(clickedBox.map((boxes: any) => {
            return boxes.id === id ? true : false
        }))

    }


    function generateBoxes() {

        const generatedBox = []
        for (let i = 0; i < 7; i++) {

            generatedBox.push(i)

        }

        console.log(generatedBox)


        const rows = []
        for (let i = 0; i < 48; i++) {
            rows.push({
                clicked: false,
                id: nanoid()

            })
        }


        let p: any = []
        for (let i = 0; i < 48; i++) {
            p.push(i)
        }


        return generatedBox.map(() => {
            <>
                <div className="flex flex-col h-full w-full border border-red-500">
                    <div className="border border-red-500">
                        adffdf
                    </div>
                    {p.map(() => {
                            return (
                                <>
                                    <div className="border border-green-500">
                                        dfadfd
                                    </div>
                                </>
                            )
                        }
                    )}
                </div>
            </>
        })

        // function holdBox(id: any) {
        //     setBoxState(boxState => boxState.map(box => {
        //         return box.id === id ? true : false
        //     }))
        //
        // }


        const boxesId = generatedBox.map(box => {
            // <Box
            //     key={box.id}
            //     // // clicked={box.clicked}
            //     // holdBox={() => holdBox(box.id)}
            // />


        })


    }


    return (
        <>
            <div className="w-full flex h-full">
                {generateBoxes}
            </div>

        </>
    )
}

export default WeeklyColumn2


// return generatedBox.map((box:number) => {
//     return (
//         <>
//             <div
//             key={box.id}
//             >
//                     {p.map((id: any, idx: any) => {
//                         return (
//                             <div
//                                 key={id}
//                                 className="border border-red-500 h-8 w-full">
//                             </div>
//                         )
//                     })}
//             </div>
//
//
//         </>
//     )
// })
//

