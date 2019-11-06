import React, { Component } from 'react';
import './Coin.css';
import Outcomes from "./Outcomes";

const headsImg = 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg';
const tailsImg = 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg';

class Coin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heads: true,
      headsCount: 0,
      tailsCount: 0,
    };
    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    const randFlip = Math.floor(Math.random() + 0.5);
    // heads = 1, tails = 0
    if (randFlip === 1) {
      if (!this.state.heads) this.setState({heads: true});
      this.setState(st => {
        return { headsCount: st.headsCount + 1}
      });
    } else {
      if (this.state.heads) this.setState({heads: false});
      this.setState(st => {
        return { tailsCount: st.tailsCount + 1}
      });
    }
  }

  render() {
    return (
        <div className="Coin">
          <h2>Coin Flip Fun</h2>
          <img src={this.state.heads ? headsImg : tailsImg}></img>
          <button onClick={this.flipCoin}>FLIP MEE</button>
          <Outcomes
              headsFace={this.state.heads}
              headsCount={this.state.headsCount}
              tailsCount={this.state.tailsCount}
          />
        </div>
    )
  }
}

export default Coin;
