import React, {useState} from "react";

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

        const newGrid = new Array(grid.length).fill("")
            .map(() => new Array(grid[0].length).fill(false))

        if (grid[rowIndex][colIndex] !== null) {
            newGrid[rowIndex][colIndex] = true
        }

        setSelected(newGrid)
    }

    return (
        <>
            <div className="flex flex-col">
                {grid.map((row, rowIndex: any) => (
                    <div key={rowIndex} className="flex">
                        {row.map((day, colIndex: any) => (
                            <div key={colIndex} className="w-12 h-12 flex justify-center items-center "
                                 onClick={() => handleClick(rowIndex, colIndex)}>
                                {selected[rowIndex][colIndex] ?
                                    <div className="">
                                        <div
                                            className="text-sm h-10 w-10 bg-[#56C795] flex items-center justify-center rounded-full font-thin text-white">{day}</div>
                                    </div>
                                    :
                                    <div
                                        className="text-sm font-thin text-gray-500 flex justify-center items-center w-full h-full">{day}</div>}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>

    )
}
export default CalendarGridv2
