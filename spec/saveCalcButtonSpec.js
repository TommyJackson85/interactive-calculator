
describe("results of saveCalculation button", function(){
    it(`saveCalculation.onclick() pushes object containing COPIES of the four main global variables (Copies of: calculation, newNumber, newOperator, disbaleDec), 
    and a stringed version of non empty input (Object.displayedInput either shows newNumber or newOperator); 
    The pushed Object data are strictly copies and are NOT references to global variables; 
    saveCalculation.onclick() also returns #saveStatus.innerHTML as: 'Calculation data saved below!' and it's text color is set to green.`, function(){

        calculationsList = [];

        calculation = ["567", "+"];
        newNumber = ["5","6","7","8","8","8"];
        newOperator = [];
        disableDec = false;

        expect(saveCalculation.onclick()).toBe("Calculation data saved below!" || saveStatus);
        expect(saveStatus.style.color).toBe("green");
        expect(saveCalculation.className.split(' ').includes("warning-border")).toBe(false);
        expect(calculationDescriptionInput.className.split(' ').includes("warning-border")).toBe(false);
        expect(calculationsList).toEqual([
            Object({ 
                savedDescription: '',
                savedCalculation: [ '567', '+' ], 
                savedNumber: [ '5', '6', '7', '8', '8', '8' ], 
                savedOperator: [  ], 
                displayedInput: '567888', 
                savedDecimalStatus: false 
            })
        ]);
        expect(calculationsList).not.toEqual([ ]);
    }),
    it(`saveCalculation.onclick(), cant push Object into calculationList more than 10 times; 
    After saveCalculation.onclick() is called an 11th time in a row, the 'warning-border' is added to #savCalc button and #calculationDescriptionInput input, creating a red border around both sections;
    Then, #saveStatus.innerHTML is returned as: 'Can not save! Calculations List has exceeded it's data limit!' and it's text color is set to red.`, function(){

        calculationsList = [];

        calculation = ["567", "+"];
        newNumber = ["5","6","7","8","8","8"];
        newOperator = [];
        disableDec = false;
        const saveStatus = document.getElementById("save-status");
        const calculationDescriptionInput = document.getElementById("calculationDescriptionInput");

        expect(saveCalculation.onclick()).toBe("Calculation data saved below!");
        expect(saveCalculation.onclick()).toBe("Calculation data saved below!");
        expect(saveCalculation.onclick()).toBe("Calculation data saved below!");
        expect(saveCalculation.onclick()).toBe("Calculation data saved below!");
        expect(saveCalculation.onclick()).toBe("Calculation data saved below!");
        expect(saveCalculation.onclick()).toBe("Calculation data saved below!");
        expect(saveCalculation.onclick()).toBe("Calculation data saved below!");
        expect(saveCalculation.onclick()).toBe("Calculation data saved below!");
        expect(saveCalculation.onclick()).toBe("Calculation data saved below!");
        expect(saveCalculation.onclick()).toBe("Calculation data saved below!");
        expect(saveCalculation.onclick()).toBe("Can not save! Calculations List has exceeded it's data limit!");
        expect(saveCalculation.onclick()).toBe("Can not save! Calculations List has exceeded it's data limit!");
        

        expect(saveStatus.style.color).toBe("red");
        expect(saveStatus.style.color).not.toBe("green");

        expect(saveCalculation.className.split(' ').includes("warning-border")).toBe(true);
        expect(calculationDescriptionInput.className.split(' ').includes("warning-border")).toBe(true);
        expect(calculationsList.length).toBe(10);
        expect(calculationsList.length).not.toBe(12);
        expect(calculationsList.length).not.toBe(11);
    }),
    it(`saveCalc.onclick(), when called twice, pushes the object into calculationList twice, i.e. it pushes it once per click; 
    The 2nd object pushed can be different to the first, when the global arrays (newOperator, newNumber, calculation) and variabled (disableDec) are changed after the first object is pushed; 
    The changes to the second object do not change the values to the first object because each object copies the values of the global arrays through the splice function and dont reference the original global variables;
    saveCalc.onclick() returns #saveStatus.innerHTML as: 'Calculation data saved below!'`, function(){
       
        let operator = document.getElementById("subtract");
        let number = document.getElementById("num7");

        calculationsList = [];
        calculation = ["567", "+"];
        newNumber = ["5","6","7","8","8","8"];
        newOperator = [];
        disableDec = false;

        expect(saveCalculation.onclick()).toBe('Calculation data saved below!');
        expect(number.onclick()).toBe("5678887");
        expect(operator.onclick()).toBe("-");
        expect(saveCalculation.onclick()).toBe('Calculation data saved below!');
        expect(calculationsList).toEqual([
            Object({ 
                savedDescription: '',
                savedCalculation: [ '567', '+' ], 
                savedNumber: [ '5', '6', '7', '8', '8', '8' ], 
                savedOperator: [  ], 
                displayedInput: '567888', 
                savedDecimalStatus: false 
            }),
            Object({ 
                savedDescription: '',
                savedCalculation: [ '567', '+', '5678887'], 
                savedNumber: [ ], 
                savedOperator: ['-'], 
                displayedInput: '-', 
                savedDecimalStatus: false 
              })
        ]);
        expect(calculationsList).not.toEqual([
            Object({ 
                savedDescription: '',
                savedCalculation: [ '567', '+' ], 
                savedNumber: [ '5', '6', '7', '8', '8', '8' ], 
                savedOperator: [  ], 
                displayedInput: '567888', 
                savedDecimalStatus: false 
            }),
            Object({ 
                savedDescription: '',
                savedCalculation: [ '567', '+' ], 
                savedNumber: [ '5', '6', '7', '8', '8', '8' ], 
                savedOperator: [  ], 
                displayedInput: '567888', 
                savedDecimalStatus: false 
            }),
            Object({ 
                savedDescription: '',
                savedCalculation: [ '567', '+', '5678887'], 
                savedNumber: [ ], 
                savedOperator: ['-'], 
                displayedInput: '-', 
                savedDecimalStatus: false 
            }),
            Object({ 
                savedDescription: '',
                savedCalculation: [ '567', '+', '5678887'], 
                savedNumber: [ ], 
                savedOperator: ['-'], 
                displayedInput: '-', 
                savedDecimalStatus: false 
            })
    ]);
        expect(calculationsList).not.toEqual([
            Object({ 
                savedDescription: '',
                savedCalculation: [ '567', '+', '5678887'], 
                savedNumber: [ ], 
                savedOperator: ['-'], 
                displayedInput: '-', 
                savedDecimalStatus: false 
            }),
            Object({ 
                savedDescription: '',
                savedCalculation: [ '567', '+', '5678887'], 
                savedNumber: [ ], 
                savedOperator: ['-'], 
                displayedInput: '-', 
                savedDecimalStatus: false 
            })
        ]);
        expect(calculationsList).not.toEqual([       
            Object({ 
                savedDescription: '',
                savedCalculation: calculation, 
                savedNumber: newNumber, 
                savedOperator: newOperator, 
                displayedInput: '-', 
                savedDecimalStatus: false 
            }),
            Object({ 
                savedDescription: '',
                savedCalculation: calculation, 
                savedNumber: newNumber, 
                savedOperator: newOperator, 
                displayedInput: '-', 
                savedDecimalStatus: false 
            })
        ]);
    }),
    it(`saveCalculation.onclick() can add the 'value' of #calculationDescriptionInput to the savedCalc's object savedDescription value, before pushing the object; 
    The value is built from the user writing into the input; 
    In this case, the description "answer delivered" is written into the input, after the calculation has been evaluated; `, function(){
        calculationsList = [
                Object({ 
                    savedDescription: 'answer not delivered',
                    savedCalculation: [ '567', '+' ], 
                    savedNumber: [ '5', '6', '7', '8', '8', '8' ], 
                    savedOperator: [  ], 
                    displayedInput: '567888', 
                    savedDecimalStatus: false 
                })
        ];
        calculation = ["567", "+", "567888", "="];
        newNumber = ["568455"];
        newOperator = [];
        disableDec = false;

        const calculationDescriptionInput = document.getElementById("calculationDescriptionInput");
        calculationDescriptionInput.value = "answer delivered";

        expect(saveCalculation.onclick()).toBe('Calculation data saved below!');
        expect(calculationsList).toEqual([
            Object({
                savedDescription: 'answer not delivered',
                savedCalculation: [ '567', '+' ], 
                savedNumber: [ '5', '6', '7', '8', '8', '8' ], 
                savedOperator: [  ], 
                displayedInput: '567888', 
                savedDecimalStatus: false 
            }),
            Object({
                savedDescription: 'answer delivered',
                savedCalculation: ["567", "+", "567888", "="],
                savedNumber: ["568455"], 
                savedOperator: [  ], 
                displayedInput: "568455", 
                savedDecimalStatus: false 
            })
        ]);
        expect(calculationsList).not.toEqual([
            Object({
                savedDescription: 'answer not delivered',
                savedCalculation: [ '567', '+' ], 
                savedNumber: [ ' 5', '6', '7', '8', '8', '8' ], 
                savedOperator: [  ], 
                displayedInput: '567888', 
                savedDecimalStatus: false 
            }),
            Object({
                savedDescription: '',
                savedCalculation: ["567", "+", "567888", "="],
                savedNumber: ["568455"], 
                savedOperator: [  ], 
                displayedInput: "568455", 
                savedDecimalStatus: false 
            })
        ]);
    }),
    it(`when each savedCalc object is pushed into calculations list from calling saveCalculation.onclick(), its displayedInput data depends on the previously pushed input;
         When newOperator array contains an opertator ("*"), the operator is displayed in displayedInput;
         When a number ("5") is pushed into the newNumber array and then saveCalculation.onclick is called, "5" is displayed in the new pushed object's displayedInput (as newOperator has been emptied);
         When both inputs are emptied from pressing remove button, and then saveCalculation.onclick() is called, the third pushed savedCalc's displayedInput will contain a string called "Input Empty";   
         `, function(){
        calculationsList = [];
        calculation = ["567", "+", "567888"];
        newNumber = [];
        newOperator = ["*"];
        disableDec = false;

        let number = document.getElementById("num5");
        const remove = document.getElementById("remove");

        expect(saveCalculation.onclick()).toBe('Calculation data saved below!');
        expect(number.onclick()).toBe('5');
        expect(saveCalculation.onclick()).toBe('Calculation data saved below!');
        expect(remove.onclick()).toBe('removed');
        expect(saveCalculation.onclick()).toBe('Calculation data saved below!');
        
        expect(newNumber).toEqual([]);
        expect(newOperator).toEqual([]);
        expect(calculation).toEqual(["567", "+", "567888", "*"]);

        expect(calculationsList[0].displayedInput).toBe("*"); 
        expect(calculationsList[0].displayedInput).not.toBe("Input Empty");
        expect(calculationsList[0].displayedInput).not.toBe("5");

        expect(calculationsList[1].displayedInput).toBe("5");
        expect(calculationsList[1].displayedInput).not.toBe("*"); 
        expect(calculationsList[1].displayedInput).not.toBe("Input Empty");

        expect(calculationsList[2].displayedInput).toBe("Input Empty");
        expect(calculationsList[2].displayedInput).not.toBe("5");
        expect(calculationsList[2].displayedInput).not.toBe("*"); 
    })
})