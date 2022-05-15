import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import {Navbar} from '../Navbar/Navbar'
import { Grid } from './Grid/Grid'
import Container from '@mui/material/Container'
import { Input } from './NumbersInput/Input'
import LoadingButton from '@mui/lab/LoadingButton'
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import { Alert, Button, Snackbar } from '@mui/material'

export const Game = () => {
    let param = useParams()
    const grid = param.grid
    const difficulty = param.diff

    const [loading, setloading] = useState(true)
    const [open, setopen] = useState(false)
    const [message, setmessage] = useState("")
    const [severity, setseverity] = useState("")
    const [row, setrow] = useState(-1)
    const [column, setcolumn] = useState(-1)
    const [validateSudoku, setvalidateSudoku] = useState([])

    const handleClose = () => {
      setopen(false)
    }

  return (
    <>
      <Navbar />
      {loading ? 
        <></> 
        :
        <div className='extra-buttons'>                
          <Button variant="outlined" className="extra-button score" disabled startIcon={<ScoreboardIcon />}>
              Your Score : {100}
          </Button>
        </div>
      }
      <Container className="game-container">
        <Grid dimension={grid} difficulty={difficulty} loading={setloading} sudoku={setvalidateSudoku} setrow={setrow} setcolumn={setcolumn} />
        {loading ? 
          <>
            <LoadingButton loading />
          </>
        :
          <>
            <Input dimension={grid} setopen={setopen} setmessage={setmessage} setseverity={setseverity} validate={validateSudoku} row={row} column={column} />
          </>
        }
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={severity}>{message}</Alert>
      </Snackbar>
    </>
  )
}
