import React, { Component } from 'react';
import './Coin.css';
import Outcomes from "./Outcomes";
import { choose } from "./helpers";

const headsImg = 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg';
const tailsImg = 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg';

class Coin extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: headsImg },
      { side: "tails", imgSrc: tailsImg },
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      headsCount: 0,
      tailsCount: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.flipCoin = this.flipCoin.bind(this);
  }

  // version 1
  // flipCoin() {
  //   const randFlip = Math.floor(Math.random() + 0.5);
  //   // currCoin = 1, tails = 0
  //   if (randFlip === 1) {
  //     if (!this.state.currCoin) this.setState({currCoin: true});
  //     this.setState(st => {
  //       return { headsCount: st.headsCount + 1};
  //     });
  //   } else {
  //     if (this.state.currCoin) this.setState({currCoin: false});
  //     this.setState(st => {
  //       return { tailsCount: st.tailsCount + 1};
  //     });
  //   }
  // }

  // version 2
  flipCoin() {
    const newCoin = choose(this.props.coins);
    this.setState(st => {
      return {
        currCoin: newCoin,
        headsCount: st.headsCount + (newCoin.side === 'heads' ? 1 : 0),
        tailsCount: st.tailsCount + (newCoin.side === 'tails' ? 1 : 0),
      };
    });
  }

  handleClick(e) {
    this.flipCoin();
  }

  render() {
    return (
        <div className="Coin">
          <h2>Coin Flip Fun</h2>
          {this.state.currCoin && <img src={this.state.currCoin.imgSrc} alt={this.state.currCoin ? 'currCoin' : 'tails'} />}
          <button onClick={this.flipCoin}>FLIP MEE</button>
          <Outcomes
              currCoin={this.state.currCoin}
              headsCount={this.state.headsCount}
              tailsCount={this.state.tailsCount}
          />
        </div>
    )
  }
}

export default Coin;
