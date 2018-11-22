const displayedCalc = document.getElementById("displayedCalc");
const displayedInput = document.getElementById("displayedInput");

let calculation = [];
let newNumber = []; 
let newOperator = [];

let disableDec = false;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Dec"];
const empty = function(array) { 
	array.splice(0, array.length); 
	return array;
}//oneArray
const clearInputs = function(){
	empty(newOperator);
	empty(newNumber); //clears input arrays
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
for (var key of numbers){
	let number = document.getElementById("num" + key);
	number.onclick = function numberBuilder(){
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
const operatorIds = ["add", "subtract", "multiply", "divide", "answer"];
for (var key of operatorIds) {
	let operator = document.getElementById(key);
	operator.onclick = function utiliseOperator(){
		if(newNumber.length >= 1 || newOperator.length == 1 || calculation.length > 0){
			disableDec = false;
			if (this.value === "=" && calculation[calculation.length-1] != "="){
				pushToCalculation(newNumber);//changes string to real calculation
				let realCalculation = calculation.join(" ").replace(/x/g , "*");
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

const negative = document.getElementById("negative");
negative.onclick = function(){
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