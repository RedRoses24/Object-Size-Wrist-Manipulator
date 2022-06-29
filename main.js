noseX=0;
noseY=0;
RightWristX=0;
LeftWristX=0;
Difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    video.position(255, 150)
    canvas=createCanvas(550, 500);
    canvas.position(855, 150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}
function draw(){
    background('lightcyan');
    fill('lightpink');
    stroke('black');
    square(noseX, noseY, Difference);
    document.getElementById("square_size").innerHTML="The size of the square is: "+Difference+" px";
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPose(results){
    if(results.length>0){
        console.log("Results");
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("The NoseX= "+noseX+ ",noseY= "+ noseY);
        LeftWristX=results[0].pose.leftWrist.x;
        RightWristX=results[0].pose.rightWrist.x;
        console.log("The RightWristX= "+RightWristX+" and the LeftWristX= "+LeftWristX);

        Difference=floor(LeftWristX-RightWristX);
        console.log("The difference is: "+Difference);
    }
}
