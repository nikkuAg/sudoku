import React from 'react'
import { InputButton } from './Button'
import './input.css'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';


export const Input = ({dimension, setopen, setmessage, setseverity, validate, row, column, sudoku, score, setscore, scoreTable, setscoreTable}) => {
    let numberList = []
    for (let i = 1; i <= dimension; i++) {
        numberList.push(i)
    }

    return (
        <div className='input-box'>
            <div className='input-buttons' style={dimension == 4 ? {width: "10rem"} : {width: "15rem"}}>
                {numberList.map((i) => {
                    return <InputButton value={i} key={i} setopen={setopen} setmessage={setmessage} setseverity={setseverity} validate={validate} row={row} column={column} sudoku={sudoku} score={score} setscore={setscore} scoreTable={scoreTable} setscoreTable={setscoreTable} />
                })}                
            </div>
            <div className='extra-buttons'>
                <Button variant="outlined" className="extra-button" endIcon={<DeleteIcon />}>
                    Clear
                </Button>
            </div>
        </div>
    )
}
