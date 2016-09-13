import axios from 'axios';
import YouTubePlayer from 'youtube-player';

const API_KEY = `AIzaSyACuDTzDGrS1BcRjp1JxCoNVnYJvcT2IIs`;

const YouTube = {
  searchYT: (search) => {
    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&type=video&q=${search}&maxResults=20&videoEmbeddable=true&key=${API_KEY}`;

    return new Promise((resolve, reject) => {
      axios.get(API_URL).then(response => {
        let tracks = response.data.items;
        let formatted = tracks.map(track => {
          return {
            source: 'youtube',
            id: track.id.videoId,
            date: track.snippet.publishedAt,
            title: track.snippet.title,
            thumb: track.snippet.thumbnails.high.url
          }
        });
        resolve(formatted)
      })
    });
  },
  play: (id, cb) => {
    const player = YouTubePlayer('video-player');

    YouTube.player = player;
    YouTube.player.loadVideoById(id);
    YouTube.player.playVideo();

    YouTube.interval = setInterval(() => {
      Promise.all([YouTube.player.getCurrentTime(), YouTube.player.getDuration()]).then(values => {
        cb(values[0] / values[1]);
      });
    }, 500);
  },
  stop: () => {
    if (YouTube.player) {
      YouTube.player.destroy();
    }
    if (YouTube.interval) {
      clearInterval(YouTube.interval);
    }
  }
};

export default YouTube;
