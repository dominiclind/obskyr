import SC from 'soundcloud';

SC.initialize({
  client_id: '596cb81cf530fa8e789cf0e6970289bd'
});

const SoundCloud = {
  searchSC: (search) => new Promise((resolve, reject) => {
    SC.get('/tracks', {
      q: search
    }).then(tracks => {
      const formatted = tracks.map(track => {
        return {
          source: 'soundcloud',
          id: track.id,
          duration: track.duration,
          date: track.created_at,
          title: track.title,
          thumb: track.artwork_url
        };
      });
      resolve(formatted);
    });
  }),
  play: (id, cb) => {
    SC.stream(`/tracks/${id}`).then((player) => {
      SoundCloud.player = player;
      player.play();
      SoundCloud.interval = setInterval(() => {
        cb(player.currentTime())
      }, 500);
    });
  },
  stop: () => {
    if (SoundCloud.player) {
      SoundCloud.player.dispose();
    }
    if (SoundCloud.interval) {
      clearInterval(SoundCloud.interval);
    }
  }
};

export default SoundCloud;
