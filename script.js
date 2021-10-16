function setup(){
    video = createCapture(VIDEO);
    video.size(540, 510);

    canvas = createCanvas(540, 510);
    canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
function draw(){
    background("#ff0000")
}}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}