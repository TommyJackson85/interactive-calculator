describe("What an operator button and utileseOperator function calls", function(){
    it(`multiply operator is not utilised on click because number wasn't formed. 
    You can't build a number starting with '0'`, function(){
        disableDec = false;
        newNumber = [];
        newOperator = ["+"];
        calculation = ["45", "-", "4"];
        let number = document.getElementById("num" + 0);
        let operator = document.getElementById("multiply");

        expect(number.onclick()).toBe(undefined);
        
        expect(operator.onclick()).toBe(undefined);

        expect(newNumber).toEqual([]);
        expect(newOperator).toEqual([]);
        expect(calculation).toEqual(["45", "-", "4", "+"]);
        expect(displayedInput.innerHTML).toBe("0");
    }),
    it(`operator won't be called if number is only '0.' or '-0.'. 
    Both inputs are empitied, disableDec and divide100Activated are turned to false.`, function(){
        disableDec = false;
        divide100Activated = false;
        newNumber = [];
        newOperator = ["+"];
        calculation = ["45", "-", "4"];
        displayedInput.innerHTML = "0";

        number = document.getElementById("numDec");
        expect(number.value).toBe('.');
        expect(number.onclick()).toBe(undefined);
        
        let operator = document.getElementById("multiply");
        expect(operator.value).toBe("x");
        expect(operator.onclick()).toBe(undefined);

        let plusMinus = document.getElementById("plus-minus");
        expect(plusMinus.onclick()).toBe(undefined);

        expect(operator.onclick()).toBe(undefined);

        expect(newNumber).toEqual([]);
        expect(newOperator).toEqual([]);
        expect(calculation).toEqual(["45", "-", "4", "+"]);
    });
    it(`calls the utiliseOperator function, in which carry's the operator button's 'value' as the main argument; 
        Begins with the number 2 after being pushes and displayed in the displayed input;  
        when 'multiply' is called, it pushes 'x' into the 'newOperator' array (through the untiliseOperator function);
        This 'x' is then pushed into the calculation array when a number button is pressed; 
        Then when utiliseOperator(operator.value) is called, it pushes the newNumber array value into the calculator value, and pushes the operator value into the newOperator array, in which is also displayed in the input display;`, function(){
        displayedInput.innerHTML = "2"; 
        divide100Activated = false;
        disableDec = false;
        calculation = [];
        newNumber = ["2"];
        newOperator = [];
        
        operator = document.getElementById('multiply');
        number = document.getElementById('num5');

        expect(operator.onclick()).toBe(undefined);
        expect(number.onclick()).toBe(undefined);
        expect(utiliseOperator(operator.value)).toBe("x");

        expect(calculation).toEqual(["2", "x", "5"]);
        expect(calculation).not.toEqual(["2","x"]);
        expect(calculation).not.toEqual(["2"]);

        expect(newOperator).toEqual(["x"]);
        expect(newOperator).not.toEqual([]);
        expect(displayedInput.innerHTML).toBe("x"); 

        expect(newNumber).toEqual([]);
        expect(newNumber).not.toEqual(["5"]);
        expect(newNumber).not.toEqual(["2"]);         
    })
})
describe("The Answer button responses", function(){
    it("returns the evaluation of the calculation Array and pushes it into newNumber Array, and has it split", function(){
        calculation = [];
        newNumber = ["3"];
        newOperator = [];
        let key = "multiply";
        let operator = document.getElementById(key);
        expect(operator.onclick()).toBe(undefined);
        expect(numberBuilder("6")).toBe("6");
        operator = document.getElementById("answer");
        expect(operator.onclick()).toBe(undefined);
        expect(newNumber).toEqual(["1","8"]);
        expect(newNumber).not.toEqual([]);
        expect(newNumber).not.toEqual(["18"]);
        expect(calculation).toEqual(["3","x","6","="]);
        expect(calculation).not.toEqual(["3","x","6"]);
        expect(newNumber[newNumber.length - 1]).toBe("8");
        expect(newNumber[newNumber.length - 1]).not.toBe("6");
        expect(newNumber[newNumber.length - 1]).not.toBe(undefined);
        expect(newNumber.length).toBe(2);
        expect(newNumber.length).not.toBe(1);
    }),
    it("The displayCalculation function is called after pressing '=' ", function(){
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
        expect(newNumber.length).not.toBe(1);
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
    it("won't change any global values if '=' is already at the end of the Calculation", function(){
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
    it("The 'displayCalculation' function is called after pressing 'substract' ", function(){
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
    it("clears the calculation array if the array contains an '=' at the end, and the newNumber array (previous answer) will be pushed to the Calculation array", function(){
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
    it("replace's newOperator content with pressed operator button value. The newOperator array never increases more than 1 in length", function(){
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
    it("pushes newNumber content to calculation array, after second click it doesn't push empty strings or push another operator or number", function(){
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