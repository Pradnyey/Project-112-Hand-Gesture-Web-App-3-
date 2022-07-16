prediction_1 = "";
prediction_2 = "";


Webcam.set({
    width: 20,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap("data_uri")(
        document.getElementById("result1").innerHTML = '<img id="captured_image" src="' + data_uri + '">'
    );
}

console.log('ml5 version, ml5.version');

classifier = ml5.mageClassifier('https://teachablemachine.withgoogle.com/models/[...]', modelLoaded);
function modelLoaded() {
    console.log("Model Loaded!")
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "The first prediction is " + prediction_1;
    speak_data2 = "The second prediction is " + prediction_2;
    var utterThis = new.SpeechSyntesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);
}}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResut(error, results) {
    if (error) {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = resulta[0].label;
        prediction_2 = results[1].label;
        speak();
        if (results[0].label == "ThumbsUp") {
            document.getElementById("update_emoji").innerHTML = "";
        }
        if (results[0].label == "ThumbsDown") {
            document.getElementById("update_emoji").innerHTML = "";
        }
        if (results[0].label == "Swag") {
            document.getElementById("update_emoji").innerHTML = "";
        }
        if (results[0].label == "Amazing") {
            document.getElementById("update_emoji").innerHTML = "";
        }
        if (results[1].label == "ThumbsUp") {
            document.getElementById("update_emoji2").innerHTML = "";
        }
        if (results[1].label == "ThumbsDown") {
            document.getElementById("update_emoji2").innerHTML = "";
        }
        if (results[1].label == "Swag") {
            document.getElementById("update_emoji2").innerHTML = "";
        }
        if (results[1].label == "Amazing") {
            document.getElementById("update_emoji2").innerHTML = "";
        }
    }
}