 // @ts-check 

const audioContext = new AudioContext();

let sine;
export const start = () => {
    if (!sine) {
        sine = audioContext.createOscillator();    
        sine.connect(audioContext.destination);
        sine.start()
    }
}

export const stop = () => {
    if (sine) {
        sine.stop()
        sine = null
    }
}

