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
describe("clearInputs() outcomes", function(){
    it("results", function(){
        calculation = ["3", "+", "4"]
        newNumber = ["2"];
        newOperator = ["+"];

        expect(clearInputs()).toBe(undefined); 
        /* doesn't return a value, just changes two global values*/
        
        expect(newNumber).toEqual([]);
        expect(newOperator).toEqual([]);
        expect(calculation).toEqual(["3", "+", "4"]);
    })
}),
describe("clearAll() outcomes", function(){
    it("results", function(){
        calculation = ["3", "+", "4."]
        newNumber = ["2"];
        newOperator = ["+"];
        disableDec = true;

        expect(clearAll()).toBe(undefined)
        /* doesn't return a value, just changes four global values*/

        expect(newNumber).toEqual([]);
        expect(newOperator).toEqual([]);
        expect(calculation).toEqual([]);
        expect(disableDec).toBe(false);
    })
}),
describe("displayCalculation() outcomes", function() {
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
})

