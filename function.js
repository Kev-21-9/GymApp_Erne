const formula = document.getElementById("formula");
formula.addEventListener('submit', newWorkout);

function newWorkout(event){
    event.preventDefault()
    const input = document.getElementById("workoutfield");
    displayElement.textContent = input;
}

var buttons = document.querySelectorAll('button');
for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', openNewTab, false);
}

function openNewTab(event) {
   window.open(event.target.dataset.url, '_blank');
}
