import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import img from '../../resources/sudoku.png'
import './settings.css'

export const Settings = () => {
  const [dimension, setDimension] = React.useState(9)
  const [difficulty, setDifficulty] = React.useState("easy")

  const handleDimension = (event) => {
    setDimension(event.target.value)
  }

  const handleDifficulty = (event) => {
    setDifficulty(event.target.value)
  }

  return (
    <Card className='setting' sx={{maxWidth: 450}}>
      <CardActionArea>
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
                <MenuItem value={16}>Sudoku 16 X 16</MenuItem>
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
                <MenuItem value={"medium"}>Medium</MenuItem>
                <MenuItem value={"hard"}>Hard</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
