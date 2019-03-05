"use strict";

/*main calculator and display Elements*/
var mainCalculator = document.getElementById("main-calculator");
var display = document.getElementById("display");
var displayedCalc = document.getElementById("displayed-calc");
var displayedInput = document.getElementById("displayed-input");

/*full calculation display*/
var enlargedDisplay = document.getElementById("enlarged-display");
var displayedEntireCalc = document.getElementById("displayed-entire-calc"); /*child div of enlargedDisplay*/
var displayFullCalc = false;

/*Elements for: calculations list, description input and save calculation button*/
var displayedCalculationList = document.getElementById("displayed-calculation-list");
var calculationDescriptionInput = document.getElementById("calculation-description-input");
var saveCalculation = document.getElementById("save-calc");

/*page status alerts from calculations list section*/
var saveStatus = document.getElementById("save-status");
var calculatorStatus = document.getElementById("calculator-status");
var warningStatus = document.getElementById("warning-status");

/*global arrays and boolean variables for main calculator*/
var calculation = [];
var newNumber = [];
var newOperator = [];
var disableDec = false;

/*calculations list for storing saved saved calculations*/
var calculationsList = [];

/*reusable functions called locally through onclick functions*/
var empty = function empty(array) {
	//empties one array
	array.splice(0, array.length);
	return array;
};
var clearInputs = function clearInputs() {
	empty(newOperator);
	return empty(newNumber); //clears input arrays
};
var clearAll = function clearAll() {
	empty(calculation);
	clearInputs(); //clears all arrays
	return disableDec = false;
};
var clearAllAndDisplay = function clearAllAndDisplay() {
	clearAll();
	displayCalculation();
	return displayedInput.innerHTML = "0"; /*starts the input*/
};
var pushToCalculation = function pushToCalculation(array) {
	var string = array.join(""); /*preparing for newNumber Array*/
	if (array.length > 0) {
		if (string == "." || string == "-.") {
			string = array.join("") + "0";
		}
		calculation.push(string);
		empty(array);
	}
	return array;
};
var displayAll = function displayAll() {
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
};

var clearPageAlerts = function clearPageAlerts() {
	saveStatus.innerHTML = "";
	calculatorStatus.innerHTML = "";
	warningStatus.innerHTML = "";
	mainCalculator.classList.remove("success-border");
	display.classList.remove("success-border");
	displayedCalculationList.classList.remove("success-border");
	calculationDescriptionInput.classList.remove("warning-border");
	saveCalculation.classList.remove("warning-border");
};

var displayCalculation = function displayCalculation() {
	if (displayFullCalc === true) {
		/*moves built calculation to enlarged display*/
		displayedCalc.innerHTML = "calculation displayed above";
		displayedCalc.classList.add('green-display-text');
		return displayedEntireCalc.innerHTML = calculation.length == 0 ? "cleared" : calculation.join(" ");
	} else {
		/*moves built calculation to calculator display*/
		displayedEntireCalc.innerHTML = "";
		displayedCalc.classList.remove('green-display-text');
		if (calculation.join(" ").length > 34) {
			return displayedCalc.innerHTML = "..." + calculation.join(" ").slice(calculation.join(" ").length - 34);
			//keeps it to the length of 34 or less.
		} else {
			return displayedCalc.innerHTML = calculation.length == 0 ? "cleared" : calculation.join(" ");
		}
	}
};

enlargedDisplay.style.display = "none"; /*not displayed on page load*/
var switchCalculationDisplay = document.getElementById("switch-calculation-display");
switchCalculationDisplay.onclick = function () {
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
	return switchCalculationDisplay.innerHTML = displayFullCalc == true ? "Hide Full Calculation" : "Show Full Calculation";
};

/*numberBuilder function which is called from number on click*/
var numberBuilder = function numberBuilder(e) {
	clearPageAlerts();
	e.toString();
	if (calculation.length == 0 || newOperator.length == 1 || ['=', '+', '-', 'x', '/'].includes(calculation[calculation.length - 1])) {
		if (calculation[calculation.length - 1] == "=") {
			clearAll();
		}
		if (newOperator.length == 1 && newNumber.length >= 0) {
			pushToCalculation(newOperator);
		}

		if (e === "." && disableDec == false && newNumber.length < 35) {
			disableDec = true;
			newNumber.push(e);
		}
		if (e !== "." && newNumber.length < 35) {
			newNumber.push(e);
		}
		displayCalculation();
		return displayedInput.innerHTML = newNumber.length == 35 ? "exceeds limit>>" + newNumber.join("").slice(13) : newNumber.join("");
	}
};

/*list of number buttons of calculator and each onclick function*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Dec"];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var key = _step.value;

		var number = document.getElementById("num" + key);
		number.onclick = function () {
			numberBuilder(this.value);
		};
	}

	/*utiliseOperator fuction which is called from operator.onclick()*/
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

var utiliseOperator = function utiliseOperator(e) {
	if (newNumber.length >= 1 || newOperator.length == 1 || calculation.length > 0) {
		disableDec = false;
		if (e === "=" && calculation[calculation.length - 1] != "=") {
			pushToCalculation(newNumber); //changes string to real calculation
			var realCalculation = calculation.join(" ").replace(/x/g, "*");
			empty(newOperator);
			newNumber.push(eval(realCalculation) + ""); //calulates, then turns back to string for manipulation
			calculation.push(e); //only for display

			displayCalculation();
			return displayedInput.innerHTML = eval(realCalculation); //displays answer
		}
		if (e !== "=") {
			//other operators				
			if (calculation[calculation.length - 1] == "=") {
				calculation = [];
			}
			pushToCalculation(newNumber); //either new number or previous answer
			newOperator = [];
			newOperator.push(e);

			displayCalculation();
			return displayedInput.innerHTML = e;
		}
	}
};

/*list of operator buttons of calculator and each onclick function*/
var operatorIds = ["add", "subtract", "multiply", "divide", "answer"];
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = operatorIds[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var key = _step2.value;

		clearPageAlerts();
		var operator = document.getElementById(key);
		operator.onclick = function () {
			utiliseOperator(this.value);
		};
	}

	/*other calculator buttons*/
	//changes input number (new number or answer) to a negative or reverts back to positive
} catch (err) {
	_didIteratorError2 = true;
	_iteratorError2 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion2 && _iterator2.return) {
			_iterator2.return();
		}
	} finally {
		if (_didIteratorError2) {
			throw _iteratorError2;
		}
	}
}

var plusMinus = document.getElementById("plus-minus");
plusMinus.onclick = function () {
	if (newNumber.length == 0) {
		return;
	}
	if (newNumber[0].length >= 1) {
		clearPageAlerts();
		newNumber[0] = newNumber[0].charAt(0) === "-" ? newNumber[0].slice(1) : "-" + newNumber[0];
		return displayedInput.innerHTML = newNumber.join("");
	}
};

//divides built number by 100
var divide100 = document.getElementById("divide100");
divide100.onclick = function () {
	clearPageAlerts();
	if (newNumber.length >= 1) {
		var tempNum = (eval(newNumber.join("")) / 100 + "").split("");
		empty(newNumber);
		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = tempNum[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var value = _step3.value;

				if (value === ".") {
					disableDec = true;
				}
				newNumber.push(value);
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		displayCalculation();
		return displayedInput.innerHTML = newNumber.join("");
	}
};

//calls clearAllAndDisplay
var clear = document.getElementById("clear");
clear.onclick = function () {
	return clearAllAndDisplay();
};

/*removes previous displayedInput and/or the last 1 or 2 indexs of the calculation array, leaving a number as the last index*/
var remove = document.getElementById("remove");
remove.onclick = function () {
	clearPageAlerts();
	if (newOperator.length > 0 || newNumber.length > 0) {
		if (['=', '+', '-', 'x', '/'].includes(calculation[calculation.length - 1])) {
			calculation.splice(-1, 1);
		};
		clearInputs();
	} else {
		calculation.splice(-2, 2);
	}
	displayCalculation();
	return displayedInput.innerHTML = "removed";
};

var scrollToTop = function scrollToTop() {
	/*https://stackoverflow.com/questions/10063380/smooth-scroll-without-the-use-of-jquery*/
	var eID = document.getElementById("home");
	function currentYPosition() {
		// Gets current Y axis position
		// Firefox, Chrome, Opera, Safari
		if (self.pageYOffset) return self.pageYOffset;
		// Internet Explorer 6 - standards mode
		if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
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
		}return y;
	}
	function smoothScroll(eID) {
		var startY = currentYPosition();
		var stopY = elmYPosition(eID);
		var distance = stopY > startY ? stopY - startY : startY - stopY;
		if (distance < 100) {
			scrollTo(0, stopY);return;
		}
		var speed = Math.round(distance / 100);
		if (speed >= 20) speed = 20;
		var step = Math.round(distance / 25);
		var leapY = stopY > startY ? startY + step : startY - step;
		var timer = 0;
		if (stopY > startY) {
			for (var i = startY; i < stopY; i += step) {
				setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
				leapY += step;if (leapY > stopY) leapY = stopY;timer++;
			}return;
		}
		for (var i = startY; i > stopY; i -= step) {
			setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
			leapY -= step;if (leapY < stopY) leapY = stopY;timer++;
		}
	}
	return smoothScroll(eID);
};

/*resuable function called from saveCalc.onclick*/
var displaySavedCalculations = function displaySavedCalculations() {
	/*value to be returned if calculations list is empty*/
	if (calculationsList.length == 0) {
		return displayedCalculationList.innerHTML = "<li class=\"saved-item-background list-group-item\">\n\t\t\t\tNo Calculations are saved.\n\t\t\t</li>";
	}
	var calculationBriefs = [];
	/*adds all saved calculations to displayedCalcultionList*/
	for (var key in calculationsList) {
		/*local variables to keep it clean*/
		var savedDescription = calculationsList[key].savedDescription;
		var savedCalculation = calculationsList[key].savedCalculation;
		var _displayedInput = calculationsList[key].displayedInput;
		var inputType = savedCalculation[savedCalculation.length - 1] == "=" ? "answer / next input" : "next input";
		/*HTML built for diplay*/
		if (calculatorStatus.innerHTML == "Calculator data saved to Calculation Backup!" && key == calculationsList.length - 1) {
			/*newest saved item, with an added CSS transition*/
			calculationBriefs.push("<li id=\"saved-calculation" + key + "\"class=\"list-group-item new-saved-calculation\">\n\t\t\t\t\t<h6><strong> Description </strong> : <i>" + savedDescription + "</i> </h6>\n\t\t\t\t\t<h6><strong> Built calculation </strong> : " + savedCalculation.join(" ") + " </h6>\n\t\t\t\t\t<h6><strong> " + inputType + " </strong> : " + _displayedInput + " </h6>\n\t\t\t\t\t<button id=\"delete-calc" + key + "\" class=\"col-xs-3 btn red-button delete-calc\" value=\"" + key + "\" href=\"#\">delete</button>\n\t\t\t\t\t<button id=\"load-calc" + key + "\" class=\"col-xs-3 btn green-button load-calc\" value=\"" + key + "\" href=\"#\">load</button>\n\t\t\t\t</li>");
		} else {
			/*other saved items*/
			calculationBriefs.push("<li id=\"saved-calculation" + key + "\"class=\"list-group-item saved-calculation\">\n\t\t\t\t\t<h6><strong> Description </strong> : <i>" + savedDescription + "</i> </h6>\n\t\t\t\t\t<h6><strong> Built calculation </strong> : " + savedCalculation.join(" ") + " </h6>\n\t\t\t\t\t<h6><strong> " + inputType + " </strong> : " + _displayedInput + " </h6>\n\t\t\t\t\t<button id=\"delete-calc" + key + "\" class=\"col-xs-3 btn red-button delete-calc\" value=\"" + key + "\" href=\"#\">delete</button>\n\t\t\t\t\t<button id=\"load-calc" + key + "\" class=\"col-xs-3 btn green-button load-calc\" value=\"" + key + "\" href=\"#\">load</button>\n\t\t\t\t</li>");
		}
		displayedCalculationList.innerHTML = calculationBriefs.slice().reverse().join(" ");
	}
	/*Gives the buttons of the displayed calculations their required functionality and return value*/
	for (var key in calculationsList) {
		var deleteCalc = document.getElementById("delete-calc" + key);
		deleteCalc.onclick = function () {
			clearPageAlerts();
			this.parentElement.classList.add("removing-list-item");
			var v = this.value;
			setTimeout(function () {
				calculationsList.splice(v, 1);
				displaySavedCalculations();
			}, 500);
			return warningStatus.innerHTML = "Calculation data deleted!";
		};
		var loadCalc = document.getElementById("load-calc" + key);
		loadCalc.onclick = function (e) {
			clearPageAlerts();
			calculation = calculationsList[this.value].savedCalculation[0] == "Calculation Empty" ? [] : calculationsList[this.value].savedCalculation.slice();
			newOperator = calculationsList[this.value].savedOperator.slice();
			newNumber = calculationsList[this.value].savedNumber.slice();
			disableDec = calculationsList[this.value].savedDecimalStatus;
			displayAll();
			scrollToTop();
			mainCalculator.classList.add("success-border");
			display.classList.add("success-border");
			return calculatorStatus.innerHTML = "Calculation data loaded succesfully!";
		};
	}
};

/*save calculation button and onclick function*/
saveCalculation.onclick = function () {
	clearPageAlerts();
	if (calculationsList.length == 10) {
		calculationDescriptionInput.classList.add("warning-border");
		saveCalculation.classList.add("warning-border");
		return warningStatus.innerHTML = "Can not save! Calculations List has exceeded it's data limit!";
	}
	var savedCalc = new Object();
	/*must pass arrays by copy, not reference*/
	savedCalc.savedNumber = newNumber.slice();
	savedCalc.savedOperator = newOperator.slice();
	savedCalc.savedDecimalStatus = disableDec;

	savedCalc.savedDescription = calculationDescriptionInput.value.length <= 0 ? "No Description Included" : calculationDescriptionInput.value;
	savedCalc.savedCalculation = calculation.slice().length <= 0 ? ["Calculation Empty"] : calculation.slice();
	//"Calculation Empty" is only for display puroses in the list of saved calculations. This will not be loaded into the calculator when the load button is clicked

	if (savedCalc.savedNumber.length > 0) {
		savedCalc.displayedInput = savedCalc.savedNumber.join("");
	}
	if (savedCalc.savedOperator.length > 0) {
		savedCalc.displayedInput = savedCalc.savedOperator.join("");
	}
	if (savedCalc.savedNumber.length <= 0 && savedCalc.savedOperator.length <= 0) {
		savedCalc.displayedInput = "Input Empty";
	}
	calculationsList.push(savedCalc);

	setTimeout(function () {
		displaySavedCalculations();
	}, 30);

	displayedCalculationList.classList.add("success-border");
	/*mainCalculator.classList.add("success-border");
 display.classList.add("success-border");*/

	saveStatus.innerHTML = "Calculator data saved below!";
	return calculatorStatus.innerHTML = "Calculator data saved to Calculation Backup!";
};

/*keyboard press responses*/
document.onkeypress = function (e) {
	var key = e.key;
	if (e.defaultPrevented || document.activeElement.tagName == 'TEXTAREA') {
		return; // Do nothing if the event was already processed OR if the description input (node 'TEXTAREA') is Active;
	}
	switch (key) {
		// IE/Edge specific value
		case "d":case "D":
			switchCalculationDisplay.onclick();
			break;
		case "s":case "S":
			saveCalculation.onclick();
			break;
		case "%":
			divide100.onclick();
			break;
		case "±":
			plusMinus.onclick();
			break;
		case "r":case "R":
			remove.onclick();
			break;
		case "c":case "C":
			clear.onclick();
			break;
		case ".":
			numberBuilder(key);
			break;
		// IE/Edge specific value  
		case "1":case "2":case "3":case "4":case "5":
		case "6":case "7":case "8":case "9":case "0":
			numberBuilder(key);
			// IE/Edge specific value
			break;
		case "Enter":case "Return":case "=":
			utiliseOperator("=");
			// Do something for "enter" or "return" key press.
			break;
		case "x":case "*":
			utiliseOperator("x");
			break;
		case "-":case "/":case "+":
			utiliseOperator(key);
			break;
		default:
			return; // Quit when this doesn't handle the key event.
	}
	// Cancel the default action to avoid it being handled twice
	e.preventDefault();
};
