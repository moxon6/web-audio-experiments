 // @ts-check 
import { start as startSine, stop as stopSine} from './sine.js';

const audioContext = new AudioContext();

document
    .querySelector('#sine-wave-start')
    .addEventListener('click', startSine(audioContext))

document
    .querySelector('#sine-wave-stop')
    .addEventListener('click', stopSine)
