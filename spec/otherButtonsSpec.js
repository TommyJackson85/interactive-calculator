describe("Results of negative button", function(){
    it("if newNumber[0] is already a negative , it turns it negative", function(){ //will be removed, as it is just temporary
        newNumber = ["-5", "6"];
        expect(negative.onclick()).toBe("56");
        expect(newNumber).toEqual(["5", "6"]);
        expect(newNumber).not.toEqual(["-5", "6"]);
    }),
    it("if newNumber[0] is NOT a negative, it turns it positive ; '-' is never pushed to the front it's just added to the first index/string of the array", function(){ //will be removed, as it is just temporary
        newNumber = ["5", "6"];
        expect(negative.onclick()).toBe("-56");
        expect(newNumber[0]).toBe("-5");
        expect(newNumber[0]).not.toBe("-");
        expect(newNumber[0]).not.toBe("5");
        expect(newNumber).toEqual(["-5", "6"]);
        expect(newNumber).not.toEqual(["-", "5", "6"]);
    }),
    it("the newNumber can be constantly change from negative to positive, when negative button is continuously pressed.", function(){ //will be removed, as it is just temporary
        newNumber = ["5", "6"];
        expect(negative.onclick()).toBe("-56");
        expect(negative.onclick()).toBe("56");
        expect(negative.onclick()).toBe("-56");
        expect(negative.onclick()).toBe("56");
        expect(negative.onclick()).toBe("-56");
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
    it("if last index of calculation is an operator, calculation Array is spliced with last index removed, both input arrays are emptied AND displayedInput HTML is returned as 'removed'.", function(){
        calculation = ["3", "+", "4", "+"];
        newNumber = ["5"];
        newOperator = [];
        expect(remove.onclick()).toBe("removed");
        expect(calculation.length).toEqual(3);
        expect(calculation).toEqual(["3", "+", "4"]);
        expect(calculation).not.toEqual(["3", "+", "4", "5"]);
        expect(calculation).not.toEqual(["3", "+"]);
    }),
    it("if last index of calculation is a number AND if boths input Arrays are NOT empty, then calculation Array is Not spliced BUT both input arrays are emptied ; displayedInput HTML is returned as 'removed'.", function(){
        calculation = ["3", "+", "4"];
        newNumber = [];
        newOperator = ["+"];
        expect(remove.onclick()).toBe("removed");
        expect(calculation.length).toEqual(3);

        expect(calculation).toEqual(["3", "+", "4"]);
        expect(calculation).not.toEqual(["3", "+"]);
        expect(calculation).not.toEqual(["3"]);
    }),
    it("if boths input Arrays are empty, calculation Array is spliced with the last two indexs removed; displayedInput HTML is returned as 'removed'.", function(){
        calculation = ["3", "+", "4"];
        newNumber = [];
        newOperator = [];
        expect(remove.onclick()).toBe("removed");
        expect(calculation.length).toEqual(1);

        expect(calculation).toEqual(["3"]);
        expect(calculation).not.toEqual(["3", "+"]);
        expect(calculation).not.toEqual(["3", "+", "4"]);
    }),
    it("the remove be consistantly be used ; after multiple clicks, in this case 5, and once the calculation array is fully emptied, displayedCalc HTML displays 'cleared'.", function(){
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
describe("results of divide100 button", function(){
    it("divides newNumber by 100 through a complex set of functionalities ( divides evaluated version of newNumber.join(''), by 100, turns it back into a string, and splits it into an new Array called tempNum, empties newNumber array, and pushes tempNum array content back into newNumber array) ; returns newNumber.joined('') afterwards", function(){
        newNumber = ["5", "6","7","8","0","0"];
        expect(divide100.onclick()).toBe("5678");
        expect(newNumber).toEqual(["5","6","7","8"]);
        expect(newNumber).not.toEqual([]);
    }),
    it("the number isn't rounded to the nearest decimal ; It can leave a decimal in the number, in which sets disableDec to true", function(){
        newNumber = ["5","6","7","8","8","8"];
        disableDec = false;
        expect(divide100.onclick()).toBe("5678.88");
        expect(newNumber).toEqual(["5","6","7","8",".","8","8"]);
        expect(newNumber).not.toEqual(["5","6","7","8","8","8"]);
        expect(disableDec).toBe(true);
        expect(disableDec).not.toBe(false);
    })
})