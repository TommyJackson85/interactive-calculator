describe("What an operator button calls", function(){
    it(`operator button calls the utiliseOperator(this.value) function, in which carry's the operator button's 'value' as the utiliseOperator()'s main argument, 
    i.e the 'multiply' operator will call utiliseOperator('x'); The example tested shows a calculation chain being built: 
    when operator.onclick() is called, it pushes 'x' into the newOperator array (through the untiliseOperator function);
     This 'x' is then pushed into the calculation array when a number button is pressed; 
     Then ultiseOperator(operator.value) is called, carrying the same previously pushed operator value, pushing a second 'x' into the newOperator array; 
     Both number.onclick() and utiliseOperator(operator.value) cause the same effect;'`, function(){
        calculation = [];
        newNumber = ["2"];
        newOperator = [];
        let operator = document.getElementById('multiply');
        let number = document.getElementById('num5');
        expect(operator.onclick()).toBe(undefined);
        expect(number.onclick()).toBe(undefined);
        expect(utiliseOperator(operator.value)).toBe("x");

        expect(calculation).toEqual(["2","x","5"]);
        expect(calculation).not.toEqual(["2","x"]);
        expect(calculation).not.toEqual(["2"]);

        expect(newOperator).toEqual(["x"]);
        expect(newOperator).not.toEqual([]);

        expect(newNumber).toEqual([]);
        expect(newNumber).not.toEqual(["5"]);
        expect(newNumber).not.toEqual(["2"]);         
    })
})
describe("The Answer button responses", function(){
    it("answer returns the evaluation of the calculation Array and pushes it into newNumber Array", function(){
        calculation = [];
        newNumber = ["3"];
        newOperator = [];
        let key = "multiply";
        let operator = document.getElementById(key);
        expect(operator.onclick()).toBe(undefined);
        expect(numberBuilder("6")).toBe("6");
        operator = document.getElementById("answer");
        expect(operator.onclick()).toBe(undefined);
        expect(newNumber).toEqual(["18"]);
        expect(newNumber).not.toEqual([]);
        expect(newNumber).not.toEqual(["1","8"]);
        expect(calculation).toEqual(["3","x","6","="]);
        expect(calculation).not.toEqual(["3","x","6"]);
        expect(newNumber[newNumber.length - 1]).toBe("18");
        expect(newNumber[newNumber.length - 1]).not.toBe("6");
        expect(newNumber[newNumber.length - 1]).not.toBe(undefined);
        expect(newNumber.length).not.toBe(2);
    }),
    it("displayCalculation() is called after pressing '=' ", function(){
        calculation = ["3", "x"];
        newNumber = ["6"];
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
        let key = "answer";
        let operator = document.getElementById(key);
        expect(operator.onclick()).toBe(undefined);
       /*empied after pushToCalculation()*/
        expect(calculation[calculation.length - 1]).toBe("=");
        expect(calculation).toEqual(["3", "x", "6", "="]);
         expect(displayedCalc.innerHTML).toEqual("3 x 6 =");
        expect(newNumber[newNumber.length - 1]).not.toBe(undefined);

        expect(newNumber.length).not.toBe(2);
    }),
    it("displayCalculation() is called after pressing '-' ", function(){
        calculation = ["3", "x"];
        newNumber = ["6"];
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
        let key = "subtract";
        let operator = document.getElementById(key);
        expect(operator.onclick()).toBe(undefined);
       /*empied after pushToCalculation()*/
        expect(calculation[calculation.length - 1]).toBe("6");
        expect(calculation).toEqual(["3", "x", "6"]);
         expect(displayedCalc.innerHTML).toEqual("3 x 6");
        expect(newNumber[newNumber.length - 1]).toBe(undefined);

        expect(newNumber.length).toBe(0);
    }),
    it("pushes previous newNumber('6') into calculation array BEFORE evaluating the calculation", function(){
        calculation = ["3", "x"];
        newNumber = ["6"];
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
        let key = "answer";
        let operator = document.getElementById(key);
        expect(operator.onclick()).toBe(undefined);
        expect(calculation[calculation.length - 2]).toBe("6");
        expect(calculation[calculation.length - 2]).not.toBe("x");
    }),
    it("pushes '=' into calculation array AFTER calculation evaluation, primarily for display", function(){
        calculation = ["3", "x"];
        newNumber = ["6"];
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
        let key = "answer";
        let operator = document.getElementById(key);
        expect(operator.onclick()).toBe(undefined);
        expect(calculation[calculation.length - 1]).toBe("=");
        expect(calculation[calculation.length - 1]).not.toBe("6");
    }),
    it("Answer button won't change any global values if '=' is already at the end of the Calculation", function(){
        calculation = ["3", "x", "6", "="];
        newNumber = ["18"];
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
        let buttonValue = "answer";
        let operator = document.getElementById(buttonValue);
        expect(operator.onclick()).toBe(undefined);
        expect(calculation).toEqual(["3", "x", "6", "="]);
        expect(calculation).not.toEqual(["3", "x", "6", "=", "="]);
        expect(calculation).not.toEqual(["18", "="]);
        expect(calculation).not.toEqual(["="]);
        expect(newNumber).toEqual(["18"]);
        expect(newNumber).not.toEqual([]);

    })
}),
describe("Other operator ('x', '-', '+', '/') buttons'responses", function(){
    it("onclick willl clear the calculation array if the array contains an '=' at the end, and the newNumber (previous answer) will be pushed to the Calculation array", function(){
        calculation = ["3", "x", "6", "="];
        newNumber = ["18"];
        newOperator = [];
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
        let key = "multiply";
        let operator = document.getElementById(key);
        expect(operator.onclick()).toBe(undefined);
        expect(newOperator).toEqual(["x"]);
        expect(newOperator).not.toEqual([]);
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
        expect(operator.onclick()).toBe(undefined);
        operator = document.getElementById("add");
        expect(operator.onclick()).toBe(undefined);
        expect(newOperator).toEqual(["+"]);
        expect(newOperator).not.toEqual(["-", "x", "+"]);
        expect(newOperator).not.toEqual([]);
    }),
    it("onclick pushes newNumber content to calculation array, after second click it doesn't push empty strings or push another operator or number", function(){
        calculation = ["3", "x", "6", "-"];
        newNumber = ["2"];
        newOperator = ["-"];  
        let operator = document.getElementById("multiply");
        expect(operator.onclick()).toBe(undefined);
        operator = document.getElementById("add");
        expect(operator.onclick()).toBe(undefined);
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