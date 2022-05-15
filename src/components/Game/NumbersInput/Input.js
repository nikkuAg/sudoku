import React, {useState} from 'react'
import { InputButton } from './Button'
import { useNavigate } from 'react-router-dom'
import './input.css'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';


export const Input = ({dimension, setopen, setmessage, setseverity, validate, row, column, sudoku, score, setscore, scoreTable, setscoreTable, sudokuResult}) => {
    let numberList = []
    for (let i = 1; i <= dimension; i++) {
        numberList.push(i)
    }

    const [allowSubmit, setallowSubmit] = useState(false)
    const [open, setOpen] = useState(false);


    let navigate = useNavigate()

    const submit = () => {
        if(allowSubmit){
            setOpen(true)
        }
        else{
            setopen(true)
            setmessage("You have to complete the puzzle before submitting")
            setseverity("error")
        }
    }

    const handleClose = (temp) => {
        if(temp == 1){
            sudokuResult(scoreTable)
            navigate("/result")
        }            
        else
            setOpen(false)
    };

    const clearClick = () => {
        const element = document.getElementsByClassName("selected")
        if(element.length == 0){
            setopen(true)
            setmessage("No cell selected!!")
            setseverity("error")
        }        
        else if (element[0].value != "" && element[0].id != "input-filled" && element[0].id != "input-filled-error") {
            setopen(true)
            setmessage("Cannot delete this value!!")
            setseverity("info")
        }
        else if(element[0].value == ""){
            setopen(true)
            setmessage("This cell is already empty!!")
            setseverity("warning")
        }
        else{
            element[0].value = ""
            sudoku[row][column] = 0
        }
    }


    return (
        <div className='input-box'>
            <div className='input-buttons' style={dimension == 4 ? {width: "10rem"} : {width: "15rem"}}>
                {numberList.map((i) => {
                    return <InputButton value={i} key={i} setopen={setopen} setmessage={setmessage} setseverity={setseverity} validate={validate} row={row} column={column} sudoku={sudoku} score={score} setscore={setscore} scoreTable={scoreTable} setscoreTable={setscoreTable} setsubmit={setallowSubmit} />
                })}                
            </div>
            <div className='extra-buttons'>
                <Button variant="outlined" className="extra-button" color="error" endIcon={<DeleteIcon />} onClick={clearClick}>
                    Clear
                </Button>
                <Button variant="outlined" className="extra-button" color="success" endIcon={<DoneAllIcon />} onClick={submit}>
                    Submit
                </Button>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Do you want submit the puzzle?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => handleClose(0)}>Disagree</Button>
                    <Button onClick={() => handleClose(1)} autoFocus>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
