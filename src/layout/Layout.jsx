import React from 'react';
import Mode from '../components/Mode';
import SettingsGame from '../components/SettingsGame';
import Won from '../components/Won';
import GameField from '../components/GameField';
import LeaderBoard from '../components/LeaderBoard';

class Layout extends React.Component {
  render() {
    return (
      <div className="all-game">
        <div className="block-game">
          <SettingsGame>
            <Mode></Mode>
          </SettingsGame>
          <GameField>
            <Won></Won>
          </GameField>
        </div>
        <div className="block-result">
          <LeaderBoard></LeaderBoard>
        </div>
      </div>
    );
  }
}

export default Layout;