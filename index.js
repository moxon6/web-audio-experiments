 // @ts-check 
import { start as startSine, stop as stopSine} from './sine.js';
import { start as startSineGain, stop as stopSineGain, setGain } from './sine-with-gain.js';

const audioContext = new AudioContext();

document
    .querySelector('#sine-wave-start')
    .addEventListener('click', startSine(audioContext))

document
    .querySelector('#sine-wave-stop')
    .addEventListener('click', stopSine)

const gainValue = document
    .querySelector('#sine-wave-gain-value')

document
    .querySelector('#sine-wave-gain-start')
    // @ts-ignore
    .addEventListener('click', startSineGain(gainValue.value, audioContext))

document
    .querySelector('#sine-wave-gain-stop')
    .addEventListener('click', stopSineGain)

gainValue
    // @ts-ignore
    .addEventListener('change', () => setGain(gainValue.value, audioContext))

document
    .querySelector('#audio-context-resume')
    .addEventListener('click', () => audioContext.resume())

document
    .querySelector('#audio-context-suspend')
    .addEventListener('click', () => audioContext.suspend())
