import React from 'react';
import { connect } from 'react-redux';

import GameDot from '../components/GameDot';

import { setDot, setWon, dateTransform } from '../actions/gameActions';
import { startGameClear } from '../actions/modeActions';
import { sendWiner } from '../actions/resultActions';

class GameField extends React.Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.randomInteger = this.randomInteger.bind(this);
  }

  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  start(delay, gameBtn) {
    this.props.dispatch(startGameClear());
    const dotsWinner = gameBtn.length / 2;
    let arrBtn = gameBtn;

    let procesGame = setInterval(() => {
      let random = this.randomInteger(0, arrBtn.length-1);
      let go = arrBtn[random].props.children;
      this.props.dispatch(setDot(go));
      arrBtn.splice(random, 1);

      if (this.props.scoreUser > dotsWinner) {
        clearInterval(procesGame);
        this.props.dispatch(setWon(this.props.username));
        const winner = {
          winner: this.props.username,
          date: dateTransform(new Date())
        }
        this.props.dispatch(sendWiner(winner));
      } else if (this.props.scoreComputer > dotsWinner) {
        clearInterval(procesGame);
        this.props.dispatch(setWon('Computer'));
        const winner = {
          winner: 'Computer',
          date: dateTransform(new Date())
        }
        this.props.dispatch(sendWiner(winner));
      }
    }, delay);
  }

  render() {
    let gameBtn = [],
        delay;

    if (this.props.mode !== '' && this.props.username !== '') {
      const mode = this.props.mode;
      const modes = this.props.modes; 
      const {field} = modes[mode];
      delay = modes[mode].delay;
  
      for (let i = 0; i < field*field; i++) {
        gameBtn.push(
        <GameDot props={field} key={i}>{i}</GameDot>
        )
      }
    }

    if (this.props.start) {
      this.start(delay, gameBtn);
    }

    return (
      <>
      {this.props.children}
      <div className="game-field">
        {gameBtn}
      </div>
      </>
    );      
  }
}

function mapStateToProps(state) {
  return {
    modes: state.mode.modes,
    mode: state.mode.mode,
    username: state.mode.username,
    start: state.mode.start,
    scoreUser: state.game.scoreUser,
    scoreComputer: state.game.scoreComputer
  }
}

export default connect(mapStateToProps)(GameField);