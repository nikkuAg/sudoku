import React from 'react'
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import './navbar.css'

export const Navbar = () => {

  let navigate = useNavigate()
  const home = () => {
    navigate("/")
  }

  return (
    <>
      <div className='navbar'>
          <h1 onClick={home} className='home'>
              Sudoku
          </h1>
      </div>
      <Divider />
    </>
  )
}
