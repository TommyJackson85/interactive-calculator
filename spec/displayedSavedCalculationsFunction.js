describe("'displaySavedCalculations' function outcomes", function(){
   it(`If there are no saved calculations it returns one list item in displayed calculations list saying 'No Calculations are saved.'`, function(){
        calculationsList = [];
        let displayedCalculationList = document.getElementById('displayed-calculation-list');
        expect(displaySavedCalculations()).toBe(        
            displayedCalculationList.innerHTML = 
			`<li class="saved-item-background list-group-item">
				No Calculations are saved.
			</li>`)
    }),
    it(`When the calculator status heading is equal to "Calculator data saved to Calculation Backup!", the newest saved item will fade from green to blue because it inherets the 'new-saved-calculation' class;`
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
        calculatorStatus.innerHTML = "Calculator data saved to Calculation Backup!";
        expect(displaySavedCalculations()).toBe(undefined);
        expect(displayedCalculationList.childNodes[0].classList[1]).toBe('new-saved-calculation');
        expect(displayedCalculationList.childNodes[0].classList[1]).not.toBe('saved-calculation');
    }),
    /*set up for the delete calc test as it requires the use of jasmine.createSpy() and jasmine.clock, due to the the deleteCalc function calling a setTimeout() function*/
    /*for the timerCallBack() function used this source: https://makandracards.com/makandra/32477-testing-settimeout-and-setinterval-with-jasmine*/
    beforeEach(function() {
       // timerCallback = jasmine.createSpy("calculationsList.splice(this.value, 1)");
        timerCallback1 = jasmine.createSpy("ddisplaySavedCalculations");
        jasmine.clock().install();
    }),
    afterEach(function() {
        jasmine.clock().uninstall();
    }),
    it(`wont return a value until a load or delete button from each of the displayed saved calculation items is clicked;
        When the 'delete' button on the 'second object' of the calculation list (calculationsList[1]) is clicked, 
        a class of "removing-list-item" is added to it, causing it to fade out;
        'calculationsList.splice(this.value, 1)' and 'displaySavedCalculations()' are both called within a 'setTimeout()' function, 
        Removing the saved calculation and re-displaying the calculation list, leaving 'third object' as the new second object; 
        The 'Warning Status' heading is returned as "Calculation data deleted!";`, function(){
        let deleteCalc = document.getElementById("delete-calc" + 1);   
        expect(deleteCalc.onclick()).toBe(warningStatus.innerHTML = "Calculation data deleted!");
        setTimeout(function() {
            timerCallback1();
        }, 500);
        jasmine.clock().tick(501);
        expect(timerCallback1).toHaveBeenCalled();
        expect(calculationsList[1].savedDescription).toBe('third object');
        expect(calculationsList[1].savedDescription).not.toBe('second object - answer returned');
        expect(calculationsList[1].savedDescription).not.toBe('first object');
        expect(calculatorStatus.innerHTML).toBe("");
        expect(displayedCalculationList.childNodes[0].classList[1]).toBe('saved-calculation');
        expect(displayedCalculationList.childNodes[0].classList[1]).not.toBe('new-saved-calculation');
    }),
    it(`When the 'load' button on the 'third object' is clicked, the global arrays copy the data from the loaded object.
    i.e. The calculation Array is now a copy of the objects savedCalculation and the newOperator Array is now a copy of the savedOperator Array;
    The 'calculator-status' heading is returned "Calculation data loaded succesfully!";
    A green border is added to  the main calculator and its inherit display;
    The 'loadToTop' function is called, in which smoothly brings the user back to the top of the page to display the calculator;`, function(){
        let loadCalc = document.getElementById("load-calc" + 1);
        expect(loadCalc.onclick()).toBe(calculatorStatus.innerHTML = "Calculation data loaded succesfully!");
        expect(loadCalc.onclick()).not.toBe(calculatorStatus.innerHTML = "Calculator data saved to Calculation Backup!");
        expect(loadCalc.onclick()).not.toBe(calculatorStatus.innerHTML = "");
        expect(calculation).toEqual([ '570' ]);
        expect(calculation).not.toEqual([]);
        expect(newNumber).toEqual([]);
        expect(newOperator).toEqual([ '+' ]);
        expect(newOperator).not.toEqual([]);
        expect(mainCalculator.className.split(' ').includes("success-border")).toBe(true);
        expect(display.className.split(' ').includes("success-border")).toBe(true);
    })
})