import React, {useState} from "react";
import {nanoid} from "nanoid";
import {Simulate} from "react-dom/test-utils";
import Box from "./Box";


export interface IWeekColumnProps {
}

const WeeklyColumn: React.FC<IWeekColumnProps> = (props) => {
    const [value, setValue] = useState<any[]>([])
    const [clicked, setClicked] = useState(false)
    const [box, setBox] = useState(gridLoop())

    const onClick = (e: any, nanoid: any) => {
        e.persist()
        setValue(nanoid)

        // console.log(nanoid)
    }

    function selected(nanoid: any, value: any) {
        if (value === nanoid) {
            setClicked(true)
        } else {
            null
        }
    }


    function clickBox(id: any) {
        setBox((prevClick: any) => prevClick.map((prevClicked: any) => {
            return prevClicked.id === id ? true : false

        }))

    }

    function gridLoop() {
        let numberOfWeeks = 7

        let k: any = []
        for (let i = 0; i < numberOfWeeks; i++) {
            k.push({
                clicked: false,
                id: nanoid()
            })
        }
        console.log(k)


        let p: any = []
        for (let i = 0; i < 48; i++) {
            p.push({
                clicked:false,
                id:nanoid()
            })
        }
        console.log(p)

        return k.map((id: any) => {
                return (
                    <>
                        <div key={id.id} onClick={id.id} className="flex flex-evenly w-full h-full">
                            <div className="w-full h-full">
                                {p.map((id: any, idx: any) => {
                                    return (
                                        <div onClick={(e) => onClick(e, nanoid)}
                                             key={id}
                                             className="border border-red-500 h-8 w-full">
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                )
            }
        )
    }


    return (
        <>
            <div className="w-full flex h-full">
                {gridLoop()}
            </div>
        </>
    )
}

export default WeeklyColumn
