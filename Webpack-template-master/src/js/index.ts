let input: HTMLInputElement = <HTMLInputElement> document.getElementById("wordInput"); 
let selection: HTMLSelectElement = <HTMLSelectElement> document.getElementById("Skrifttype"); 
let button: HTMLButtonElement = <HTMLButtonElement> document.getElementById("ActionButtion"); 
let output: HTMLSpanElement = <HTMLSpanElement> document.getElementById("Output");

button.addEventListener("click", function(){TextHandler()}) 

function TextHandler() {
    if (selection.selectedIndex == 0) {
       output.innerHTML = input.value.toUpperCase();

    }
    else if (selection.selectedIndex == 1) {
        output.innerHTML = input.value.toLowerCase();
        
    }
}


