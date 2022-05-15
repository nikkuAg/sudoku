import React, {useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export const InputBox = ({value, border, lowerBorder, topBorder, leftBorder, key, row, column, setrow, setcolumn}) => {
    const temp1 = border=="yes" ? "add-border" : ""
    const temp2 = lowerBorder=="yes" ? "add-lowerborder" : ""
    const temp3 = topBorder=="yes" ? "add-topborder" : ""
    const temp4 = leftBorder=="yes" ? "add-leftborder" : ""
    const myclass = temp1 + " " + temp2 + " " + temp3 + " " + temp4

    const [input, setinput] = useState()

    const cellClicked = (event) => {
      const elems = document.querySelectorAll(".selected");
        [].forEach.call(elems, function(el) {
          el.classList.remove("selected");
      });
      setinput(event.target)
      event.target.classList.add("selected")
      if(input == event.target){
        const elems = document.querySelectorAll(".selected");
        [].forEach.call(elems, function(el) {
          el.classList.remove("selected");
        }); 
        setinput(null);
      }

      setrow(row)
      setcolumn(column)
    }

    
  return (
    <div className={value != null ? "filled input" : "not-filled input"} id={key} onClick={cellClicked}>
        <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
            noValidate
            autoComplete="off"
            id="form-box"
            className={myclass}
        >
            <TextField id="input-box" value={value} disabled />
        </Box>
    </div>
  )
}
