import React, { Component } from 'react';
import './Outcomes.css';

class Outcomes extends Component {
  render() {
    const totalFlips = this.props.headsCount + this.props.tailsCount;
    return (
        <div>
          <p>Out of {totalFlips} flips there were:</p>
          <p>{`${this.props.headsCount} heads, ${this.props.tailsCount} tails`}</p>
        </div>
    )
  }
}

export default Outcomes;
