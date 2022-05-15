import React from 'react'
import { Button } from '@mui/material'

export const InputButton = ({value, setopen, setmessage, setseverity}) => {

  const inputButtonClicked = (event) => {
      const element = document.getElementsByClassName("selected")
      if(element.length == 0){
        setopen(true)
        setmessage("No cell selected!!")
        setseverity("error")
      }
      else if(element[0].value != "" && element[0].id != "input-filled"){
        setopen(true)
        setmessage("Changing this value is not allowed!!")
        setseverity("warning")
      }
      else{
        element[0].setAttribute('id', 'input-filled')
        element[0].value = value
      }
  }

  return (
    <Button className='input-button' variant="outlined" onClick={inputButtonClicked}>{value}</Button>
  )
}
