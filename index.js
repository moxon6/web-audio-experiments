 // @ts-check 

function sine() {
    const audioContext = new AudioContext();

    const sine = audioContext.createOscillator();
    
    sine.start();
    sine.connect(audioContext.destination);
}

document
    .querySelector('#sine-wave')
    .addEventListener('click', sine)
