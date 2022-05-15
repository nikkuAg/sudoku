import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import {Navbar} from '../Navbar/Navbar'
import { Grid } from './Grid/Grid'
import Container from '@mui/material/Container'

export const Game = () => {
    let param = useParams()
    const grid = param.grid
    const difficulty = param.diff

  return (
    <>
      <Navbar />
      <Container>
        <Grid dimension={grid} difficulty={difficulty} />
        
      </Container>
    </>
  )
}
