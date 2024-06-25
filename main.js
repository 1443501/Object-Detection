img="";
status="";
object=[];
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Images";

}
function preload(){
    img=loadImage('dog_cat.jpg');
}
function draw(){
   image(img,0,0,640,420);
   if(status !=""){
    document.getElementById("status").innerHTML="Object is detected";

    for(var i=0; i<objects.length; i++){
        fill("red");
        percent= floor(object[i].confidence*100);
        text(object[i].label + " "+ percent+ "%",object[i].x+15, object[i].y+15);
        noFill();
        stroke("red");
        rect(object[i].x, object[i].y, object[i].width, object[i].height); 

    }
   }
    

}

function modelLoaded(){
console.log("Model is loaded");
status="true";
objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
