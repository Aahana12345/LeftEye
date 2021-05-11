leftEyeX=0;
leftEyeY=0;
function preload(){
    left_Eye=loadImage('https://i.postimg.cc/Qtfp3DtK/Left-eye.jpg');
}

function setup(){
    canvas=createCanvas(200,200);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(200,200);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function gotPoses(results){
    if (results.length >0){
        console.log(results);
        leftEyeX=results[0].pose.leftEye.x-15;
        leftEyeY=results[0].pose.leftEye.y-15;
        console.log("leftEye x"+results[0].pose.leftEye.x);
        console.log("leftEye y"+results[0].pose.leftEye.y                                                                                                                 );
    }
}

function draw(){
image(video,0,0,200,200);
image(left_Eye,leftEyeX,leftEyeY,30,30);

}

function take_snapshot(){
save('myfliterimage.png');
}

function modelLoaded(){
    console.log('poseNet is on');

}