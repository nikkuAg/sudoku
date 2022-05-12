import React from 'react'
import './grid.css'
import { InputBox } from './InputBox'

export const Grid = ({dimension}) => {
    let numberList = []
    for (let i = 1; i <= dimension; i++) {
        numberList.push(i)
    }
    return (
        <div className="sudoku" style={dimension == 4 ? {width: "12rem"} : dimension == 6 ? {width: "18rem", borderBottomWidth: "0rem"} : {width: "27rem"}}>
            {numberList.map((y,j) => {
                return (
                    <div className="row" key={j}>
                        {numberList.map((x,i) => {
                            let columnBorder = dimension==4 ? 2 : 3
                            let rowBorder = dimension==9 ? 3 : 2
                            return <InputBox key={i} value={x} border={i%columnBorder == columnBorder-1 ? "yes" : "no"} lowerBorder={j%rowBorder==rowBorder-1 ? "yes" : "no"} topBorder={j==0 ? "yes" : "no"} leftBorder={i==0 ? "yes" : "no"} />
                        })}
                    </div>
                )
            })}
            
        </div>
        
    )
}
