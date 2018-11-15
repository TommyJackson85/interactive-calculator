const displayedCalc = document.getElementById("displayedCalc");
const displayedInput = document.getElementById("displayedInput");

let calculation = [];
let newNumber = []; 
let newOperator = [];

let disableDec = false;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Dec"];

const pushToCalculation = function(array){
	let string =  array.join("");/*preparing for newNumber Array*/
	calculation.push(string);
	array = [];
	console.log(calculation);
	console.log(array);
	return array;
}

for (var key of numbers){
	let number = document.getElementById("num" + key);
	number.onclick = function numberBuilder(){
		if (this.value === "." && disableDec == false && newNumber.length < 35){ 
			disableDec = true;
			newNumber.push(this.value);
		} 
		if(this.value !== "." && newNumber.length < 35){ 
			newNumber.push(this.value); 
		}	
		/*console.log(newNumber.join("").length);*/
		return displayedInput.innerHTML = (newNumber.length == 35) ? "exceeds limit>>" + newNumber.join("").slice(13) 
		: newNumber.join("");
		
		/*return displayedInput.innerHTML = 
		newNumber.join(""); */
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
				
				return displayedInput.innerHTML = eval(realCalculation); //displays answer
			}
			if (this.value !== "="){ //other operators				
				if (calculation[calculation.length-1] == "=") { calculation = []; }	
				pushToCalculation(newNumber);//either new number or previous answer
				newOperator = [];
				newOperator.push(this.value);

				return displayedInput.innerHTML = this.value;
			}
		}
	}
}
