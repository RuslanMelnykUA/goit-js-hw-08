import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const ifFrameRef = document.querySelector('ifFrameRef');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const player = new Player(ifFrameRef);

player.on('timeupdate', throttle(setWatchingTime, 1000));
function setWatchingTime({ seconds }) {
  try {
    return localStorage.setItem(LOCALSTORAGE_KEY, seconds);
  } catch (error) {
    console.log(error.name);
    return [];
  }
}

if (localStorage.getItem(LOCALSTORAGE_KEY)) {
  player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
}