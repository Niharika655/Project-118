function setup() {
    canvas = createCanvas(300, 300)
    canvas.position(550,150);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xlBcUnfg1/model.json", modelLoaded);
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function modelLoaded() {
    console.log("Model Loaded");
}

function gotResult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        document.getElementById("resultObjectName").innerHTML = result[0].label;
        document.getElementById("resultObjectAccuracy").innerHTML = result[0].confidence;
    }
}