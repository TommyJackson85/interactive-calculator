describe("pushToCalculation() outcomes", function(){
    it("results", function(){
        calculation = ["3", "x", "6", "+"];
        newNumber = ["18"];
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
        expect(pushToCalculation(newNumber)).toEqual([ ]);
        expect(calculation).toEqual(["3", "x", "6", "+", "18"]);
    })
}),
describe("empty() outcomes", function(){
    it("results", function(){
        calculation = ["3", "x", "6", "+"];
        newNumber = ["5"];
        newOperator = ["-"]
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
        expect(empty(newNumber)).toEqual([]);
        expect(empty(newOperator)).toEqual([]);
        expect(empty(calculation)).toEqual([]);
    })
}),
describe("displayCalculation() outcomes", function() {
    it("IF the string length is 0, displayedCalc.innerHTML should display 'cleared'. ", function(){
        calculation = [];
        expect(displayCalculation()).toBe("cleared");
        expect(displayCalculation()).not.toBe("");
        expect(displayCalculation()).not.toBe("... ");
    }),
    it("displayCalcuclation() should display calculation array elements joined as a string, while calculation array shouldn't change afterwards", function(){
        calculation = ["3", "+", "4."];
        expect(displayCalculation()).toBe("3 + 4.");
        expect(displayCalculation()).not.toBe(["3", "+", "4."]);
    }),
    it(`IF the string length is greater than 34 and displayCalculation() is called, displayed-calc should display "... " added to a shortened version of the calculation 
    (the calculation array joined together and shortened in length, from the end of the calculation and back 34 in length);
    However if displayFullCalc is turned to true from false, the full calculation is displayed from the #displayed-entire-calc DOM element in full length;
    '#displayed-calc' displays "calculation displayed above" instead, to alert the user that the calculation is now displayed at '#displayed-entire-calc';
    switchCalculationDisplay.onclick() switches displayFullCalc's value for 'false' to true, and visa versa, and calls the displayCalculation() function.
    `, function(){
        displayFullCalc = false;
        calculation = ["5", "+", "5", "+", "666", "+", "3", "+", "3", "+", "3", "+", "3", "+", "3", "+", "3"];
        
        expect(displayCalculation()).toBe(displayedCalc.innerHTML = "... + 5 + 666 + 3 + 3 + 3 + 3 + 3 + 3");
        expect(displayCalculation()).not.toBe(displayedCalc.innerHTML = "5 + 5 + 666 + 3 + 3 + 3 + 3 + 3 + 3");
        expect(displayCalculation()).not.toBe(displayedCalc.innerHTML = "... 5 + 5 + 666 + 3 + 3 + 3 + 3 + 3 + 3");
        
        expect(displayedEntireCalc.innerHTML).toBe("");
        expect(displayedEntireCalc.innerHTML).not.toBe("5 + 5 + 666 + 3 + 3 + 3 + 3 + 3 + 3");

        expect(switchCalculationDisplay.onclick()).toBe("Hide Full Calculation");/*turns displayFullCalc to true*/
        expect(displayFullCalc).toBe(true);

        expect(displayCalculation()).toBe(displayedEntireCalc.innerHTML = "5 + 5 + 666 + 3 + 3 + 3 + 3 + 3 + 3");
        expect(displayCalculation()).not.toBe(displayedEntireCalc.innerHTML = "... + 5 + 666 + 3 + 3 + 3 + 3 + 3 + 3");
        
        expect(displayedCalc.innerHTML).toBe("calculation displayed above");
        expect(displayedCalc.innerHTML).not.toBe("... + 5 + 666 + 3 + 3 + 3 + 3 + 3 + 3");
        expect(displayedCalc.innerHTML).not.toBe("");
        expect(displayedCalc.style.color).toBe('rgb(146, 238, 146)');/* light green */
        expect(displayedCalc.style.color).not.toBe('rgb(236, 240, 241)');
      
        expect(switchCalculationDisplay.onclick()).toBe("Show Full Calculation"); /*reset for next test*/
        expect(displayFullCalc).toBe(false);

        expect(displayedCalc.style.color).toBe('rgb(236, 240, 241)'); /* "#ecf0f1" / white */
    
    })
}),
describe("clearInputs() outcomes", function(){
    it("Should clear input arrays only. The calculation array does not change. Returns the newNumber array", function(){
        calculation = ["3", "+", "4", "+"]
        newNumber = ["2"];
        newOperator = [];

        expect(clearInputs()).toEqual([]);
        expect(clearInputs()).toEqual(newNumber);
         
        /* doesn't return a value, just changes two global values*/
        expect(newNumber).toEqual([]);
        expect(newNumber).not.toEqual(["2"]);
        expect(newOperator).toEqual([]);
        
        expect(calculation).toEqual(["3", "+", "4", "+"]);
        expect(calculation).not.toEqual([]);
    })
}),
describe("clearAll() outcomes", function(){
    it("should clear calculation and input arrays and return disableDec as false.", function(){
        calculation = ["3", "+", "4."]
        newNumber = [];
        newOperator = ["*"];
        disableDec = true;

        expect(clearAll()).toBe(false);
        /* doesn't return a value, just changes four global values*/

        expect(newNumber).toEqual([]);
        expect(newOperator).toEqual([]);
        expect(newOperator).not.toEqual(["*"]);
        expect(calculation).toEqual([]);
        expect(calculation).not.toEqual(["3", "+", "4."]);
        expect(disableDec).toBe(false);
        expect(disableDec).not.toBe(true);
    })
}),
describe("clearAllAndDisplay() outcomes", function() {
    it("clearAllAndDisplay() should activate clearAll(), display 'cleared' in displayedCalc HTML and display '0' in displayedInput HTML.", function(){
        calculation = ["3", "+", "4"];
        newNumber = [];
        newOperator = ["*"];
        expect(clearAllAndDisplay()).toBe("0");
        expect(clearAllAndDisplay()).not.toBe("*");
        expect(clearAllAndDisplay()).not.toBe("");
        expect(newOperator).toEqual([]);
        expect(newOperator).not.toEqual(["0"]);
        expect(newOperator).not.toEqual(["*"]);
        expect(calculation).toEqual([]);
        expect(calculation).not.toEqual(["3", "+", "4"]);
        expect(newNumber).toEqual([]);
        expect(newNumber).not.toEqual(["0"]);
        expect(displayedCalc.innerHTML || displayedFullCalc.innerHTML).toBe("cleared");
        expect(displayedCalc.innerHTML || displayedFullCalc.innerHTML).not.toBe("3 + 4.");
        expect(displayedInput.innerHTML).toBe("0");
        expect(displayedInput.innerHTML).not.toBe("*");
    })
}),
describe("displaySavedCalculations() outcomes", function(){
    it(`If there are no saved calculations it returns one list item in #displayed-calculations-list saying 'No Calculations are saved.'`, function(){
        calculationsList = [];
        let displayedCalculationList = document.getElementById('displayed-calculation-list');
        expect(displaySavedCalculations()).toBe(        
            displayedCalculationList.innerHTML = 
			`<li class="list-group-item">
				No Calculations are saved.
			</li>`)
    }),
    it(`displayedSavedCalculations() returns undefined when calculationsList is not empty;
        displayedSavedCalculations() doesn't return a value until a loadCalc or deleteCalc button, from each of the displayed saved calculation items, is clicked;
        When deleteCalc() is called on the 'second object' of the calculation list (calculationsList[1]), the 'third object' is placed at calculationsList[1];
        deleteCalc() returns #list-item-status.innerHTML = "Calculation data deleted!";
        Then, when loadCalc() is called on the 'third object', the global arrays copy the data from the loaded objects.
        i.e. The calculation Array is now a copy of the objects savedCalculation, the newOperator Array is now a copy of the savedOperator Array;
        loadCalc() returns #list-item-status.innerHTML = "Calculation data loaded succesfully!";
        loadCalc() also adds the 'success-border' class to dom elements #main-calculator and #display;`
       , function(){
        calculation = [];
        newNumber = [];
        newOperator = [];
        calculationsList = [
            Object({ 
                savedDescription: 'first object',
                savedCalculation: [ '567', '+' ], 
                savedNumber: [ '3' ], 
                savedOperator: [  ], 
                displayedInput: '3', 
                savedDecimalStatus: false 
            }),
            Object({ 
                savedDescription: 'second object - answer returned',
                savedCalculation: [ '567', '+', '3', '=' ], 
                savedNumber: [ '570' ], 
                savedOperator: [  ], 
                displayedInput: '570', 
                savedDecimalStatus: false 
            }),
            Object({ 
                savedDescription: 'third object',
                savedCalculation: [ '570'], 
                savedNumber: [ ], 
                savedOperator: [ '+' ], 
                displayedInput: '+', 
                savedDecimalStatus: false 
            })
        ];
        expect(displaySavedCalculations()).toBe(undefined);

        let deleteCalc = document.getElementById("delete-calc" + 1);
        expect(deleteCalc.onclick()).toBe(listItemStatus.innerHTML = "Calculation data deleted!");
        expect(calculationsList).toEqual([
            Object({ 
                savedDescription: 'first object',
                savedCalculation: [ '567', '+' ], 
                savedNumber: [ '3' ], 
                savedOperator: [  ], 
                displayedInput: '3', 
                savedDecimalStatus: false 
            }),
            Object({ 
                savedDescription: 'third object',
                savedCalculation: [ '570'], 
                savedNumber: [ ], 
                savedOperator: [ '+' ], 
                displayedInput: '+', 
                savedDecimalStatus: false 
            })
        ]);
        expect(calculationsList[1].savedDescription).toBe('third object');
        expect(calculationsList[1].savedDescription).not.toBe('second object - answer returned');
        expect(calculationsList[1].savedDescription).not.toBe('first object');

        let loadCalc = document.getElementById("load-calc" + 1);
        expect(loadCalc.onclick()).toBe(listItemStatus.innerHTML = "Calculation data loaded succesfully!");
        expect(loadCalc.onclick()).not.toBe(listItemStatus.innerHTML = "Calculation data deleted!");
        expect(calculation).toEqual([ '570' ]);
        expect(calculation).not.toEqual([]);
        expect(newNumber).toEqual([]);
        expect(newOperator).toEqual([ '+' ]);
        expect(newOperator).not.toEqual([]);

        expect(mainCalculator.className.split(' ').includes("success-border")).toBe(true);
        expect(display.className.split(' ').includes("success-border")).toBe(true);
    })
})
describe('clearPageAlerts() outcomes; clearPageAlerts() if called from all functions. It is designed clean all alerts or restart them.', function(){
    it(`Removes "success-border" class from #mainCalculator and #display DOM elements;
        Removes "warning-border" class from #saveCalculation and #calculationDescriptionInput DOM elements;
        Empties listItemStatus.innerHTML and saveStatus.innerHTML;`, function(){
        calculation = ["4"];
        newNumber = [];
        newOperator = ["+"];
        calculationsList = [
            Object({ 
                savedDescription: 'first object',
                savedCalculation: [ '567', '+' ], 
                savedNumber: [ '3' ], 
                savedOperator: [  ], 
                displayedInput: '3', 
                savedDecimalStatus: false 
            })
        ];

        expect(displaySavedCalculations()).toBe(undefined);
        let loadCalc = document.getElementById("load-calc" + 0);

        expect(loadCalc.onclick()).toBe(listItemStatus.innerHTML = "Calculation data loaded succesfully!");
        expect(listItemStatus.innerHTML).not.toBe("");
        expect(mainCalculator.className.split(' ').includes("success-border")).toBe(true);
        expect(display.className.split(' ').includes("success-border")).toBe(true);

        expect(clearPageAlerts()).toBe(undefined); 
       
        expect(listItemStatus.innerHTML).toBe("");
        expect(listItemStatus.innerHTML).not.toBe("Calculation data loaded succesfully!")
        expect(mainCalculator.className.split(' ').includes("success-border")).toBe(false);
        expect(display.className.split(' ').includes("success-border")).toBe(false);

        expect(saveCalculation.onclick()).toBe(saveStatus.innerHTML = "Calculation data saved below!");
        expect(saveCalculation.onclick()).toBe('Calculation data saved below!');
        expect(saveCalculation.onclick()).toBe('Calculation data saved below!');
        expect(saveCalculation.onclick()).toBe('Calculation data saved below!');
        expect(saveCalculation.onclick()).toBe('Calculation data saved below!');
        expect(saveCalculation.onclick()).toBe('Calculation data saved below!');
        expect(saveCalculation.onclick()).toBe('Calculation data saved below!');
        expect(saveCalculation.onclick()).toBe('Calculation data saved below!');
        expect(saveCalculation.onclick()).toBe('Calculation data saved below!');
        expect(saveCalculation.onclick()).toBe(saveStatus.innerHTML = `Can not save! Calculations List has exceeded it's data limit!`);
        
        expect(saveStatus.innerHTML).toBe(`Can not save! Calculations List has exceeded it's data limit!`);
        expect(saveStatus.innerHTML).not.toBe('Calculation data saved below!');
        expect(saveStatus.innerHTML).not.toBe('');
        expect(saveCalculation.className.split(' ').includes("warning-border")).toBe(true);
        expect(calculationDescriptionInput.className.split(' ').includes("warning-border")).toBe(true);
        
        expect(clearPageAlerts()).toBe(undefined); 
        
        expect(saveStatus.innerHTML).toBe("");
        expect(saveStatus.innerHTML).not.toBe(`Can not save! Calculations List has exceeded it's data limit!`);
        expect(saveStatus.innerHTML).not.toBe('Calculation data saved below!');
        expect(saveCalculation.className.split(' ').includes("warning-border")).toBe(false);
        expect(calculationDescriptionInput.className.split(' ').includes("warning-border")).toBe(false);
    })
})