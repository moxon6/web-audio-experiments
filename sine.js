 // @ts-check 

let sine;
export const start = audioContext => () => {
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
   