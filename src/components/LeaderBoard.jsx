import React from 'react';
import { connect } from 'react-redux';

import { fetchResults } from '../actions/resultActions';

class LeaderBoard extends React.Component {
  render() {
    let winners;
    if (this.props.results.length) {
      winners = this.props.results.map(winner => {
        return (
          <div key={winner.id} className="winner">
            <p className="winner-name">{winner.winner}</p>
            <p className="winner-date">{winner.date}</p>
          </div>
        );
      });
      winners.reverse();
    }

    return (
      <div className="result-block">
        <h4 className="result-description">Leader Board</h4>
        <div className="result-scrol">
          {winners}
        </div>
      </div>
    );
  }

  componentDidMount() {
    if (!this.props.results.length) {
      this.props.dispatch(fetchResults());
    }
  }
}

function mapStateToProps(state) {
  return {
    results: state.results.results
  }
}    

export default connect(mapStateToProps)(LeaderBoard);