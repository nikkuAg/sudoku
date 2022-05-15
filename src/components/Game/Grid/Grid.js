import React, { useEffect, useState } from 'react'
import { SudokuGrid } from './SudokuGrid'
import LoadingButton from '@mui/lab/LoadingButton'
import { InputBox } from './InputBox'
import './grid.css'

export const Grid = ({dimension, difficulty, loading}) => {
    const [sudokuNumbersSol, setsudokuNumbersSol] = useState([])
    const [sudokuNumbers, setsudokuNumbers] = useState([])
    

    useEffect(() => {
      SudokuGrid(setsudokuNumbersSol, setsudokuNumbers, dimension, difficulty)
    }, [])

    useEffect(() => {
      if(sudokuNumbers.length != 0 ){
          loading(false)
      }
      else{
          loading(true)
      }
    
    }, [sudokuNumbers])
    
    
    return (
        <>
        {sudokuNumbers.length==0 ? 
                    <LoadingButton loading />
                    :            
                    <div className="sudoku" style={dimension == 4 ? {width: "12rem"} : dimension == 6 ? {width: "18rem", borderBottomWidth: "0rem"} : {width: "27rem"}}>
                        {sudokuNumbers.map((row,i) => {
                            return (
                                <>
                                    <div className="row" key={i}>
                                        {row.map((column,j) => {
                                            let columnBorder = dimension==4 ? 2 : 3
                                            let rowBorder = dimension==9 ? 3 : 2
                                            return <InputBox key={j} value={column != 0 ? column : null} border={j%columnBorder == columnBorder-1 ? "yes" : "no"} lowerBorder={i%rowBorder==rowBorder-1 ? "yes" : "no"} topBorder={i==0 ? "yes" : "no"} leftBorder={j==0 ? "yes" : "no"} />
                                        })}
                                    </div>
                                </>
                            )
                        })}
                    </div>  
            }
        </>     
    )
}
