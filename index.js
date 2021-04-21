 // @ts-check 
 import { start as startSine, stop as stopSine} from './sine.js';

document
    .querySelector('#sine-wave-start')
    .addEventListener('click', startSine)

document
    .querySelector('#sine-wave-stop')
    .addEventListener('click', stopSine)
