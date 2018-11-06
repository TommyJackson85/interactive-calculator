const displayedCalc = document.getElementById("displayedCalc");
const displayedInput = document.getElementById("displayedInput");

var addTogether = function(i) {
	return i + i;
}

const newNumber = []; 
let disableDec = false;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Dec"];
for (var key of numbers){
	let number = document.getElementById("num" + key);
	number.onclick = function numberBuilder(){
		   	if (this.value === "." && disableDec == false ){ 
				disableDec = true;
				newNumber.push(this.value);
				console.log(newNumber);
			} 
			if(this.value !== ".") { 
				newNumber.push(this.value); 
				console.log(newNumber);
			}	
			displayedInput.innerHTML = newNumber.join(""); 
	}
}