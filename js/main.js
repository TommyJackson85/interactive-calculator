const displayedCalc = document.getElementById("displayedCalc");
const displayedInput = document.getElementById("displayedInput");

const newNumber = []; 
let disableDec = false;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Dec"];
for (var key of numbers){
	let number = document.getElementById("num" + key);
	number.onclick = function(){
		
		   	if (this.value === "." && disableDec == false ){ 
					newNumber.push(this.value);
					disableDec = true;
			} 
			if(this.value !== ".") { 
				newNumber.push(this.value); 
			}
			
			displayedInput.innerHTML = newNumber.join(""); 
	}
}