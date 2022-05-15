import React from 'react'
import { Button } from '@mui/material'

export const InputButton = ({ value, setopen, setmessage, setseverity, validate, row, column, sudoku, score, setscore, scoreTable, setscoreTable, setsubmit }) => {

  let code = 0
  let myscore = 0

  const inputButtonClicked = () => {
    const element = document.getElementsByClassName("selected")
    if (element.length == 0) {
      setopen(true)
      setmessage("No cell selected!!")
      setseverity("error")
    }
    else if (element[0].value != "" && element[0].id != "input-filled" && element[0].id != "input-filled-error") {
      setopen(true)
      setmessage("Changing this value is not allowed!!")
      setseverity("info")
    }
    else {
      element[0].setAttribute('id', 'input-filled')
      element[0].value = value
      findError(element[0])
    }

    
    const check = sudoku.findIndex(row => (row.includes(0)))
    if(check == -1){
      setsubmit(true)
    }
    else{
      setsubmit(false)
    }
  }


  const findBlockArr = (dim, arr) => {
    let rowFinder = 0
    let columnFinder = 0
    if (dim == 9) {
      rowFinder = columnFinder = 3
    }
    else if (dim == 6) {
      rowFinder = 3
      columnFinder = 2
    }
    else if (dim == 4) {
      rowFinder = columnFinder = 2
    }
    let newRowStart = row - row % rowFinder
    let newColumnStart = column - column % columnFinder

    for (let i = newRowStart; i < rowFinder; i++) {
      for (let j = newColumnStart; j < columnFinder; j++) {
        arr.push(sudoku[i][j])
      }
    }
  }

  const findError = (elem) => {
    let rowArr = sudoku[row]
    let columnArr = []
    let dimension = rowArr.length
    sudoku[row][column] = 0
    for (let i = 0; i < dimension; i++) {
      columnArr.push(sudoku[i][column])
    }
    let blockArr = []
    findBlockArr(dimension, blockArr)
    elem.setAttribute('id', 'input-filled-error')
    if (rowArr.includes(value)) {
      setopen(true)
      setmessage(`Wrong value!! ${value} already exists in this row`)
      setseverity("error")
      code = -1
      myscore = -15
    }
    else if (columnArr.includes(value)) {
      setopen(true)
      setmessage(`Wrong value!! ${value} already exists in this column`)
      setseverity("error")
      code = -2
      myscore = -15
    }
    else if (blockArr.includes(value)) {
      setopen(true)
      setmessage(`Wrong value!! ${value} already exists in this block`)
      setseverity("error")
      code = -3
      myscore = -25
    }
    else {
      sudoku[row][column] = value
      elem.setAttribute('id', 'input-filled')
      if (validate[row][column] == value) {
        myscore = 50
        code = 2
        for (let i = 0; i < scoreTable.length; i++) {
          if (scoreTable[i][0] == row && scoreTable[i][1] == column) {
            if (scoreTable[i][2] == 50) {
              code = 0
              break
            }
          }
        }
      }
      else {
        myscore = 30
        code = 1
        for (let i = 0; i < scoreTable.length; i++) {
          if (scoreTable[i][0] == row && scoreTable[i][1] == column) {
            if (scoreTable[i][2] == 30 && scoreTable[i][4] == value) {
              code = 0
              break
            }
          }
        }
      }
    }
    if (code != 0) {
      let temp = scoreTable
      temp.push([row, column, myscore, code, value])
      setscoreTable(temp)
      setscore(score + myscore)
    }

  }


  return (
    <Button className='input-button' variant="outlined" onClick={inputButtonClicked}>{value}</Button>
  )
}
