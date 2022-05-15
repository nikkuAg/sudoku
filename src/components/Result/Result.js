import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import { DataGrid } from '@mui/x-data-grid';
import './result.css'
import { Container } from '@mui/material';
import {Button } from '@mui/material'
import ScoreboardIcon from '@mui/icons-material/Scoreboard';

export const Result = ({sudokuResult}) => {
    let navigate = useNavigate();
    useEffect(() => {
        if(sudokuResult.length == 0){
            navigate("/")
        }     
    }, [])

    const messages = [
        "The value was already present in the block.",
        "The value was already present in the column.",
        "The value was already present in the row.",
        "",
        "The value you entered was not completely correct but at that particular moment no issue was present.",
        "The value entered was completely correct."
    ]

    const columns = [
        { field: 'id', headerName: 'S No.', width: 120 },
        { field: 'score', headerName: 'Score', width: 135 },
        { field: 'value', headerName: 'Value of input', width: 220 },
        { field: 'code', headerName: 'Error code', hide:true, width: 0 },
        {
          field: 'error',
          headerName: 'Remarks',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 420,
          valueGetter: (params) =>
            `${messages[params.row.code + 3]}`,
        },
    ];

    const rows = []
    let score = 0
    for (let i = 0; i < sudokuResult.length; i++) {
        score += sudokuResult[i][2]
        const element = {id: i+1, score: sudokuResult[i][2], value:sudokuResult[i][4], code:sudokuResult[i][3]}
        rows.push(element)
    }

  return (
    <div>
        <Navbar />
        <div className='result'>
            <Button variant="outlined" className="extra-button score" disabled startIcon={<ScoreboardIcon />}>
                Final Score : {score}
            </Button>
          </div>
        <Container>
            <div style={{ height: 400, width: 940, margin: '2rem auto' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </Container>
    </div>
  )
}

