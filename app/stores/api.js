import {
  observable,
  autorun,
  computed,
  action,
  reaction
} from 'mobx';

import { search } from '../utils/api';

//
// mobx store for Api
//
class ApiStore {
  @observable results = []
  @observable fetching = false

  constructor() {
    //on every route change, persist route
    reaction(() => this.currentRoute ,() => {
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

  @action search(query) {
    this.fetching = true;
    search(query).then(tracks => {
      this.results = tracks;
      this.fetching = false;
    });
  }
}
export default new ApiStore();
