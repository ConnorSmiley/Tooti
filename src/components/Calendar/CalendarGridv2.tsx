import React, {useState, useEffect} from "react";
import CalenderBox from "./CalenderBox";

// const createDates:any = () => {
//     let dates: object[] = []
//     for (let i = 1; i < 31; i++) {
//         let date = {day : i}
//         dates.push(date)
//     }
//
//     return dates
// }

export interface ICalendarGridv2Props {
}

const CalendarGridv2: React.FC<ICalendarGridv2Props> = () => {

    const [grid, setGrid] = useState([
        [null, null, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24, 25, 26],
        [27, 28, 29, 30, 31, null, null]])

    const [selected, setSelected] = useState<any>(
        new Array(grid.length)
            .fill("")
            .map(() => new Array(grid[0].length).fill(false))
    )

    function handleClick(rowIndex: number, colIndex: number) {

        // const newGrid = [...selected]
        const newGrid = new Array(grid.length).fill("")
            .map(() => new Array(grid[0].length).fill(false))

        if (grid[rowIndex][colIndex] !== null) {
            newGrid[rowIndex][colIndex] = true
            // } else if (null === selected) {
            //     return
        }

        setSelected(newGrid)
    }

    // function maybe((val:any) => {
    //     for (var i = 0; i < grid.length; i++) {
    //         for (var z = 0; z < grid[i].length; z++) {
    //             if (grid[i][z] == selected) {
    //                 return [...val, (val[i][z] = grid)];
    // maybe()


    return (
        <>
            <div className="flex flex-col">
                {grid.map((row, rowIndex: any) => (
                    <div key={rowIndex} className="flex">
                        {row.map((day, colIndex: any) => (
                            <div key={colIndex} className="w-10 h-10 flex justify-center items-center "
                                 onClick={() => handleClick(rowIndex, colIndex)}>
                                {selected[rowIndex][colIndex] ?
                                    <div className="">
                                        <div
                                            className="h-10 w-10 bg-red-500 text-black flex items-center justify-center">{day}</div>
                                    </div>
                                    :
                                    <div
                                        className="bg-green-500 flex justify-center items-center w-full h-full">{day}</div>}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>

    )
}
export default CalendarGridv2


// function newGrid(rowIndex:any, colIndex:any) {
//     const newGrid:any = [...grid]
//     newGrid[rowIndex][colIndex] = setSelected(true)
//     setGrid(newGrid)
// }

// const [prevSelected, setPrevSelected] = useState()
//
// function handleClicked(rowIndex: any, colIndex: any) {
//     // const clickedDate: any = grid[rowIndex][colIndex]
//     // const newGrid: any = [...selected]
//     const clickedDate = grid[rowIndex][colIndex]
//     const selectedDate = grid[rowIndex][colIndex]
//
//     if (clickedDate === selectedDate) {
//         return setSelected(true)
//     }
// }

// function update(rowIndex:any, colIndex:any) {
//     setSelected((prev:any) => {
//         const {grid} = prev
//         setSelected[rowIndex][colIndex] = true
//         return {...prev, grid}
//     })
// }
