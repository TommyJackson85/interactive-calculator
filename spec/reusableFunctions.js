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
    it("displayCalcuclation should display calculation array elements joined as a string, while calculation array shouldn't change afterwards", function(){
        calculation = ["3", "+", "4."];
        expect(displayCalculation()).toBe("3 + 4.");
        expect(displayCalculation()).not.toBe(["3", "+", "4."]);
    }),
    it("IF the string length is greater than 34, it should shorten the string to 34 (from the last element backwards), but then add three decimals('...') at the start", function(){
        calculation = ["5", "+", "5", "+", "666", "+", "3", "+", "3", "+", "3", "+", "3", "+", "3", "+", "3"];
        expect(displayCalculation()).toBe("... + 5 + 666 + 3 + 3 + 3 + 3 + 3 + 3");
        expect(displayCalculation()).not.toBe("5 + 5 + 666 + 3 + 3 + 3 + 3 + 3 + 3");
        expect(displayCalculation()).not.toBe("... 5 + 5 + 666 + 3 + 3 + 3 + 3 + 3 + 3");
    })
}),
describe("clearInputs() outcomes", function(){
    it("should clear input arrays only", function(){
        calculation = ["3", "+", "4"]
        newNumber = ["2"];
        newOperator = ["+"];

        expect(clearInputs()).toBe(undefined); 
        /* doesn't return a value, just changes two global values*/
        expect(newNumber).toEqual([]);
        expect(newNumber).not.toEqual(["2"]);
        expect(newOperator).toEqual([]);
        expect(newOperator).not.toEqual(["2"]);
        expect(calculation).toEqual(["3", "+", "4"]);
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
        expect(clearAllAndDisplay()).toBe("cleared");
        expect(clearAllAndDisplay()).not.toBe("3 + 4.");
        expect(clearAllAndDisplay()).not.toBe("0");
        expect(calculation).toEqual([]);
        expect(calculation).not.toEqual(["3", "+", "4"]);
        expect(newOperator).toEqual([]);
        expect(newOperator).not.toEqual(["*"]);
        expect(newNumber).toEqual([]);
        expect(displayedCalc.innerHTML).toBe("cleared");
        expect(displayedCalc.innerHTML).not.toBe("3 + 4.");
        expect(displayedInput.innerHTML).toBe("0");
        expect(displayedInput.innerHTML).not.toBe("*");
    })
})

