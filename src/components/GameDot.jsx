import React from 'react';
import { connect } from 'react-redux';

import { scoreUser, scoreComputer } from '../actions/gameActions';

class GameDot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dotClass: 'default'};
    this.clickToDot = this.clickToDot.bind(this);
    this.unclickToDot = this.unclickToDot.bind(this);
  }

  clickToDot() {
    console.log('click - user')
    this.setState({dotClass: 'user'});
    this.props.dispatch(scoreUser());
  }

  unclickToDot() {
    console.log('computer - click')
    this.setState({dotClass: 'computer'});
    this.props.dispatch(scoreComputer());
  }

  render() {
    const field = this.props.props;    
    let div;

    if (this.props.dot === this.props.children) {
      div = <div 
              onClick={this.clickToDot}
              className={"game-btn-active game-btn-"+field}
            ></div>;
      if (this.state.dotClass === 'default') {
        this.unclickToDot();
      }
    } else {
      div = <div className={"game-btn-"+this.state.dotClass+" game-btn-"+field}></div>
    }

    return (
      <>
      {div}
      </>
      );
  }

}

function mapStateToProps(state) {
  return {
    dot: state.game.dot
  }
}

export default connect(mapStateToProps)(GameDot);