import React from 'react';
import {connect} from 'react-redux';

class Won extends React.Component {
  render() {
    let won;

    if (this.props.won !== '') {
      won = `won - ${this.props.won}`;
    } else {
      won = `the winner will be written here`;
    }

    return (
    <h3 className="won">{won}</h3>
    );
  }
}

function mapStateToProps(state) {
  return {
    won: state.game.won
  }
}

export default connect(mapStateToProps)(Won);