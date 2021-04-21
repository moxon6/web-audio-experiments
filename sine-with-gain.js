 // @ts-check 

 let gainNode;
 export const start = (val, audioContext) => () => {
     console.log("Starting");
     if (!gainNode) {
         const sine = audioContext.createOscillator();
         sine.start()

         gainNode = audioContext.createGain();
         setGain(val, audioContext)
         
         sine.connect(gainNode);
         gainNode.connect(audioContext.destination);
     }
 }
 
 export const stop = () => {
     if (gainNode) {
         gainNode.disconnect()
         gainNode = null
     }
}

export const setGain = (val, audioContext) => gainNode && gainNode.gain.setValueAtTime(val / 100, audioContext.currentTime);
