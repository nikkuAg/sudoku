import React from 'react'
import { InputButton } from './Button'
import './input.css'
import { Button } from '@mui/material'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';


export const Input = ({dimension, setopen, setmessage, setseverity, validate, row, column}) => {
    let numberList = []
    for (let i = 1; i <= dimension; i++) {
        numberList.push(i)
    }

    console.log(validate, row, column)


    return (
        <div className='input-box'>
            <div className='input-buttons' style={dimension == 4 ? {width: "10rem"} : {width: "15rem"}}>
                {numberList.map((i) => {
                    return <InputButton value={i} key={i} setopen={setopen} setmessage={setmessage} setseverity={setseverity} />
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
