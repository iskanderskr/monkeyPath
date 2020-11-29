import xlsx from 'node-xlsx'

const matriz:number[][] = xlsx.parse('./input.xlsx')[0].data as number[][];

let counter = 0

const getBetterPathFromRow = (matriz: number[][], row: number)=>{

    let j = 0
    let possibilities:number[][] = [
        [row - 1, matriz[row - 1]? matriz[row][j] + matriz[row - 1][j + 1]:null],
        [row, matriz[row][j] + matriz[row][j + 1]],
        [row + 1, matriz[row + 1]? matriz[row][j] + matriz[row + 1][j + 1]:null],
    ].filter(e=>e[1])
    
    if(possibilities.length === 0) return matriz[row][j]
    j++

    while(matriz[row][j + 1] !== undefined){
        let newPossibilities:number[][][] = []
        
        possibilities.forEach((e,i)=>{
            let indexAndValue = [
                [e[0] - 1, matriz[e[0] - 1]? e[1] + matriz[e[0] - 1][j + 1]:null],
                [e[0], e[1] + matriz[e[0]][j + 1]],
                [e[0] + 1, matriz[e[0] + 1]? e[1] + matriz[e[0] + 1][j + 1]:null],
            ].filter(e=>e[1])
            newPossibilities[i] = indexAndValue
            counter++
        })

        possibilities = newPossibilities.flat() as number[][]

        j++
    }
    return Math.max(...possibilities.map(e=>e[1]))
}

const lookBananas = (matriz: number[][])=>{
    const bananas:number[] = []

    matriz.forEach((e,i)=>{
        bananas.push(getBetterPathFromRow(matriz, i))
        counter++
    })
    console.log('contador', counter)

    return Math.max(...bananas)
}

console.log(lookBananas(matriz))

export default lookBananas