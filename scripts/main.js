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
const loadStatus = document.getElementById("load-status");
const warningStatus = document.getElementById("warning-status");

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
		if (string == "." || string == "-.") {
			string = array.join("") + "0"; 
		} 
		calculation.push(string);
		empty(array);
	}
	return array;
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
	saveStatus.innerHTML = "";
	loadStatus.innerHTML = "";
	warningStatus.innerHTML = "";
	mainCalculator.classList.remove("success-border");
	display.classList.remove("success-border");
	calculationDescriptionInput.classList.remove("warning-border");
	saveCalculation.classList.remove("warning-border");
}

const displayCalculation = function(){
	if(displayFullCalc === true){
		/*moves built calculation to enlarged display*/
		displayedCalc.innerHTML = "calculation displayed above";
		displayedCalc.classList.add('green-display-text');
		return displayedEntireCalc.innerHTML = (calculation.length == 0) ? "cleared" : calculation.join(" ");
	} else {
		/*moves built calculation to calculator display*/
		displayedEntireCalc.innerHTML = "";
		displayedCalc.classList.remove('green-display-text');
		if(calculation.join(" ").length > 34){
			return displayedCalc.innerHTML = "..." + calculation.join(" ").slice(calculation.join(" ").length - 34);
			//keeps it to the length of 34 or less.
		} else {
			return displayedCalc.innerHTML = (calculation.length == 0) ? "cleared" : calculation.join(" ");
		}
	}
}

enlargedDisplay.style.display  = "none"; /*not displayed on load*/
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
	/*then re calls displayCalculation()*/
	displayCalculation();
	/*returns Button label*/
	return switchCalculationDisplay.innerHTML = (displayFullCalc == true) ? "Hide Full Calculation" : "Show Full Calculation";
}

/*list of number buttons of calculator and each onclick function*/
const numberBuilder = function(e){
	clearPageAlerts();
	e.toString();
	console.log(typeof e);
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
//changes input number (new number or answer) to a negative or reverts back to positive
const negative = document.getElementById("negative");
negative.onclick = function(){
	if (newNumber.length == 0){
		return;
	}
	if(newNumber[0].length >= 1){
		clearPageAlerts();
		newNumber[0] = (newNumber[0].charAt(0) === "-") ? newNumber[0].slice(1) : "-"+newNumber[0];
		return displayedInput.innerHTML = newNumber.join("");
	} 
}

//divides built number by 100
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
//calls clearAllAndDisplay
const clear = document.getElementById("clear");
clear.onclick = function() { return clearAllAndDisplay(); }

/*removes previous displayedInput and/or the last 1 or 2 indexs of the calculation array, leaving a number as the last index*/
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

/*resuable functions called from saveCalc.onclick*/
const displaySavedCalculations = function(){
	/*value to be returned if calculations list is empty*/
	if(calculationsList.length == 0) {
		return displayedCalculationList.innerHTML = 
			`<li class="saved-item-background list-group-item">
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
		if(saveStatus.innerHTML == "Calculation data saved below!" && key == calculationsList.length - 1){
			calculationBriefs.push(
				`<li id="saved-calculation${key}"class="list-group-item new-saved-calculation">
					<h6><strong> Description </strong> : <i>${savedDescription}</i> </h6>
					<h6><strong> Built calculation </strong> : ${savedCalculation.join(" ")} </h6>
					<h6><strong> ${inputType} </strong> : ${displayedInput} </h6>
					<button id="delete-calc${key}" class="col-xs-3 btn red-button delete-calc" value="${key}" href="#">delete</button>
					<button id="load-calc${key}" class="col-xs-3 btn green-button load-calc" value="${key}" href="#">load</button>
				</li>`
			);
		} else {
			calculationBriefs.push(
				`<li id="saved-calculation${key}"class="list-group-item saved-calculation">
					<h6><strong> Description </strong> : <i>${savedDescription}</i> </h6>
					<h6><strong> Built calculation </strong> : ${savedCalculation.join(" ")} </h6>
					<h6><strong> ${inputType} </strong> : ${displayedInput} </h6>
					<button id="delete-calc${key}" class="col-xs-3 btn red-button delete-calc" value="${key}" href="#">delete</button>
					<button id="load-calc${key}" class="col-xs-3 btn green-button load-calc" value="${key}" href="#">load</button>
				</li>`
			);
		}
		displayedCalculationList.innerHTML =  calculationBriefs.slice().reverse().join(" ");
	}
	/*Gives the buttons of the displayed calculations their required functionality and return value*/
	for (var key in calculationsList) { 
		let deleteCalc = document.getElementById("delete-calc" + key);
		deleteCalc.onclick = function() {
			clearPageAlerts();
			this.parentElement.classList.add("removing-list-item");
			setTimeout(function(){
				calculationsList.splice(this.value, 1);
				displaySavedCalculations();
			},500);
			return warningStatus.innerHTML = "Calculation data deleted!";
		}
		let loadCalc = document.getElementById("load-calc" + key);
		loadCalc.onclick = function(e) {
			console.log(window.scrollY);
			clearPageAlerts();
			/*loadCalc.classList.add("loaded-calc");*/
			calculation = calculationsList[this.value].savedCalculation.slice();
			newOperator = calculationsList[this.value].savedOperator.slice();
			newNumber = calculationsList[this.value].savedNumber.slice();
			disableDec = calculationsList[this.value].savedDecimalStatus;
			displayAll();
			scrollToTop();
			mainCalculator.classList.add("success-border");
			display.classList.add("success-border");
			return loadStatus.innerHTML = "Calculation data loaded succesfully!";
		}
	}
};

const scrollToTop = function(){
	/*https://stackoverflow.com/questions/10063380/smooth-scroll-without-the-use-of-jquery*/
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
		for ( var i=startY; i>stopY; i-=step ) {
			setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
			leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
		}
	}
	return smoothScroll(eID);
}

/*save calculation button and onclick function*/
saveCalculation.onclick = function(){
	clearPageAlerts();
	if (calculationsList.length == 10) {
		calculationDescriptionInput.classList.add("warning-border");
		saveCalculation.classList.add("warning-border");
		return warningStatus.innerHTML = "Can not save! Calculations List has exceeded it's data limit!";
	}
	let savedCalc = new Object();
		savedCalc.savedDescription = calculationDescriptionInput.value;
		savedCalc.savedCalculation = calculation.slice(); /*must pass arrays by copy, not reference*/
		savedCalc.savedNumber = newNumber.slice();
		savedCalc.savedOperator = newOperator.slice();
		savedCalc.savedDecimalStatus = disableDec;

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
	return saveStatus.innerHTML = "Calculation data saved below!";
}

/*keyboard press responses*/
document.onkeypress = function(e) {
	var key = e.key || e.shiftKey; 
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