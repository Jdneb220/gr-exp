import React, { Component } from 'react';

let colors = ['#222', '#444', '#666', '#888', '#aaa', '#ccc']
class Seed extends Component {
  constructor(){
    super();
    this.state = {
      iterations: 0,
      angle     : 0,
      ratio     : 137.5,
      x         : 0,
      y         : 0,
      bg        : 0
      //,nInterval : setInterval(()=>this.returnToOrigin(),1000)
    }
  }

  returnToOrigin(){
  let newX = this.state.x * 137.5 / 360
  let newY = this.state.y * 137.5 / 360
  let n = this.state.nInterval
  this.setState(
    {
      x: newX,
      y: newY
    }
  )
  if (newX <= 1.01)
  this.setState(
    {
      nInterval: clearInterval(n)
    }
  )
 }

  componentWillMount(){
    this.setState({
      x: this.props.x,
      y: this.props.y,
      angle: this.props.i,
      bg: Math.floor(Math.random()*6)
    })
  }

  render() {
    return (
        <div className='seed' style={{
          'backgroundColor': '#' + (Math.floor(this.state.angle / 50) + 1) * 111111,
          'borderColor': '#' + (Math.floor(this.state.angle / 50)+1) * 111111,
          'transform': 'rotate(' + ((this.state.ratio * this.state.angle) % 360) + 'deg)',
          'transformOrigin': -this.state.x + 'px ' + -this.state.y + 'px',
          'marginTop': this.state.y + 'px',
          'marginLeft': this.state.x + 'px',
          'animation': 'spin-right ' + (10 + .1 *  this.state.angle) + 's linear infinite alternate'
        }}>
        </div>
      );
  }
}

export default Seed;
