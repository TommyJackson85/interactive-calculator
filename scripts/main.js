
/*global viarables to allow consistant access from bult functions*/
/*main calculator and display Elements*/
const mainCalculator = document.getElementById("main-calculator");
const display =  document.getElementById("display");
const displayedCalc = document.getElementById("displayed-calc");
const displayedInput = document.getElementById("displayed-input");

/*full calculation display*/
const enlargedDisplay = document.getElementById("enlarged-display");
const displayedEntireCalc = document.getElementById("displayed-entire-calc");/*child div of enlargedDisplay*/
let displayFullCalc = false;

/*Elements for: calculations list, description input and save calculation button*/
const displayedCalculationList = document.getElementById("displayed-calculation-list");
const calculationDescriptionInput = document.getElementById("calculation-description-input");
const saveCalculation = document.getElementById("save-calc");

/*page status alerts from calculations list section*/
const saveStatus = document.getElementById("save-status");
const calculatorStatus = document.getElementById("calculator-status");
const warningStatus = document.getElementById("warning-status");

/*global arrays and boolean variables for main calculator*/
let calculation = [];
let newNumber = []; 
let newOperator = [];
let disableDec = false;
let divide100Activated = false;

/*calculations list for storing saved saved calculations*/
let calculationsList = [];

/*reusable functions called locally through onclick functions, reducing code. Carefully designed, so when called they don't cause inconsistancies and errors*/
const empty = function(array) { 
	//empties one array
	array.splice(0, array.length); 
	return array;
};
const clearInputs = function(){
	divide100Activated = false;
	disableDec = false; //resets for both remove and clear buttons
	empty(newOperator);
	return empty(newNumber); //clears input arrays
};
const clearAll = function() {
	empty(calculation); 
	clearInputs(); //clears all arrays
	return disableDec;
};
const clearAllAndDisplay = function(){
	clearAll();
	displayCalculation();
	displayedInput.innerHTML = "0";
	return displayedInput.innerHTML;/*starts the input*/
};
const pushToCalculation = function(array){
	let string =  array.join("");/*preparing for newNumber Array*/
	if(array.length > 0) { 
		calculation.push(string);
		empty(array);
	}
	return array;
};
const displayAll = function() {
	displayCalculation(); /*called while the function returns the correct displayedInput*/
	if (newOperator.length > 0) {
		displayedInput.innerHTML = newOperator.join("");
	}
	if (newNumber.length > 0) {
		displayedInput.innerHTML = newNumber.join("");
	}
	if (newNumber.length <= 0 && newOperator <= 0) {
		displayedInput.innerHTML = "Input Empty";
	}
	return displayedInput.innerHTML;
};

const clearPageAlerts = function(){
	saveStatus.innerHTML = "";
	calculatorStatus.innerHTML = "";
	warningStatus.innerHTML = "";
	mainCalculator.classList.remove("success-border");
	display.classList.remove("success-border");
	displayedCalculationList.classList.remove("success-border");
	calculationDescriptionInput.classList.remove("warning-border");
	saveCalculation.classList.remove("warning-border");
};

const displayCalculation = function(){
	if(displayFullCalc === true){
		/*moves built calculation to enlarged display*/
		displayedCalc.innerHTML = "calculation displayed above";
		displayedCalc.classList.add('green-display-text');
		displayedEntireCalc.innerHTML = (calculation.length == 0) ? "cleared" : calculation.join(" ");
		return displayedEntireCalc.innerHTML;
	} else {
		/*moves built calculation to calculator display*/
		displayedEntireCalc.innerHTML = "";
		displayedCalc.classList.remove('green-display-text');
		if(calculation.join(" ").length > 34){
			displayedCalc.innerHTML = "..." + calculation.join(" ").slice(calculation.join(" ").length - 34);
			//keeps it to the length of 34 or less.
		} else {
			displayedCalc.innerHTML = (calculation.length == 0) ? "cleared" : calculation.join(" ");
		}
		return displayedCalc.innerHTML;
	}
};

enlargedDisplay.style.display  = "none"; /*not displayed on page load as it is only optional*/
const switchCalculationDisplay = document.getElementById("switch-calculation-display");
switchCalculationDisplay.onclick = function(){
	/*hides or shows enlarged display*/ 
	if (displayFullCalc == true) { 	
		displayFullCalc = false;
		enlargedDisplay.style.display = "none";
 	} else {
		displayFullCalc = true;
		enlargedDisplay.style.display = "block";
	 }
	
	displayCalculation();
	/*returns Button label*/
	switchCalculationDisplay.innerHTML = (displayFullCalc == true) ? "Hide Full Calculation" : "Show Full Calculation";
	return switchCalculationDisplay.innerHTML;
};

/*numberBuilder function which is called from number on click*/
const numberBuilder = function(e){
	clearPageAlerts();
	e.toString();
	//if numberBuilder is allowed
	if(calculation.length == 0 || newOperator.length == 1 || ['=', '+', '-', 'x', '/'].includes(calculation[calculation.length-1])){
		//if operator was in use, its pushed to calculator
		if(newOperator.length == 1){
			pushToCalculation(newOperator);
		}
		//if divede100 was called on current number input, it will restart the number
		if(divide100Activated == true){
			empty(newNumber);
			divide100Activated = false;
			disableDec = false;
		}
		//won't allow user start a number with just 0			
		if(e == "0" && newNumber.length == 0){
			displayCalculation();
			displayedInput.innerHTML = "0";
			return displayedInput.innerHTML;
		}
		//if number was previously calculated, it will restart calculation 
		if(calculation[calculation.length-1] == "="){
			//does't push 0 as a starting number	
			if(e == "0"){
				return clearAllAndDisplay();
			}
			//clears arrays and continues
			clearAll(); 
		}
		//won't add number if new number is 35 in length
		//allows decimal to be used once
		if (e === "." && disableDec == false && newNumber.length < 35){ 
			disableDec = true;
			//if starting a number with a decimal, it needs to add a '0' first to prevent errors
			if(newNumber.length == 0){
				newNumber.push("0");
				newNumber.push(e);
			} else {
				newNumber.push(e);
			}
		} 
		//adds other number digits
		if(e !== "." && newNumber.length < 35){ 
			newNumber.push(e); 
		}
		//re displays calculation and input after adding to newNumber
		displayCalculation();
		displayedInput.innerHTML = (newNumber.length == 35) ? "exceeds limit>>" + newNumber.join("").slice(15) 
		: newNumber.join("");
		return displayedInput.innerHTML;
	}
};
	
/*list of number buttons of calculator and each onclick function*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Dec"];
for(var n = 0; n < numbers.length; n++) {
	let number = document.getElementById("num" + numbers[n]);
	number.onclick = function(){
		numberBuilder(this.value);
	};
}

/*utiliseOperator fuction which is called from operator.onclick()*/
const utiliseOperator = function(e){
	//if previous number is a resemblance of 0 when evaluated or new number is empty, operator isnt pushed
	if( eval(newNumber.join("")) == 0 || eval(newNumber.join("")) == -0 || newNumber == [] || displayedInput.innerHTML == "0"){
		clearInputs();
		displayedInput.innerHTML = "0";
		return displayedInput.innerHTML;
	}
	if(displayedInput.innerHTML != "0" && (newNumber.length >= 1 || newOperator.length == 1 || calculation.length > 0)){		
		divide100Activated = false;
		disableDec = false;
		//evaluate calculation
		if (e === "=" && calculation[calculation.length-1] != "="){
			pushToCalculation(newNumber);
			let realCalculation = calculation.join(" ").replace(/x/g , "*");
			empty(newOperator);
			if (eval(realCalculation) != 0){
				newNumber = (eval(realCalculation) + "").split("");
				//calculates, then turns back into string for manipulation
			}
			calculation.push(e);//pushed "=" for display
			displayCalculation();
			displayedInput.innerHTML = eval(realCalculation); //displays answer
		}
		//other operators
		if (e !== "="){			
			if (calculation[calculation.length-1] == "=") { calculation = []; }	
			//either new number or previous answer
			pushToCalculation(newNumber);
			newOperator = [];
			newOperator.push(e);
			displayCalculation();
			displayedInput.innerHTML = e;
		}
		return displayedInput.innerHTML;
	}
};

/*list of operator buttons of calculator and each onclick function*/
const operatorIds = ["add", "subtract", "multiply", "divide", "answer"];
for(var o = 0; o < operatorIds.length; o++) {
	clearPageAlerts();
	let operator = document.getElementById(operatorIds[o]);
	operator.onclick = function(){
		utiliseOperator(this.value);
	};
}

/*other calculator buttons*/
//changes input number (new number or answer) to a negative or reverts back to positive
const plusMinus = document.getElementById("plus-minus");
plusMinus.onclick = function(){
	if (newNumber.length == 0){
		return;
	}
	if(newNumber[0] == "-"){// if its a '-' on its on and not part of a digit
		newNumber.splice(0,1);
		displayedInput.innerHTML = newNumber.join("");
		return displayedInput.innerHTML;
	}
	if(newNumber[0].length >= 1){
		clearPageAlerts();
		newNumber[0] = (newNumber[0].charAt(0) === "-") ? newNumber[0].slice(1) : "-"+newNumber[0];
		displayedInput.innerHTML = newNumber.join("");
		return displayedInput.innerHTML;
	}
};

//divides built number by 100
 //if true, numberBuilder will restarts new number
const divide100 = document.getElementById("divide100");
divide100.onclick = function(){
	clearPageAlerts();
	if (newNumber.length >= 1){
		//temporarary array while emptying newNumber
		let tempNum = ((eval(newNumber.join("")) / 100) + "").split("");		
		empty(newNumber);
		//if "0" return display input as '0'
		if (tempNum.join("") == "0"){
			disableDec = false;
			displayedInput.innerHTML = "0";
			return displayedInput.innerHTML;
		}
		//tempNum indexes tp newNumber array
		for(var t = 0; t < tempNum.length; t++) {
			if(tempNum[t] === "." || tempNum[t] === "0.") {
				disableDec = true;
			}
			newNumber.push(tempNum[t]);//important reference for number builder function
			divide100Activated = true; // for full numbers, not zero numbers
		}
		//important reference for number builder function
		displayCalculation();
		displayedInput.innerHTML = newNumber.join("");
		return displayedInput.innerHTML;
	}
};

//restarts calculator
const clear = document.getElementById("clear");
clear.onclick = function() { 
	return clearAllAndDisplay(); 
};

//removes previous displayedInput and/or the last 1 or 2 indexs of the calculation array, leaving a number as the last index
const remove = document.getElementById("remove");
remove.onclick = function(){
	clearPageAlerts();
	if (newOperator.length > 0 || newNumber.length > 0){
		if(['=', '+', '-', 'x', '/'].includes(calculation[calculation.length-1])){	
			calculation.splice(-1,1);
		}
		clearInputs();
	} else { 
		calculation.splice(-2,2); 
	}
	disableDec = false;
	displayCalculation();
	displayedInput.innerHTML = "removed";
	return displayedInput.innerHTML;
};

const scrollToTop = function(){
	/*code source: https://stackoverflow.com/questions/10063380/smooth-scroll-without-the-use-of-jquery*/
	let eID = document.getElementById("home");
	function currentYPosition() { // Gets current Y axis position
		// Firefox, Chrome, Opera, Safari
		if (self.pageYOffset) return self.pageYOffset;
		// Internet Explorer 6 - standards mode
		if (document.documentElement && document.documentElement.scrollTop)
			return document.documentElement.scrollTop;
		// Internet Explorer 6, 7 and 8
		if (document.body.scrollTop) return document.body.scrollTop;
		return 0;
	}		
	function elmYPosition(eID) {
		var elm = eID;
		var y = elm.offsetTop;
		var node = elm;
		while (node.offsetParent && node.offsetParent != document.body) {
			node = node.offsetParent;
			y += node.offsetTop;
		} return y;
	}
	function smoothScroll(eID) {
		var startY = currentYPosition();
		var stopY = elmYPosition(eID);
		var distance = stopY > startY ? stopY - startY : startY - stopY;
		if (distance < 100) {
			scrollTo(0, stopY); return;
		}
		var speed = Math.round(distance / 100);
		if (speed >= 20) speed = 20;
		var step = Math.round(distance / 25);
		var leapY = stopY > startY ? startY + step : startY - step;
		var timer = 0;
		if (stopY > startY) {
			for ( var i=startY; i<stopY; i+=step ) {
				setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
				leapY += step; if (leapY > stopY) leapY = stopY; timer++;
			} return;
		}
		for ( var j=startY; j>stopY; j-=step ) {
			setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
			leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
		}
	}
	return smoothScroll(eID);
}

//resuable function called from saveCalc.onclick
const displaySavedCalculations = function(){
	/*value to be returned if calculations list is empty*/
	if(calculationsList.length == 0) {
		displayedCalculationList.innerHTML = 
			`<li class="saved-item-background list-group-item">
				No Calculations are saved.
			</li>`;
		return displayedCalculationList.innerHTML;
	}
	let calculationBriefs = [];
	/*adds all saved calculations to displayedCalcultionList*/
	for(var c = 0; c < calculationsList.length; c++) {
		let savedDescription = calculationsList[c].savedDescription;
		let savedCalculation = calculationsList[c].savedCalculation;
		let displayedInput = calculationsList[c].displayedInput;
		let inputType = (savedCalculation[savedCalculation.length - 1] == "=") ?  "answer / next input" : "next input";
		/*HTML built for diplay*/
		if(calculatorStatus.innerHTML == "Calculator data saved to Calculation Backup!" && c == calculationsList.length - 1){
			/*newest saved item, with an added CSS transition*/
			calculationBriefs.push(
				`<li id="saved-calculation${c}"class="list-group-item new-saved-calculation">
					<h6><strong> Description </strong> : <i>${savedDescription}</i> </h6>
					<h6><strong> Built calculation </strong> : ${savedCalculation.join(" ")} </h6>
					<h6><strong> ${inputType} </strong> : ${displayedInput} </h6>
					<button id="delete-calc${c}" class="btn red-button delete-calc" value="${c}">delete</button>
					<button id="load-calc${c}" class="btn green-button load-calc" value="${c}">load</button>
				</li>`
			);
		} else {
			/*other saved items*/
			calculationBriefs.push(
				`<li id="saved-calculation${c}"class="list-group-item saved-calculation">
					<h6><strong> Description </strong> : <i>${savedDescription}</i> </h6>
					<h6><strong> Built calculation </strong> : ${savedCalculation.join(" ")} </h6>
					<h6><strong> ${inputType} </strong> : ${displayedInput} </h6>
					<button id="delete-calc${c}" class="btn red-button delete-calc" value="${c}">delete</button>
					<button id="load-calc${c}" class="btn green-button load-calc" value="${c}">load</button>
				</li>`
			);
		}
		displayedCalculationList.innerHTML =  calculationBriefs.slice().reverse().join(" ");
	}
	/*Gives the buttons of the displayed calculations their required functionality and return value*/
	for(var d = 0; d < calculationsList.length; d++) {
		let deleteCalc = document.getElementById("delete-calc" + d);
		deleteCalc.onclick = function() {
			clearPageAlerts();
			this.parentElement.classList.add("removing-list-item");
			let v = this.value;
			setTimeout(function(){
				calculationsList.splice(v, 1);
				displaySavedCalculations();
			},500);
			warningStatus.innerHTML = "Calculation data deleted!";
			return warningStatus.innerHTML;
		}
		let loadCalc = document.getElementById("load-calc" + d);
		loadCalc.onclick = function() {
			clearPageAlerts();
			calculation = (calculationsList[this.value].savedCalculation[0] == "Calculation Empty") ? [] : calculationsList[this.value].savedCalculation.slice();
			newOperator = calculationsList[this.value].savedOperator.slice();
			newNumber = calculationsList[this.value].savedNumber.slice();
			disableDec = calculationsList[this.value].savedDecimalStatus;
			divide100Activated = calculationsList[this.value].savedDivide100Status;
			displayAll();
			scrollToTop();
			mainCalculator.classList.add("success-border");
			display.classList.add("success-border");
			calculatorStatus.innerHTML = "Calculation data loaded succesfully!";
			return calculatorStatus.innerHTML;
		}
	}
};

/*save calculation button and onclick function*/
saveCalculation.onclick = function(){
	clearPageAlerts();
	if (calculationsList.length == 10) {
		calculationDescriptionInput.classList.add("warning-border");
		saveCalculation.classList.add("warning-border");
		warningStatus.innerHTML = "Can not save! Calculations List has exceeded it's data limit!";
		return warningStatus.innerHTML;
	}
	let savedCalc = new Object();
	/*must pass arrays by copy, not reference*/
	savedCalc.savedNumber = newNumber.slice();
	savedCalc.savedOperator = newOperator.slice();
	savedCalc.savedDecimalStatus = disableDec;
	savedCalc.savedDivide100Status = divide100Activated;
	savedCalc.savedDescription = (calculationDescriptionInput.value.length <= 0) ? "No Description Included" : calculationDescriptionInput.value;
	savedCalc.savedCalculation = (calculation.slice().length <= 0) ? ["Calculation Empty"] : calculation.slice(); 
	//"Calculation Empty" is only for display puroses in the list of saved calculations. This will not be loaded into the calculator when the load button is clicked

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
	
	setTimeout(function(){
		displaySavedCalculations(); 
	}, 30);
	
	displayedCalculationList.classList.add("success-border");
	saveStatus.innerHTML = "Calculator data saved below!";
	calculatorStatus.innerHTML = "Calculator data saved to Calculation Backup!";
	return calculatorStatus.innerHTML;
}

/*keyboard press responses*/
document.onkeypress = function(e) {
	var key = e.key; 
	if (e.defaultPrevented || document.activeElement.tagName == 'TEXTAREA') {
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
		 case "%":
		 divide100.onclick();
		 break;
		 case "±":
		 plusMinus.onclick();
		 break;
		 case "r": case "R":
		 remove.onclick();
		 break;
		 case "c": case "C":
		 clear.onclick();
		 break
		 case ".":
		 numberBuilder(key);
		 break;
		 // IE/Edge specific value  
		 case "1": case "2": case "3": case "4": case "5": 
		 case "6": case "7": case "8": case "9": case "0": 
		 numberBuilder(key);
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