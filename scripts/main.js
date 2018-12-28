/*main calculator and display Elements*/
const mainCalculator = document.getElementById("main-calculator");
const display =  document.getElementById("display");
const displayedCalc = document.getElementById("displayed-calc");
const displayedInput = document.getElementById("displayed-input");

/*full calculation display*/
const displayedEntireCalc = document.getElementById("displayed-entire-calc");

/*Elements for: calculations list, description input and save calculation button*/
const displayedCalculationList = document.getElementById("displayed-calculation-list");
const calculationDescriptionInput = document.getElementById("calculation-description-input");
const saveCalculation = document.getElementById("save-calc");

/*page status alerts from calculations list section*/
const saveStatus = document.getElementById("save-status");
const listItemStatus = document.getElementById("list-item-status");

/*global arrays and boolean variables for main calculator*/
let calculation = [];
let newNumber = []; 
let newOperator = [];
let disableDec = false;

/*calculations list for storing saved saved calculations*/
let calculationsList = [];

/*reusable functions called locally through out onclick functions*/
const empty = function(array) { 
	//empties one array
	array.splice(0, array.length); 
	return array;
}
const clearInputs = function(){
	empty(newOperator);
	return empty(newNumber); //clears input arrays
}

const clearAll = function() {
	empty(calculation); 
	clearInputs(); //clears all arrays
	return disableDec = false;	
}

const clearAllAndDisplay = function(){
	clearAll();
	displayCalculation();
	return displayedInput.innerHTML = "0";/*starts the input*/
}

const pushToCalculation = function(array){
	let string =  array.join("");/*preparing for newNumber Array*/
	if(array.length > 0) { 
		string = ([".", "-."].includes(array[0])) ? array.join("") + "0" : array.join(""); 
		calculation.push(string);
		empty(array);
	}
	return array;
}

let displayFullCalc = false;
const displayCalculation = function(){
	if(displayFullCalc === true){
		displayedCalc.innerHTML = "calculation displayed above";
		displayedCalc.style.color = "rgb(146, 238, 146)"; /*light green*/
		return displayedEntireCalc.innerHTML = (calculation.length == 0) ? "cleared" : calculation.join(" ");
	} else {
		displayedEntireCalc.innerHTML = "";
		displayedCalc.style.color = "#ecf0f1";
		if(calculation.join(" ").length > 34){
			return displayedCalc.innerHTML = "..." + calculation.join(" ").slice(calculation.join(" ").length - 34);
			//keeps it to the length of 34 or less.
		} else {
			return displayedCalc.innerHTML = (calculation.length == 0) ? "cleared" : calculation.join(" ");
		}
	}
}

const displayAll = function() {
	displayCalculation(); /*called while the function returns the correct displayedInput*/
	if (newOperator.length > 0) {
		return displayedInput.innerHTML = newOperator.join("");
	}
	if (newNumber.length > 0) {
		return displayedInput.innerHTML = newNumber.join("");
	}
	if (newNumber.length <= 0 && newOperator <= 0) {
		return displayedInput.innerHTML = "Input Empty";
	}
}

const clearPageAlerts = function(){
	mainCalculator.classList.remove("success-border");
	display.classList.remove("success-border");
	listItemStatus.innerHTML = "";
	calculationDescriptionInput.classList.remove("warning-border");
	saveCalculation.classList.remove("warning-border");
	saveStatus.innerHTML = "";
}

const enlargedDisplay = document.getElementById("enlarged-display");
enlargedDisplay.style.display  = "none"; 
const switchCalculationDisplay = document.getElementById("switch-calculation-display");
switchCalculationDisplay.onclick = function(){ 
	if (displayFullCalc == true) { 	
		displayFullCalc = false;
		enlargedDisplay.style.display = "none";
 	} else {
		displayFullCalc = true;
		enlargedDisplay.style.display = "block";
	 }
	displayCalculation();
	return switchCalculationDisplay.innerHTML = (displayFullCalc == true) ? "Hide Full Calculation" : "Show Full Calculation";
}

/*list of number buttons of calculator and each onclick function*/

const numberBuilder = function(e){
	clearPageAlerts();
	if(calculation.length == 0 || newOperator.length == 1
	|| ['=', '+', '-', 'x', '/'].includes(calculation[calculation.length-1])){

		if(calculation[calculation.length-1] == "=") { clearAll(); }
		if(newOperator.length == 1 && newNumber.length >= 0) { pushToCalculation(newOperator); }

		if (e === "." && disableDec == false && newNumber.length < 35){ 
			disableDec = true;
			newNumber.push(e);
		} 
		if(e !== "." && newNumber.length < 35){ 
			newNumber.push(e); 
		}	
		displayCalculation();
		console.log(displayFullCalc);
		return displayedInput.innerHTML = (newNumber.length == 35) ? "exceeds limit>>" + newNumber.join("").slice(13) 
		: newNumber.join("");
	}
}	

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Dec"];
for (var key of numbers){
	let number = document.getElementById("num" + key);
	number.onclick = function(){
		numberBuilder(this.value);
	}
}

/*list of operator buttons of calculator and each onclick function*/
const utiliseOperator = function(e){
	if(newNumber.length >= 1 || newOperator.length == 1 || calculation.length > 0){
		disableDec = false;
		if (e === "=" && calculation[calculation.length-1] != "="){
			pushToCalculation(newNumber);//changes string to real calculation
			let realCalculation = calculation.join(" ").replace(/x/g , "*");
			empty(newOperator);
			newNumber.push(eval(realCalculation) + "");//calulates, then turns back to string for manipulation
			calculation.push(e);//only for display
			
			displayCalculation();
			return displayedInput.innerHTML = eval(realCalculation); //displays answer
		}
		if (e !== "="){ //other operators				
			if (calculation[calculation.length-1] == "=") { calculation = []; }	
			pushToCalculation(newNumber);//either new number or previous answer
			newOperator = [];
			newOperator.push(e);

			displayCalculation();
			return displayedInput.innerHTML = e;
		}
	}
}

const operatorIds = ["add", "subtract", "multiply", "divide", "answer"];
for (var key of operatorIds) {

	clearPageAlerts();

	let operator = document.getElementById(key);
	operator.onclick = function(){
		utiliseOperator(this.value);
	}
}


/*other calculator buttons*/
const negative = document.getElementById("negative");
negative.onclick = function(){
	clearPageAlerts();

	if(newNumber[0].length >= 1){
		newNumber[0] = (newNumber[0].charAt(0) === "-") ? newNumber[0].slice(1) : "-"+newNumber[0];
		console.log(newNumber);
		return displayedInput.innerHTML = newNumber.join("");
	}
}

const clear = document.getElementById("clear");
clear.onclick = function() { return clearAllAndDisplay(); }

//changes input number (new number or answer) to a negative or reverts back to positive
const remove = document.getElementById("remove");
remove.onclick = function(){

	clearPageAlerts();

	if (newOperator.length > 0 || newNumber.length > 0){
		if(['=', '+', '-', 'x', '/'].includes(calculation[calculation.length-1])){	calculation.splice(-1,1) };
		clearInputs();
	} else { 
		calculation.splice(-2,2); 
	}
	displayCalculation();
	return displayedInput.innerHTML = "removed";
}

const divide100 = document.getElementById("divide100");
divide100.onclick = function(){

	clearPageAlerts();

	if (newNumber.length >= 1){
		let tempNum = ((eval(newNumber.join("")) / 100) + "").split("");
		empty(newNumber);
		for (let value of tempNum) {
			if (value === ".") {
				disableDec = true;
			}
			newNumber.push(value);
		}
		displayCalculation();
		return displayedInput.innerHTML = newNumber.join("");
	}
}


/*resuable functions called from saveCalc.onclick*/
const displaySavedCalculations = function(){

	/*value to be returned if calculations list is empty*/
	if(calculationsList.length == 0) {
		return displayedCalculationList.innerHTML = 
			`<li class="list-group-item">
				No Calculations are saved.
			</li>`;
	}

	let calculationBriefs = [];

	/*adds all saved calculations to displayedCalcultionList*/
	for (var key in calculationsList) {
		/*local variables to keep it clean*/
		let savedDescription = calculationsList[key].savedDescription;
		let savedCalculation = calculationsList[key].savedCalculation;
		let displayedInput = calculationsList[key].displayedInput;
		let inputType = (savedCalculation[savedCalculation.length - 1] == "=") ?  "answer / next input" : "next input";
		/*HTML built for diplay*/
		calculationBriefs.push(
			`<li id="saved-calculation${key}"class="list-group-item saved-calculation">
			    <h6><strong> Description </strong> : <i>${savedDescription}</i> </h6>
				<h6><strong> Built calculation </strong> : ${savedCalculation.join(" ")} </h6>
				<h6><strong> ${inputType} </strong> : ${displayedInput} </h6>
				<button id="delete-calc${key}" class="col-xs-3 btn btn-warning delete-calc" value="${key}" href="#">delete</button>
				<button id="load-calc${key}" class="col-xs-3 btn btn-warning load-calc" value="${key}" href="#">load</button>
			</li>`
		);
		displayedCalculationList.innerHTML =  calculationBriefs.slice().reverse().join(" ");
	}

	/* Gives the buttons of the displayed calculations their required functionality and return value*/
	for (var key in calculationsList) { 
		let deleteCalc = document.getElementById("delete-calc" + key);
		deleteCalc.onclick = function() {
			calculationsList.splice(this.value, 1);
			displaySavedCalculations();
			clearPageAlerts();
			return listItemStatus.innerHTML = "Calculation data deleted!";
		}

		let loadCalc = document.getElementById("load-calc" + key);
		loadCalc.onclick = function() {
			clearPageAlerts();
			calculation = calculationsList[this.value].savedCalculation.slice();
			newOperator = calculationsList[this.value].savedOperator.slice();
			newNumber = calculationsList[this.value].savedNumber.slice();
			disableDec = calculationsList[this.value].savedDecimalStatus;
			displayAll();
			document.body.scrollTop = 0; // For Safari
			mainCalculator.classList.add("success-border");
			display.classList.add("success-border");
			return listItemStatus.innerHTML = "Calculation data loaded succesfully!";
		}
	}
};

/*save calculation button and onclick function*/
saveCalculation.onclick = function(){
	clearPageAlerts();
	if (calculationsList.length == 10) {
		calculationDescriptionInput.classList.add("warning-border");
		saveCalculation.classList.add("warning-border");
		saveStatus.style.color = "red";
		return saveStatus.innerHTML = "Can not save! Calculations List has exceeded it's data limit!";
	}/*tested*/

	let savedCalc = new Object();
		savedCalc.savedDescription = calculationDescriptionInput.value;
		savedCalc.savedCalculation = calculation.slice(); /*must pass arrays by copy, not reference*/
		savedCalc.savedNumber = newNumber.slice();
		savedCalc.savedOperator = newOperator.slice();
		savedCalc.savedDecimalStatus = disableDec;

	/*savedCalc.displayedInput*/
	if(savedCalc.savedNumber.length > 0) {
		savedCalc.displayedInput = savedCalc.savedNumber.join("");
	}
	if(savedCalc.savedOperator.length > 0) {
		savedCalc.displayedInput = savedCalc.savedOperator.join("");
	}
	if (savedCalc.savedNumber.length <= 0 && savedCalc.savedOperator.length <= 0) {
		savedCalc.displayedInput = "Input Empty";
	}
	calculationsList.push(savedCalc);
	
	displaySavedCalculations();
	saveStatus.style.color = "green";

	return saveStatus.innerHTML = "Calculation data saved below!";
}

/*keyboard returns*/
document.onkeypress = function(e) {
	var key = e.key || e.shiftKey; 
	if (e.defaultPrevented || document.activeElement.nodeName == 'TEXTAREA') {
		return; // Do nothing if the event was already processed OR if the description input (node 'TEXTAREA') is Active;
	}
	switch (key) {
		// IE/Edge specific value
		case "d": case "D":
		switchCalculationDisplay.onclick();
		 break;
		case "s": case "S":
		 saveCalculation.onclick();
		 break;
		 case "p": case "P":
		 case "%":
		 divide100.onclick();
		 break;
		 case "n": case "N":
		 negative.onclick();
		 break;
		 case "r": case "R":
		 remove.onclick();
		  // Do something for "left arrow" key press.
		 break;
		 case "c": case "C":
		 clear.onclick();
		  // Do something for "left arrow" key press.
		 break;
		 case ".":
		 numberBuilder(key);
		 break;
		 // IE/Edge specific value  
		 case "1": case "2": case "3": case "4": case "5": 
		 case "6": case "7": case "8": case "9": case "0": 
		 numberBuilder(eval(key));
		   // IE/Edge specific value
		 break;
		 case "Enter": case "Return": case "=":
		 utiliseOperator("=");
		  // Do something for "enter" or "return" key press.
		 break;
		 case "x": case "*":
		 utiliseOperator("x");
		 break;
		 case "-": case "/": case "+":
		 utiliseOperator(key);
		 break;
		 default:
		return; // Quit when this doesn't handle the key event.
	  }
	  // Cancel the default action to avoid it being handled twice
	  e.preventDefault();
};