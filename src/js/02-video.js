import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const getCurrentPlayTime = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};
// const currentPlayTimeInSec = _.throttle(getCurrentPlayTime, 1000);
let y = throttle(getCurrentPlayTime, 1000);
player.on('timeupdate', y);

const getSecFromStorage = () => {
  return JSON.parse(localStorage.getItem('videoplayer-current-time'));
};

player.setCurrentTime(getSecFromStorage()).then(function (seconds) {
  console.log(`Last time you stopped video on ${seconds} seconds`);
});
