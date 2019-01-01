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
        displayedSavedCalculations() doesn't return a value until a loadCalc or deleteCalc button, from each of the displayed saved calculation items, is clicked;`
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
        saveStatus.innerHTML = "Calculation data saved below!";
        expect(displaySavedCalculations()).toBe(undefined);
        expect(displayedCalculationList.childNodes[0].classList[1]).toBe('new-saved-calculation');
        expect(displayedCalculationList.childNodes[0].classList[1]).not.toBe('saved-calculation');
    }),
    /*set up for the delete calc test as it requires the use of jasmine.createSpy() and jasmine.clock, due to the the deleteCalc function calling a setTimeout() function*/
    /*for the timerCallBack() function used this source: https://makandracards.com/makandra/32477-testing-settimeout-and-setinterval-with-jasmine*/
    beforeEach(function() {
        timerCallback = jasmine.createSpy("displaySavedCalculations");
        jasmine.clock().install();
    }),
    afterEach(function() {
        jasmine.clock().uninstall();
    }),
    it(`When deleteCalc() is called on the 'second object' of the calculation list (calculationsList[1]), 
        a class of "removing-list-item" is added to the appended #saved-calculation1 DOM element;
        The "removing-list-item" class causes a fading out effect to the the DOM elements styling, fading from 1 to 0 in opacity. 
        Once this finishes, 'calculationsList.splice(this.value, 1)' and 'displaySavedCalculations()' are both called within a 'setTimeout()' function, Removing the saved calculation and re-displaying the calculation list.
        the 'third object' is then  placed at calculationsList[1];
        deleteCalc() returns #list-item-status.innerHTML = "Calculation data deleted!";`, 
        function(){
        let deleteCalc = document.getElementById("delete-calc" + 1);   
        expect(deleteCalc.onclick()).toBe(listItemStatus.innerHTML = "Calculation data deleted!");
       
        setTimeout(function() {
            timerCallback();
        }, 500);
        jasmine.clock().tick(501);

        expect(calculationsList[1].savedDescription).toBe('third object');
        expect(calculationsList[1].savedDescription).not.toBe('second object - answer returned');
        expect(calculationsList[1].savedDescription).not.toBe('first object');
        expect(displayedCalculationList.childNodes[0].classList[1]).toBe('saved-calculation');
        expect(displayedCalculationList.childNodes[0].classList[1]).not.toBe('new-saved-calculation');
            
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
    }),
    it(`Then, when loadCalc() is called on the 'third object', the global arrays copy the data from the loaded objects.
    i.e. The calculation Array is now a copy of the objects savedCalculation, the newOperator Array is now a copy of the savedOperator Array;
    loadCalc() returns #list-item-status.innerHTML = "Calculation data loaded succesfully!";
    loadCalc() also adds the 'success-border' class to dom elements #main-calculator and #display;
    loadCalc() also calls the loadToTop() function, smoothly bring the user back to the top of the page;
    `, function(){
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