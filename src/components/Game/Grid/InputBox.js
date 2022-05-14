import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export const InputBox = ({value, border, lowerBorder, topBorder, leftBorder}) => {
    const temp1 = border=="yes" ? "add-border" : ""
    const temp2 = lowerBorder=="yes" ? "add-lowerborder" : ""
    const temp3 = topBorder=="yes" ? "add-topborder" : ""
    const temp4 = leftBorder=="yes" ? "add-leftborder" : ""
    const myclass = temp1 + " " + temp2 + " " + temp3 + " " + temp4
    
  return (
    <div className="input">
        <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
            noValidate
            autoComplete="off"
            id="form-box"
            className={myclass}
        >
            <TextField id="input-box" value={value} />
        </Box>
    </div>
  )
}
