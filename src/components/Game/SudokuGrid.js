export const SudokuGrid = (setsudokuNumbersSol, setsudokuNumbers, dimension, difficulty) => {

    const grid1 = [
        [
            [2, 1, 3, 4,],
            [3, 4, 2, 1,],
            [4, 3, 1, 2,],
            [1, 2, 4, 3,]
        ],
        [
            [3, 2, 4, 1,],
            [1, 4, 2, 3,],
            [2, 3, 1, 4,],
            [4, 1, 3, 2,]
        ],
        [
            [3, 2, 1, 4,],
            [1, 4, 3, 2,],
            [4, 1, 2, 3,],
            [2, 3, 4, 1,]
        ]
    ]

    const grid2 = [
        [
            [3, 1, 4, 6, 2, 5],
            [6, 2, 5, 3, 4, 1],
            [1, 3, 6, 2, 5, 4],
            [5, 4, 2, 1, 3, 6],
            [4, 6, 3, 5, 1, 2],
            [2, 5, 1, 4, 6, 3]
        ],
        [
            [4, 2, 3, 6, 5, 1],
            [5, 1, 6, 4, 2, 3],
            [6, 5, 4, 1, 3, 2],
            [2, 3, 1, 5, 4, 6],
            [3, 6, 5, 2, 1, 4],
            [1, 4, 2, 3, 6, 5]
        ],
        [
            [2, 1, 4, 6, 5, 3],
            [6, 3, 5, 2, 1, 4],
            [5, 2, 3, 1, 4, 6],
            [4, 6, 1, 5, 3, 2],
            [3, 5, 6, 4, 2, 1],
            [1, 4, 2, 3, 6, 5]
        ]
    ]

    const grid3 = [
        [
            [9, 5, 1, 3, 8, 4, 7, 6, 2],
            [7, 8, 4, 6, 2, 9, 5, 1, 3],
            [6, 2, 3, 7, 5, 1, 9, 8, 4],
            [2, 3, 9, 5, 7, 6, 8, 4, 1],
            [1, 6, 5, 2, 4, 8, 3, 7, 9],
            [8, 4, 7, 1, 9, 3, 6, 2, 5],
            [3, 1, 8, 4, 6, 5, 2, 9, 7],
            [4, 9, 2, 8, 3, 7, 1, 5, 6],
            [5, 7, 6, 9, 1, 2, 4, 3, 8]
        ],
        [
            [4, 9, 5, 6, 3, 1, 7, 8, 2],
            [6, 3, 7, 5, 8, 2, 4, 1, 9],
            [2, 8, 1, 4, 7, 9, 6, 3, 5],
            [7, 4, 9, 3, 5, 6, 8, 2, 1],
            [5, 1, 6, 7, 2, 8, 3, 9, 4],
            [8, 2, 3, 1, 9, 4, 5, 6, 7],
            [9, 5, 2, 8, 4, 3, 1, 7, 6],
            [1, 7, 8, 9, 6, 5, 2, 4, 3],
            [3, 6, 4, 2, 1, 7, 9, 5, 8]
        ],
        [
            [5, 7, 9, 6, 4, 2, 3, 1, 8],
            [8, 4, 6, 1, 3, 5, 2, 7, 9],
            [3, 2, 1, 9, 7, 8, 4, 5, 6],
            [1, 6, 4, 7, 5, 9, 8, 2, 3],
            [9, 8, 7, 2, 6, 3, 5, 4, 1],
            [2, 3, 5, 8, 1, 4, 6, 9, 7],
            [4, 1, 2, 3, 8, 7, 9, 6, 5],
            [7, 5, 8, 4, 9, 6, 1, 3, 2],
            [6, 9, 3, 5, 2, 1, 7, 8, 4]
        ]
    ]
    let temp
    let a = Math.floor(Math.random() * 3)
    if(dimension == 4){
        setsudokuNumbersSol(grid1[a])
        temp = grid1[a]
    }
    else if(dimension == 6){
        setsudokuNumbersSol(grid2[a])
        temp = grid2[a]
    }
    else if (dimension == 9){
        setsudokuNumbersSol(grid3[a])
        temp = grid3[a]
    }
    
    let finalGrid = []
    for (let row = 0; row < temp.length; row++) {
        let a = []
        for (let column = 0; column < temp[row].length; column++) {
            a.push(temp[row][column])
        }
        finalGrid.push(a)
    }

    if(difficulty == "easy"){
        if(dimension == 9){
            createSudoku(1,3, finalGrid, dimension)
        }
        else if(dimension == 4){
            createSudoku(1,1, finalGrid, dimension)
        }
        else if(dimension == 6){
            createSudoku(1, 2, finalGrid, dimension)
        }
    }
    else if(difficulty == "medium"){
        if(dimension == 9){
            createSudoku(3,5, finalGrid, dimension)
        }
        else if(dimension == 6){
            createSudoku(1,3, finalGrid, dimension)
        }
    }
    else if(difficulty == "hard"){
        if(dimension == 9){
            createSudoku(4,7, finalGrid, dimension)
        }
        else if(dimension == 4){
            createSudoku(1,2, finalGrid, dimension)
        }
        else if(dimension == 6){
            createSudoku(2,4, finalGrid, dimension)
        }

    }
    setsudokuNumbers(finalGrid)
    
}


var createSudoku = function(min, max, finalGrid, dimension){
    for (let row = 0; row < dimension; row++) {   
        let b = Math.floor(Math.random() * (max-min+1)) + min
        for (let index = 0; index <= b; index++) {
            let a = Math.floor(Math.random() * dimension)
            while(finalGrid[row][a] == 0){
                a = Math.floor(Math.random() * dimension)
            }
            finalGrid[row][a] = 0
        }
    }
}