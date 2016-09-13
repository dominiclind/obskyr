import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import player from './player';

const rootReducer = combineReducers({
  counter,
  routing,
  player
});

export default rootReducer;
