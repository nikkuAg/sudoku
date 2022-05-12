import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import {Navbar} from '../Navbar/Navbar'
import { Grid } from './Grid/Grid'

export const Game = () => {
    let param = useParams()
    const grid = param.grid
    const difficulty = param.diff

  return (
    <>
      <Navbar />
      <Grid dimension={grid} />
      <p>{difficulty}</p>
    </>
  )
}
