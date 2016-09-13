export const PLAYER_PLAY = 'PLAYER_PLAY';
export const PLAYER_STOP = 'PLAYER_STOP';

export function play() {
  return {
    type: PLAYER_PLAY
  };
}

export function stop() {
  return {
    type: PLAYER_STOP
  };
}

// export function asyncAction() {
//   return (dispatch, getState) => {
//     const { counter } = getState();
//
//     if (counter % 2 === 0) {
//       return;
//     }
//
//     dispatch(increment());
//   };
// }
