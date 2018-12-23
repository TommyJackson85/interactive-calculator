/*main calculator and display Elements*/
const mainCalculator = document.getElementById("main-calculator");
const display =  document.getElementById("display");
const displayedCalc = document.getElementById("displayedCalc");
const displayedInput = document.getElementById("displayedInput");

/*Elements for: calculations list, description input and save calculation button*/
const displayedCalculationList = document.getElementById("displayedCalculationList");
const calculationDescriptionInput = document.getElementById("calculationDescriptionInput");
const saveCalculation = document.getElementById("saveCalc");

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
	displayedInput.innerHTML = "0";//tells user everything is cleared
	return displayedCalc.innerHTML = "cleared";
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

const displayCalculation = function(){
	if(calculation.join(" ").length > 34){
		return displayedCalc.innerHTML = "..." + calculation.join(" ").slice(calculation.join(" ").length - 34);
		//keeps it to the length of 34 or less.
	} else {
		return displayedCalc.innerHTML = (calculation.length == 0) ? "cleared" : calculation.join(" ");
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


/*list of number buttons of calculator and each onclick function*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Dec"];
for (var key of numbers){
	let number = document.getElementById("num" + key);
	number.onclick = function numberBuilder(){
		
		clearPageAlerts();

		if(calculation.length == 0 || newOperator.length == 1
		|| ['=', '+', '-', 'x', '/'].includes(calculation[calculation.length-1])){

			if(calculation[calculation.length-1] == "=") { clearAll(); }
			if(newOperator.length == 1 && newNumber.length >= 0) { pushToCalculation(newOperator); }
	
			if (this.value === "." && disableDec == false && newNumber.length < 35){ 
				disableDec = true;
				newNumber.push(this.value);
			} 
			if(this.value !== "." && newNumber.length < 35){ 
				newNumber.push(this.value); 
			}	

			displayCalculation();
			return displayedInput.innerHTML = (newNumber.length == 35) ? "exceeds limit>>" + newNumber.join("").slice(13) 
			: newNumber.join("");
		}
	}	
}

/*list of operator buttons of calculator and each onclick function*/
const operatorIds = ["add", "subtract", "multiply", "divide", "answer"];
for (var key of operatorIds) {

	clearPageAlerts();

	let operator = document.getElementById(key);
	operator.onclick = function utiliseOperator(){
		if(newNumber.length >= 1 || newOperator.length == 1 || calculation.length > 0){
			disableDec = false;
			if (this.value === "=" && calculation[calculation.length-1] != "="){
				pushToCalculation(newNumber);//changes string to real calculation
				let realCalculation = calculation.join(" ").replace(/x/g , "*");
				empty(newOperator);
				newNumber.push(eval(realCalculation) + "");//calulates, then turns back to string for manipulation
				calculation.push("=");//only for display
				
				displayCalculation();
				return displayedInput.innerHTML = eval(realCalculation); //displays answer
			}
			if (this.value !== "="){ //other operators				
				if (calculation[calculation.length-1] == "=") { calculation = []; }	
				pushToCalculation(newNumber);//either new number or previous answer
				newOperator = [];
				newOperator.push(this.value);

				displayCalculation();
				return displayedInput.innerHTML = this.value;
			}
		}
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
			`<li id="savedCalculation${key}"class="list-group-item saved-calculation">
			    <h6><strong> Description </strong> : <i>${savedDescription}</i> </h6>
				<h6><strong> Built calculation </strong> : ${savedCalculation.join(" ")} </h6>
				<h6><strong> ${inputType} </strong> : ${displayedInput} </h6>
				<button id="deleteCalc${key}" class="col-xs-3 btn btn-warning deleteCalc" value="${key}" href="#">delete</button>
				<button id="loadCalc${key}" class="col-xs-3 btn btn-warning loadCalc" value="${key}" href="#">load</button>
			</li>`
		);
		displayedCalculationList.innerHTML =  calculationBriefs.slice().reverse().join(" ");
	}

	/* Gives the buttons of the displayed calculations their required functionality and return value*/
	for (var key in calculationsList) { 
		let deleteCalc = document.getElementById("deleteCalc" + key);
		deleteCalc.onclick = function() {
			calculationsList.splice(this.value, 1);
			displaySavedCalculations();
			clearPageAlerts();
			return listItemStatus.innerHTML = "Calculation data deleted!";
		}

		let loadCalc = document.getElementById("loadCalc" + key);
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