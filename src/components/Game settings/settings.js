import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import e9 from '../../resources/9e.png'
import m9 from '../../resources/9m.png'
import h9 from '../../resources/9h.png'
import e6 from '../../resources/6e.png'
import m6 from '../../resources/6m.png'
import h6 from '../../resources/6h.png'
import e4 from '../../resources/4e.png'
import h4 from '../../resources/4h.png'
import './settings.css'

export const Settings = () => {
  const [dimension, setDimension] = React.useState(9)
  const [difficulty, setDifficulty] = React.useState("easy")
  const [img, setimg] = React.useState(e9)

  const handleDimension = (event) => {
    setDimension(event.target.value)
    if(difficulty == "easy"){
      switch (event.target.value) {
        case 9:
          setimg(e9)
          break;
        case 4:
          setimg(e4)
          break;
        case 6:
          setimg(e6)
          break;
      }
    }
    else if(difficulty == "medium"){
      switch (event.target.value) {
        case 9:
          setimg(m9)
          break;
        case 6:
          setimg(m6)
          break;
      }
    }
    else if(difficulty == "hard"){
      switch (event.target.value) {
        case 9:
          setimg(h9)
          break;
        case 4:
          setimg(h4)
          break;
        case 6:
          setimg(h6)
          break;
      }
    }
  }

  const handleDifficulty = (event) => {
    setDifficulty(event.target.value)
    if(dimension == 9){
      switch (event.target.value) {
        case "easy":
          setimg(e9)
          break;
        case "medium":
          setimg(m9)
          break;
        case "hard":
          setimg(h9)
          break;
      }
    }
    else if(dimension == 4){
      switch (event.target.value) {
        case "easy":
          setimg(e4)
          break;
        case "hard":
          setimg(h4)
          break;
      }
    }
    else if(dimension == 6){
      switch (event.target.value) {
        case "easy":
          setimg(e6)
          break;
        case "medium":
          setimg(m6)
          break;
        case "hard":
          setimg(h6)
          break;
      }
    }
  }
  let navigate = useNavigate()

  const startGame = () => {
    let path = "/game/" + dimension + "/" + difficulty
    navigate(path)
  }

  return (
    <Card className='setting' sx={{maxWidth: 450}}>
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt="sudoku"
          className="sudoku-image"
        />
        <CardContent>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="dimension-label">Sudoku Dimensions</InputLabel>
              <Select
                labelId="dimension-label"
                id="dimension-select"
                value={dimension}
                label="Sudoku Dimensions"
                onChange={handleDimension}
              >
                <MenuItem value={4}>Sudoku 4 X 4</MenuItem>
                <MenuItem value={6}>Sudoku 6 X 6</MenuItem>
                <MenuItem value={9}>Sudoku 9 X 9</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="difficulty-label">Sudoku Difficulty</InputLabel>
              <Select
                labelId="difficulty-label"
                id="difficulty-select"
                value={difficulty}
                label="Sudoku Difficulty"
                onChange={handleDifficulty}
              >
                <MenuItem value={"easy"}>Easy</MenuItem>
                {dimension == 4 ? <></> :
                <MenuItem value={"medium"}>Medium</MenuItem>
                }
                <MenuItem value={"hard"}>Hard</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button variant="contained" onClick={startGame}>Start Game</Button>
        </CardContent>
    </Card>
  )
}
