
var bubbleContainer = document.getElementsByClassName("bubble-container")[0];
var dimension = 5;

for (var i=0; i < dimension; i++) {
    for (var j=0; j < dimension; j++) {
        var newDiv = document.createElement('div');
        newDiv.classList.add("bubble");
        newDiv.classList.add("bubble-row");
        bubbleContainer.appendChild(newDiv);
    }
}