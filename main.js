var img = "";
var object_status = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("model is loaded");

    object_status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {

    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
}

function preload() {
    img = loadImage('dog_cat.jpg');
}

function draw() {
    image(img, 0, 0, 640, 420);

    fill("black");
    textSize(15);
    text("Dog", 45, 75);
    noFill();
    stroke("#003333");
    rect(30, 60, 450, 350);

    fill("black");
    textSize(15);
    text("Cat", 305, 85);
    noFill();
    stroke("#003333");
    rect(300, 65, 300, 330);
}