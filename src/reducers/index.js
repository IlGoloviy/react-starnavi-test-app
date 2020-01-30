import { combineReducers } from 'redux';

import game from './gameReducer';
import mode from './modeReducer';
import results from './resultReducer';

export default combineReducers({
  mode,
  game,
  results
})