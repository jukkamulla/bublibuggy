
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
    var number = Math.floor((Math.random() * 99) + 1);
    return number;
}

var setGoalNumber = function () {
    var number = randomNumber();
    if (number <30 ){
        number = 30;
    }
    var numberElement = document.getElementById("goal");
    numberElement.innerHTML = number.toString();
};

setGoalNumber();

function setValueOfBubbles() {
    var bubbles = document.getElementsByClassName("bubble");
    for (var i = 0; i < bubbles.length; i++) {
        var randomNumber = parseInt(randomBetween(-50, 50));
        var bubbleDiv = bubbles[i];
        var bubbleP = bubbleDiv.firstChild;
        bubbleP.innerHTML = randomNumber;
        if (randomNumber < -20 || randomNumber > 20) {
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
        if (randomNumber < 0) {
            bubbleP.style.color = "#FFDAC9";
        } else if (randomNumber === 0) {
            bubbleP.style.color = "#CECECE";
        } else {
            bubbleP.style.color = "#CAFFC5";
        }
    }
}

function randomBetween(min, max) {
    if (min < 0) {
        return min + Math.random() * (Math.abs(min)+max);
    }else {
        return min + Math.random() * max;
    }
}

function play() {
    setInterval(setValueOfBubbles, 2000);
    buildGameTable();
    var welcomeText = document.getElementById("welcome-text");
    welcomeText.style.display = "none";
}

document.addEventListener('click', function(event) {
    event = event || window.event;
    var target = event.target || event.srcElement;
    var elementOpacity = window.getComputedStyle(target, null).getPropertyValue('opacity');
    var text = target.textContent || text.innerText;
    if (target.className ==! "expression expression-visible" && target.className ==! "bubble bubble-row bubble-visible") {
        return false;
    }

    if (elementOpacity > 0) {
        var counterElement = document.getElementById("counter");
        var goalNumber = parseInt(document.getElementById("goal").innerHTML);
        var counterNumber = parseInt(counterElement.innerHTML);
        if (isNaN(counterNumber)) {
            counterNumber = 0;
        }
        var clickedNumber = parseInt(text);
        if (isNaN(clickedNumber)) {
            clickedNumber = 0;
        }
        var newCounterValue = counterNumber + clickedNumber;
        if (newCounterValue > goalNumber) {
            newCounterValue = 0;
        } else if (newCounterValue === goalNumber) {
            clearInterval(1);
            var container = document.getElementById('container');
            container.style.display = 'none';
            console.log("Wow you are the winner!!!");
        }
        counterElement.innerHTML = (newCounterValue).toString();
    }

}, false);