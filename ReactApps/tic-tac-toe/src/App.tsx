import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//
function Square({value, onSquareClick } : {value: string, onSquareClick : () => void }) {

  //const [value , setValue ] = useState<string |null>(null)

    
   return ( 
    <button 
      className = "square"
      onClick={onSquareClick}
    > {value} </button>
  );
}


 function  Board({xIsNext, squares, onPlay} : {xIsNext : Boolean, squares : string[], onPlay: (arg: string[]) => void }) {

  // const [xIsNext, setXIsNext] = useState(true)

  // const [squares, setSquares] = useState(Array(9).fill(null))

  const winner = calculateWinner(squares);
  let status  ;

  winner? status = "Winner: " + winner: status = "Next player: " + (xIsNext ? "X" : "O")


  function handleClick(i : number){

    if(squares[i] || calculateWinner(squares)) return;
    
    const nextSquares = squares.slice()
    xIsNext? nextSquares[i] = "X" :  nextSquares[i] = "O"     //taking turns
    onPlay(nextSquares)
    //setXIsNext(!xIsNext)
  }
  return (
    <>
    <div className='status'>{status}</div>
      <div className="board-row">
          <Square value={squares[0]}  onSquareClick={() => handleClick(0)}/>
          <Square value={squares[1]}   onSquareClick={() => handleClick(1)} />
          <Square  value={squares[2]}  onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
          <Square   value={squares[3]}  onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]}   onSquareClick={() => handleClick(4)} />
          <Square   value={squares[5]}  onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
          <Square  value={squares[6]}  onSquareClick={() => handleClick(6)}  />
          <Square value={squares[7]}  onSquareClick={() => handleClick(7)}  />
          <Square value={squares[8]}  onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

function calculateWinner(squares: Array<string>) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for (let i = 0; i < lines.length; i++ ) {
    const [a,b,c] = lines[i];

    if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
      return squares[a];

    }
  }

  return null

}

export default function Game(){
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)])

  const currentSquares = history[history.length -1]

 function handlePlay(nextSquares : string[])  {

 }
  return (
    <div className='game'>
      <div className='game-board'>
        <Board  xIsNext = {xIsNext} squares = {currentSquares} onPlay = {handlePlay}/>
      </div>
      <div className='game-Info'>
        <ol>{}</ol>
      </div>
    </div>
  )
}