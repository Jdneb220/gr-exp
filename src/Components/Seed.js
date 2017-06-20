import React, { Component } from 'react';

class Seed extends Component {
  constructor(){
    super();
    this.state = {
      children: 0,
      angle   : 0,
      x       : 0,
      y       : 0
    }
    //this.makeCounterShards = this.makeCounterShards.bind(this)
    //this.decrement = this.decrement.bind(this)
  }

  componentWillMount(){
    this.setState({
      x: this.props.x,
      y: this.props.y,
      angle: this.props.i
    })
  }

  render() {
    return (
        <div className='seed' style={{
          'transform': 'rotate(' + ((137.5 * this.state.angle) % 360) + 'deg)',
          'transformOrigin': -this.state.x + 'px ' + -this.state.y + 'px',
          'marginTop': this.state.y + 'px',
          'marginLeft': this.state.x + 'px'

        }}>
        </div>
      );
  }
}

export default Seed;
