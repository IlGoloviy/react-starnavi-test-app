import React from 'react';
import { connect } from 'react-redux';

import { fetchMode, setMode } from '../actions/modeActions';

class Mode extends React.Component {
  constructor(props) {
    super(props);
    this.modeForGame = React.createRef();
    this.setModeForGame = this.setModeForGame.bind(this);
  } 

  setModeForGame() {
    this.props.dispatch(setMode(this.modeForGame.current.value));
  }
  
  render() {
    let optionList = [];

    for (let key in this.props.modes) {
      optionList.push(key);
    }
    optionList = optionList.map(mode => {
    return <option key={mode} value={mode}>{mode}</option>
    });

    return (
      <select 
        onClick={this.setModeForGame} 
        className="settings_list" 
        ref={this.modeForGame}
      >
        <option value="" default>Pick game mode</option>
        {optionList}
      </select>
    );
  }

  componentDidMount() {
    if (!this.props.modes.length) {
      this.props.dispatch(fetchMode());
    }
  }

}

function mapStateToProps(state) {
  return {
    modes: state.mode.modes
  }
}

export default connect(mapStateToProps)(Mode);