 // @ts-check 
import { start as startSine, stop as stopSine} from './sine.js';
import { start as startSineGain, stop as stopSineGain, setGain } from './sine-with-gain.js';
import { start as startAnalyzer, stop as stopAnalyzer, draw as drawVisualisation } from './analyzer.js';

const audioContext = new AudioContext();

// Simple Sine Wave
document
    .querySelector('#sine-wave-start')
    .addEventListener('click', startSine(audioContext))

document
    .querySelector('#sine-wave-stop')
    .addEventListener('click', stopSine)

// Sine Wave with GainNode
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

// Suspend / Resume
document
    .querySelector('#audio-context-resume')
    .addEventListener('click', () => audioContext.resume())

document
    .querySelector('#audio-context-suspend')
    .addEventListener('click', () => audioContext.suspend())

// Simple Sine Wave
document
    .querySelector('#analyzernode-start')
    .addEventListener('click', startAnalyzer(audioContext))

document
    .querySelector('#analyzernode-stop')
    .addEventListener('click', stopAnalyzer)

const canvas = document
    .querySelector('#analyzernode-canvas')
drawVisualisation(canvas)
