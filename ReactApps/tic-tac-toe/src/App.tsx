import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function Square({value } : {value: string}) {

    function handleClick(){
      console.log("clicked !")
    }
   return ( 
    <button 
      className = "square"
      onClick={handleClick}
    > {value} </button>
  //  <>
  //  <div className ='board-row'>
  //  <button className = "square">1</button>
  //  <button className = "square">2</button>
  //  <button className = "square">3</button>
  //  </div>

  //  <div className ='board-row'>
  //  <button className = "square">4</button>
  //  <button className = "square">5</button>
  //  <button className = "square">6</button>
  //  </div>

  //  <div className ='board-row'>
  //  <button className = "square">7</button>
  //  <button className = "square">8</button>
  //  <button className = "square">9</button>
  //  </div>
 
  //  </>
   
  );
}


export default function  Board() {
  return (
    <>
      <div className="board-row">
          <Square value = "1"/>
          <Square  value = "2"/>
          <Square  value = "3"/>
      </div>
      <div className="board-row">
          <Square  value = "4" />
          <Square  value = "5" />
          <Square  value = "6" />
      </div>
      <div className="board-row">
          <Square   value = "7" />
          <Square  value = "8" />
          <Square  value = "9" />
      </div>
    </>
  )
}