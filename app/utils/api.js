import { searchSC } from './soundcloud';
import { searchYT } from './youtube';

export const search = (search) => new Promise((resolve, reject) => {
  Promise.all([searchSC(search), searchYT(search)]).then(values => {
    let arr = [];
    arr = values[0].concat(values[1]);

    arr.sort((a, b) => new Date(b.date) - new Date(a.date));
    resolve(arr);
  });
});
