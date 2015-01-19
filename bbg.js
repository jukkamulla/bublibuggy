
var bubbleContainer = document.getElementsByClassName("bubble-container")[0];
var dimension = 5;
var value = 0;

for (var i=0; i < dimension; i++) {
    for (var j=0; j < dimension; j++) {
        value++;
        var newDiv = document.createElement('div');
        newDiv.classList.add("bubble");
        newDiv.classList.add("bubble-row");
        var valueElement = document.createElement('p');
        valueElement.innerHTML = value.toString();
        valueElement.classList.add("expression");
        newDiv.appendChild(valueElement);
        bubbleContainer.appendChild(newDiv);
    }
}