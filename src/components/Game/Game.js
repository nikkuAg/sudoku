import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import {Navbar} from '../Navbar/Navbar'
import { Grid } from './Grid/Grid'
import Container from '@mui/material/Container'
import { Input } from './NumbersInput/Input'
import LoadingButton from '@mui/lab/LoadingButton'
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import { Button } from '@mui/material'

export const Game = () => {
    let param = useParams()
    const grid = param.grid
    const difficulty = param.diff

    const [loading, setloading] = useState(true)

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
        <Grid dimension={grid} difficulty={difficulty} loading={setloading} />
        {loading ? 
          <>
            <LoadingButton loading />
          </>
        :
          <>
            <Input dimension={grid} />
          </>
        }
      </Container>
    </>
  )
}
