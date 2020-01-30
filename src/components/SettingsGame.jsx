import React from 'react';
import { connect } from 'react-redux';

import { setName } from '../actions/modeActions';
import { playAgain } from '../actions/resultActions';

class SettingsGame extends React.Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.textBtn = React.createRef();
    this.createGame = this.createGame.bind(this);
  }

  createGame() {
    if (this.props.end !== '') {
      this.textBtn.current.innerText = 'Play';
      this.username.current.value = '';
      this.props.dispatch(playAgain());
    }
    if (this.username.current.value !== '' 
        && this.props.mode !== ''
        && this.textBtn.current.innerText !== 'PLAY AGAIN') {
      this.props.dispatch(setName(this.username.current.value));
      this.textBtn.current.innerText = 'Play Again';
    }
  }

  render() {
    return (
      <div className="settings">
        {this.props.children}
        <input 
          className="settings_name" 
          type="text" 
          placeholder="Enter your name" 
          ref={this.username}
        />
        <button 
          onClick={this.createGame} 
          className="settings_btn"
          ref={this.textBtn}
        >Play</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mode: state.mode.mode,
    end: state.game.won
  }
}

export default connect(mapStateToProps)(SettingsGame);