import {
  PLAYER_PLAY,
  PLAYER_STOP
} from '../actions/player';

const initialState = {
  track: {},
  progress: 0,
  playing: false
};

export default function player(state = initialState, action) {
  switch (action.type) {
    case PLAYER_PLAY:
      return state;
    case PLAYER_STOP:
      return state;
    default:
      return state;
  }
}
