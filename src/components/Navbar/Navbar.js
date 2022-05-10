import React from 'react'
import Divider from '@mui/material/Divider';
import './navbar.css'

export const Navbar = () => {
  return (
    <>
      <div className='navbar'>
          <h1>
              Sudoku
          </h1>
          <div className='rules'>
              Rules
          </div>
      </div>
      <Divider />
    </>
  )
}
