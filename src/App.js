import React, { Component } from 'react';
import './App.css';
import Seed from './Components/Seed.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      numChildren: 10,
      nInterval: setInterval(()=>this.addSeed(), 100)
    }
 }

 addSeed(){
  let newCount = this.state.numChildren + 1
  let n = this.state.nInterval
  this.setState(
    {
      numChildren: newCount
    }
  )
  if (newCount >= 1000)
  this.setState(
    {
      nInterval: clearInterval(n)
    }
  )
 }

  makeSeeds(x){
    let answer = []
    for(let i=0; i<x; i++)
          answer= answer.concat(<Seed key={i} x={i*1.1} y={i*1.1} i={i}/>)
     return answer
  }

  render() {

    return (
      <div className="App">
      {
          this.makeSeeds(this.state.numChildren)
      }
      </div>
    );
  }
}

export default App;
