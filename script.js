let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
audioCtx.suspend();

// 'https://cdn.glitch.com/1799240d-3e65-4cf9-9b14-dc76fcfca35a%2Fcool%201.mp3?v=1607455187106'
// 'https://github.com/Wwilli04/kmart-radio/blob/main/interstitial/KMRTeeeeeeeee.wav'

let audioA = new Audio('https://github.com/Wwilli04/kmart-radio/blob/main/interstitial/KMRTeeeeeeeee.wav')
usedAudioFiles = [audioA]

var collectorNode = audioCtx.createGain();

console.log("we did it");

let nodeList = []
for (file of usedAudioFiles) {
    file.crossOrigin="anonymous";
    nodeList.push(audioCtx.createMediaElementSource(file));
}
for (node of nodeList) {
    node.connect(collectorNode)
}

collectorNode.connect(audioCtx.destination)
collectorNode.gain.value = 1.5;


function test() {
    audioCtx.resume();
    audioA.play();
}
