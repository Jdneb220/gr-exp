import React, { Component } from 'react';
import './App.css';
import Seed from './Components/Seed.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      numChildren: 20
    }
  }

  componentWillMount(){
    // setInterval(function(){
    //   this.setState({
    //   numChildren: this.state.numChildren+1
    //   })
    // }, 200)
  }

  makeSeeds(x){
    let answer = []
    for(let i=0; i<x; i++)
          answer= answer.concat(<Seed key={i} x={i*2} y={i*2} i={i}/>)
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
