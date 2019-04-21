describe("results of switchCalculationDisplay();", function(){
    
    it(`switches the display of the full calculation, from the calculator's 'displayed calculation' to the enlarged display, and visa versa; 
    When the enlarged display is not in use, it is hidden from the page;
    The 'Switch Calculation Display' button's text is returned as "Hide Full Calculation" when the enlarged display is shown and returned as "Show Full Calculation" when the enlarged display is off;
    `, function(){
        calculation = ["5", "+", "6"];
        const displayedCalc = document.getElementById('displayed-calc');
        const displayedFullCalc = document.getElementById('displayed-entire-calc');
        const switchCalculationDisplay = document.getElementById('switch-calculation-display');

        displayFullCalc = false;
        enlargedDisplay.style.display = "none";
        
        expect(switchCalculationDisplay.onclick()).toBe(switchCalculationDisplay.innerHTML = "Hide Full Calculation");
        
        expect(displayFullCalc).toBe(true);
        expect(displayFullCalc).not.toBe(false);
        expect(enlargedDisplay.style.display).toBe("block");
        expect(enlargedDisplay.style.display).not.toBe("none");

        expect(displayedFullCalc.innerHTML).not.toBe("");
        expect(displayedCalc.innerHTML).not.toBe("5 + 6");
        expect(displayedFullCalc.innerHTML).toBe("5 + 6");
        expect(displayedCalc.innerHTML).toBe("calculation displayed above");

        expect(switchCalculationDisplay.onclick()).toBe(switchCalculationDisplay.innerHTML = "Show Full Calculation");
        
        expect(displayFullCalc).toBe(false);
        expect(displayFullCalc).not.toBe(true);
        expect(enlargedDisplay.style.display).toBe("none");
        expect(enlargedDisplay.style.display).not.toBe("block");

        expect(displayedFullCalc.innerHTML).not.toBe("5 + 6");
        expect(displayedCalc.innerHTML).not.toBe("calculation displayed above");
        expect(displayedFullCalc.innerHTML).toBe("");
        expect(displayedCalc.innerHTML).toBe("5 + 6");

        expect(switchCalculationDisplay.onclick()).toBe("Hide Full Calculation");
        expect(switchCalculationDisplay.onclick()).toBe("Show Full Calculation");
        
    })
})
describe("Results of 'plus-minus' button", function(){
    it("if newNumber[0] is already a negative , it turns it negative", function(){ //will be removed, as it is just temporary
        newNumber = ["-5", "6"];
        expect(plusMinus.onclick()).toBe("56");
        expect(newNumber).toEqual(["5", "6"]);
        expect(newNumber).not.toEqual(["-5", "6"]);
    }),
    it(`if newNumber[0] is only a '-' , it is removed fromt the array. 
    When plusMinus is pressed a second time, it adds the '-' to the first index`, function(){ //will be removed, as it is just temporary
        newNumber = ["-", "5", "6"];
        expect(plusMinus.onclick()).toBe("56");
        expect(plusMinus.onclick()).toBe("-56");
        expect(newNumber).toEqual(["-5", "6"]);
        expect(newNumber).not.toEqual(["5", "6"]);
        expect(newNumber).not.toEqual(["-", "5", "6"]);
    }),
    it("if newNumber[0] is NOT a negative, it turns it positive; '-' is never pushed to the front it's just added to the first index/string of the array", function(){ //will be removed, as it is just temporary
        newNumber = ["5", "6"];
        expect(plusMinus.onclick()).toBe("-56");
        expect(newNumber[0]).toBe("-5");
        expect(newNumber[0]).not.toBe("-");
        expect(newNumber[0]).not.toBe("5");
        expect(newNumber).toEqual(["-5", "6"]);
        expect(newNumber).not.toEqual(["-", "5", "6"]);
    }),
    it("the newNumber can be constantly change from negative to positive, when plusMinus button is continuously pressed.", function(){ //will be removed, as it is just temporary
        newNumber = ["5", "6"];
        expect(plusMinus.onclick()).toBe("-56");
        expect(plusMinus.onclick()).toBe("56");
        expect(plusMinus.onclick()).toBe("-56");
        expect(plusMinus.onclick()).toBe("56");
        expect(plusMinus.onclick()).toBe("-56");
    })
}),
describe("Results of clear button", function(){
    it("should call clearAllAndDisplay", function(){
        calculation = ["3", "+", "4"];
        newNumber = [];
        newOperator = ["*"];
        expect(clear.onclick()).toBe(clearAllAndDisplay());
    })
}),
describe("Results of remove button", function(){
    it("if last index of calculation is an operator, calculation Array is spliced with last index removed, both input arrays are emptied AND #displayed-input HTML is returned as 'removed'.", function(){
        calculation = ["3", "+", "4", "+"];
        newNumber = ["5"];
        newOperator = [];
        expect(remove.onclick()).toBe("removed");
        expect(calculation.length).toEqual(3);
        expect(calculation).toEqual(["3", "+", "4"]);
        expect(calculation).not.toEqual(["3", "+", "4", "5"]);
        expect(calculation).not.toEqual(["3", "+"]);
    }),
    it("if last index of calculation is a number AND if boths input Arrays are NOT empty, then calculation Array is Not spliced BUT both input arrays are emptied; #displayed-input HTML is returned as 'removed'.", function(){
        calculation = ["3", "+", "4"];
        newNumber = [];
        newOperator = ["+"];
        expect(remove.onclick()).toBe("removed");
        expect(calculation.length).toEqual(3);
        expect(calculation).toEqual(["3", "+", "4"]);
        expect(calculation).not.toEqual(["3", "+"]);
        expect(calculation).not.toEqual(["3"]);
    }),
    it("if boths input Arrays are empty, calculation Array is spliced with the last two indexs removed; #displayed-input HTML is returned as 'removed'.", function(){
        calculation = ["3", "+", "4"];
        newNumber = [];
        newOperator = [];
        expect(remove.onclick()).toBe("removed");
        expect(calculation.length).toEqual(1);

        expect(calculation).toEqual(["3"]);
        expect(calculation).not.toEqual(["3", "+"]);
        expect(calculation).not.toEqual(["3", "+", "4"]);
    }),
    it("the remove be consistantly be used ; after multiple clicks, in this case 5, and once the calculation array is fully emptied, #displayed-calc HTML displays 'cleared'.", function(){
        calculation = ["3", "+", "4", "-", "6", "+", "8", "+"];
        newNumber = ["8"];
        newOperator = [];
        expect(remove.onclick()).toBe("removed");
        expect(remove.onclick()).toBe("removed");
        expect(remove.onclick()).toBe("removed");
        expect(remove.onclick()).toBe("removed");
        expect(remove.onclick()).toBe("removed");
        
        expect(calculation.length).toEqual(0);
        expect(calculation).toEqual([]);
        expect(calculation).not.toEqual(["3", "+", "4"]);
        expect(calculation).not.toEqual(["3"]);
    })
}),
describe("results of divide100 button - this button evaluates a copy of a built number and divides it by 100. There is further different outcomes to do with different scenarios:", function(){
    it("returns newNumber empty, with the displayed input as '0' when initial new number is '-0.'. ",function(){
        newNumber = ["-0."];
        expect(divide100.onclick()).toBe("0");
        expect(newNumber).toEqual([]);
        expect(displayedInput.innerHTML).toBe("0");
    }),
    it("returns newNumber empty, with the displayed input as '0' when initial new number is '0.000'.",function(){
        newNumber = ["0.", "0", "0", "0"];
        expect(divide100.onclick()).toBe("0");
        expect(newNumber).toEqual([]);
        expect(displayedInput.innerHTML).toBe("0");
    }),
    it(`upon clicking twice, it divides the number twice, 
    and sets divide100Activated to be true. (continued)`, function(){
        newNumber = ["5", "6","7","8","0","0"];
        expect(divide100.onclick()).toBe("5678");
        expect(divide100.onclick()).toBe("56.78");
        expect(newNumber).toEqual(["5","6",".","7","8"]);
        expect(newNumber).not.toEqual([]);
        expect(divide100Activated).toBe(true);
    }),
    it(`..because divide100Activated is set to true, the new number array is emptied
    when the user starts to build a number, in which as sets divide100Activated to false.`,function(){
        number = document.getElementById("num" + "Dec");
        expect(number.onclick()).toBe(undefined);
        number = document.getElementById("num" + 5);
        expect(number.onclick()).toBe(undefined);
        expect(newNumber).toEqual(["0",".","5"]);
        expect(divide100Activated).toBe(false);
    }),
    it(`after clicking divide100, an operator button when clicked sends the divided number to the calculator 
    and divide100Activated is set to false`,function(){
        newNumber = ["5", "6","7","8","0","0"];
        calculation = [];
        newOperator = [];
        expect(divide100.onclick()).toBe("5678");
        expect(divide100.onclick()).toBe("56.78");
        let operator = document.getElementById("multiply");
        expect(operator.onclick()).toBe(undefined);
        expect(newOperator).toEqual(["x"]);
        expect(calculation).toEqual(["56.78"]);
        expect(newNumber).toEqual([]);
        expect(divide100Activated).toBe(false);
    }),
    it("the number isn't rounded to the nearest decimal; It can leave a decimal in the number, in which sets disableDec to true", function(){
        newNumber = ["5","6","7","8","8","8"];
        disableDec = false;
        expect(divide100.onclick()).toBe("5678.88");
        expect(newNumber).toEqual(["5","6","7","8",".","8","8"]);
        expect(newNumber).not.toEqual(["5","6","7","8","8","8"]);
        expect(disableDec).toBe(true);
        expect(disableDec).not.toBe(false);
    })
})