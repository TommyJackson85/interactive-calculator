describe("The Answer button responses", function(){
    it("returns the evaluation of the calculation Array and pushes it into newNumber Array", function(){
        calculation = ["3", "x"];
        newNumber = ["6"];
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
        let key = "answer";
        let operator = document.getElementById(key);
        expect(operator.onclick()).toBe(18);
       /*empied after pushToCalculation()*/
        expect(newNumber[newNumber.length - 1]).toBe("18");
        expect(newNumber[newNumber.length - 1]).not.toBe("6");
        expect(newNumber[newNumber.length - 1]).not.toBe(undefined);

        expect(newNumber.length).not.toBe(2);
    }),
    it("pushes previous newNumber('6') into calculation array BEFORE evaluating the calculation", function(){
        calculation = ["3", "x"];
        newNumber = ["6"];
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
        let key = "answer";
        let operator = document.getElementById(key);
        expect(operator.onclick()).toBe(18);
        expect(calculation[calculation.length - 2]).toBe("6");
        expect(calculation[calculation.length - 2]).not.toBe("x");
    }),
    it("pushes '=' into calculation array AFTER calculation evaluation, primarily for display", function(){
        calculation = ["3", "x"];
        newNumber = ["6"];
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
        let key = "answer";
        let operator = document.getElementById(key);
        expect(operator.onclick()).toBe(18);
        expect(calculation[calculation.length - 1]).toBe("=");
        expect(calculation[calculation.length - 1]).not.toBe("6");
    }),
    it("Answer button won't work if it contains an '=' at the end of the Calculation", function(){
        calculation = ["3", "x", "6", "="];
        newNumber = ["18"];
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
        let key = "answer";
        let operator = document.getElementById(key);
        expect(operator.onclick()).toBe(undefined);
    })
}),
describe("Other operator ('x', '-', '+', '/') buttons'responses", function(){
    it("onclick willl clear the calculation array if the array contains an '=' at the end, and the newNumber (previous answer) will be pushed to the Calculation array", function(){
        calculation = ["3", "x", "6", "="];
        newNumber = ["18"];
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
        let key = "multiply";
        let operator = document.getElementById(key);
        expect(operator.onclick()).toBe("x");
        expect(calculation).toEqual(["18"]);
        expect(calculation).not.toEqual(["3", "x", "6", "=", "18"]);
        expect(calculation).not.toEqual([]);
    }),
    it("onclick replace's newOperator content with pressed operator button value. The newOperator array never increases more than 1 in length", function(){
        calculation = ["3", "x", "6", "-"];
        newNumber = ["2"];
        newOperator = ["-"];
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
       
        let operator = document.getElementById("multiply");
        expect(operator.onclick()).toBe("x");
        operator = document.getElementById("add");
        expect(operator.onclick()).toBe("+");
        expect(newOperator).toEqual(["+"]);
        expect(newOperator).not.toEqual(["-", "x", "+"]);
        expect(newOperator).not.toEqual([]);
    }),
    it("onclick pushes newNumber content to calculation array, after second click it doesn't push empty strings or push another operator or number", function(){
        calculation = ["3", "x", "6", "-"];
        newNumber = ["2"];
        newOperator = ["-"];
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
       
        let operator = document.getElementById("multiply");
        expect(operator.onclick()).toBe("x");
        operator = document.getElementById("add");
        expect(operator.onclick()).toBe("+");
        expect(calculation[calculation.length - 1]).toBe("2");
        expect(calculation[calculation.length - 2]).not.toBe("2");
        expect(calculation[calculation.length - 2]).toBe("-");
        expect(calculation[calculation.length - 1]).not.toBe("");
        expect(calculation[calculation.length - 1]).not.toBe("-");
        expect(calculation.includes("")).toBe(false);
        expect(calculation.length).toBe(5);/*wrong, needs to be corrected*/
        expect(calculation).toEqual(["3", "x", "6", "-", "2"]);/*wrong, needs to be corrected*/
        expect(newNumber).toEqual([]);
    })
})