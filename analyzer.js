// @ts-check 

let analyser;
let dataArray;

export const start = audioContext => () => {
    if (!analyser) {
        const sine = audioContext.createOscillator();
        sine.frequency.setValueAtTime(128, audioContext.currentTime);        
        sine.start()

        const sine2 = audioContext.createOscillator();
        sine2.frequency.setValueAtTime(128.1, audioContext.currentTime);
        sine2.start()

        analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048;

        sine.connect(analyser);
        sine2.connect(analyser);
        analyser.connect(audioContext.destination);

        const bufferLength = analyser.frequencyBinCount
        dataArray = new Uint8Array(bufferLength);
    }
}

export const stop = () => {
    if (analyser) {
        analyser.disconnect()
        analyser = null
    }
}


export function draw(canvas) {

    const canvasContext = canvas.getContext("2d");
    const [ WIDTH, HEIGHT ] = [canvas.width, canvas.height];

    _draw()
    function _draw() {
        if (analyser && dataArray) {
            
            const bufferLength = analyser.frequencyBinCount;
            canvasContext.clearRect(0, 0, WIDTH, HEIGHT);

            canvasContext.lineWidth = 1;
            canvasContext.strokeStyle = 'black';
            canvasContext.beginPath();
    
            const sliceWidth = WIDTH / bufferLength;

            analyser.getByteTimeDomainData(dataArray);
            for(const [i, v] of dataArray.entries()) {
                canvasContext.lineTo(
                    i * sliceWidth, 
                    v * (HEIGHT/256)
                );
            }
    
            canvasContext.stroke();
        }
        requestAnimationFrame(_draw);
    }

    
}

