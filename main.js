//Defining Variables
noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(750, 500);
    video.position(400, 412);
    canvas = createCanvas(750, 500);
    canvas.position(1400, 412);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#c28d06');
    square(noseX - 50, noseY - 50, difference);
    fill("blue");
    stroke("blue");
    document.getElementById("sidesidesideside").innerHTML = "The current side length of the blue square is " + difference + ". The coordinates are: (" + Math.floor(noseX) + ", " + Math.floor(noseY) + ")."
}
function modelLoaded() {
    console.error('PoseNet is not initialized.')
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX - rightWristX);
    } else {
        console.error("Check your code. There is an issue.");
    }
}