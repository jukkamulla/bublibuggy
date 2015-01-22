
var bubbleContainer = document.getElementsByClassName("bubble-container")[0];
var dimension = 5;
var value = 0;

function buildGameTable() {
    for (var i = 0; i < dimension; i++) {
        for (var j = 0; j < dimension; j++) {
            value++;
            var newDiv = document.createElement('div');
            newDiv.classList.add("bubble");
            newDiv.classList.add("bubble-row");
            var valueElement = document.createElement('p');
            valueElement.classList.add("expression");
            newDiv.appendChild(valueElement);
            bubbleContainer.appendChild(newDiv);
        }
    }
}

function randomNumber() {
    var number = Math.floor((Math.random() * 100) + 1);
    return number;
}

var setGoalNumber = function () {
    var number = randomNumber();
    if (number <10 ){
        number = 10;
    }
    var numberElement = document.getElementsByClassName("number")[0];
    numberElement.innerHTML = number.toString();
};

setGoalNumber();




function setValueOfBubbles() {
    var bubbles = document.getElementsByClassName("bubble");
    for (var i = 0; i < bubbles.length; i++) {
        var randomNumber = Math.floor((Math.random() * 99) + 1);
        var bubbleDiv = bubbles[i];
        var bubbleP = bubbleDiv.firstChild;
        bubbleP.innerHTML = randomNumber;
        if (randomNumber < 20 || randomNumber > 60) {
            bubbleP.classList.remove("expression-visible");
            bubbleDiv.classList.remove("bubble-visible");
            bubbleP.classList.add("hided-expression");
            bubbleDiv.classList.add("hided-bubble");
        } else {
            bubbleP.classList.remove("hided-expression");
            bubbleDiv.classList.remove("hided-bubble");
            bubbleP.classList.add("expression-visible");
            bubbleDiv.classList.add("bubble-visible");
        }
    }
}

function play() {
    setInterval(setValueOfBubbles, 2000);
    buildGameTable();
    var welcomeText = document.getElementById("welcome-text");
    welcomeText.style.display = "none";
}

