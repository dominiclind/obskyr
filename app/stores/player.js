import {
  observable,
  autorun,
  computed,
  action,
  reaction
} from 'mobx';

import YouTube from '../utils/youtube';
import SoundCloud from '../utils/soundcloud';

//
// mobx store for Player
//
class PlayerStore {
  @observable currentTrack = {}
  @observable playing = false
  @observable progress = 0;

  constructor() {
    //on every route change, persist route
    reaction(() => this.currentTrack,() => {
      // store.save('currentRoute', this.currentRoute);
    });
    // rehydrate app
    autorun(() => {
      // store.get('currentRoute').then((route) => {
      //   // if (route) {
      //   //   app.currentRoute = route;
      //   // }
      //   this.hydrated = true;
      // })
    });
  }

  // play
  @action play(track) {
    if (track.id !== this.currentTrack.id) {
      this.stop();
      // check type of track
      switch (track.source) {
        case 'youtube':
          console.log(track.id);
          YouTube.play(track.id, (progress) => {
            this.progress = progress;
          });
          break;
        case 'soundcloud':
          SoundCloud.play(track.id, (position) => {
            this.progress = position / track.duration;
          });
          break;
        default:
      }

      // set playing to true
      this.playing = true;
      this.currentTrack = track;
    } else {
      this.stop();
    }
  }
  // stop
  @action stop() {
    this.playing = false;
    this.currentTrack = {};
    this.progress = 0;
    SoundCloud.stop();
    YouTube.stop();
  }
}
export default new PlayerStore();
