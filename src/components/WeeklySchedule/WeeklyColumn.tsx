import React, {useState} from "react";
import WeeklyWeekStatic1 from "./WeeklyStaticComponents/WeeklyWeekStatic1";
import WeeklyWeekStatic2 from "./WeeklyStaticComponents/WeeklyWeekStatic2";
import WeeklyWeekStatic3 from "./WeeklyStaticComponents/WeeklyWeekStatic3";
import WeeklyWeekStatic4 from "./WeeklyStaticComponents/WeeklyWeekStatic4";
import WeeklyWeekStatic5 from "./WeeklyStaticComponents/WeeklyWeekStatic5";
import WeeklyWeekStatic6 from "./WeeklyStaticComponents/WeeklyWeekStatic6";
import WeeklyWeekStatic7 from "./WeeklyStaticComponents/WeeklyWeekStatic7";
import {use} from "i18next";
import CalenderBox from "../Calendar/CalenderBox";


export interface IWeekColumnProps {
}

const WeeklyColumn: React.FC<IWeekColumnProps> = (props) => {
    const [value, setValue] = useState<number[]>([])

    // let numberOfWeeks = 168
    //
    // numberOfWeeks.map(() => {
    //     return (
    //         <>
    //             <div className="border border-gray-500 h-12 w-12">
    //                 aaa
    //             </div>
    //         </>
    //     )
    //
    // })

    function gridLoop() {
        // for (let i = 0; i < numberOfWeeks; i++) {
        let numberOfWeeks = 7

        let k: any = []
        for (let i = 0; i < numberOfWeeks; i++) {
            k.push(i)
        }

        let p: any = []
        for (let i = 0; i < 24; i++) {
            p.push(i)
        }

        let s: any = []
        for (let i = 0; i < 48; i++) {
            s.push(i)
        }

        return k.map(() => {
                return (
                    <>
                        <div className="flex flex-evenly w-full h-full">
                            <div className="w-full h-full">
                                {p.map((val: any, idx: any) => {
                                    return (
                                        <div key={idx} className="border border-pink-500 h-16 w-full">
                                            <div onClick={idx}>
                                                dfjd
                                            </div>
                                            {console.log(idx)}

                                            <div>
                                                aaaaa
                                            </div>
                                            {/*{s.map((val:any, idx:any) => {*/}
                                            {/*    return (*/}
                                            {/*        <div key={idx} className="border ">*/}
                                            {/*        </div>*/}
                                            {/*    )*/}
                                            {/*})}*/}

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


    // function clickVal(value: any) {
    //
    // }

    // const mapped = x.map((val, ind) => {
    //     value.push(val)
    //     console.log(val)
    //
    //     return (
    //         <>
    //             <div className="">
    //                 <div key={val} onClick={() => clickVal(val)} className="flex w-full h-16 flex-col" >
    //                     {val}
    //                 </div>
    //             </div>
    //         </>
    //     )
    // })


    return (
        <>
            <div className="w-full flex h-full">
                {/*<WeeklyWeekStatic1 name="a" />*/}
                {/*<WeeklyWeekStatic2 name="a" />*/}
                {/*<WeeklyWeekStatic3 name="a" />*/}
                {/*<WeeklyWeekStatic4 name="a" />*/}
                {/*<WeeklyWeekStatic5 name="a" />*/}
                {/*<WeeklyWeekStatic6 name="a" />*/}
                {/*<WeeklyWeekStatic7 name="a" />*/}
                {gridLoop()}
            </div>
        </>
    )
}

export default WeeklyColumn
