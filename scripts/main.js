const displayedCalc = document.getElementById("displayedCalc");
const displayedInput = document.getElementById("displayedInput");

let newNumber = []; 
let disableDec = false;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Dec"];
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
		console.log(newNumber.join("").length);
		return displayedInput.innerHTML = (newNumber.length == 35) ? "exceeds limit>>" + newNumber.join("").slice(13) 
		: newNumber.join("");
		/*return displayedInput.innerHTML = 
		newNumber.join(""); */
	}	
}