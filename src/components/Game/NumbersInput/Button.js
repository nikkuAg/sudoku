import React from 'react'
import { Button } from '@mui/material'

export const InputButton = ({value}) => {
  return (
    <Button className='input-button' variant="outlined">{value}</Button>
  )
}
