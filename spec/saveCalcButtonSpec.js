
describe("results of saveCalculation button", function(){
    it(`saves object containing COPIES of the four main global variables (Copies of: calculation, newNumber, newOperator, disbaleDec), 
    and a stringed version of non empty input (Object.displayedInput either shows newNumber or newOperator);
    If no text was inputed into calculation-description-input, the object's savedDescription will equal 'No Description Included';
    'calculator-status' heading returned as 'Calculator data saved to Calculator!'; 
    'save-status' heading returned as 'Calculator data saved below!';
    'success-border' class is added to the class lists of the 'main-calculator' and its 'display';`, function(){

        calculationsList = [];
        calculation = ["567", "+"];
        newNumber = ["5","6","7","8","8","8"];
        newOperator = [];
        disableDec = false;

        expect(saveCalculation.onclick()).toBe("Calculator data saved to Calculation Backup!" || calculatorStatus);
        expect(saveStatus.innerHTML).toBe("Calculator data saved below!");
        expect(mainCalculator.className.split(' ').includes("success-border")).toBe(true);
        expect(display.className.split(' ').includes("success-border")).toBe(true);

        expect(saveCalculation.className.split(' ').includes("warning-border")).toBe(false);
        expect(calculationDescriptionInput.className.split(' ').includes("warning-border")).toBe(false);
        expect(calculationsList).toEqual([
            Object({ 
                savedDescription: 'No Description Included',
                savedCalculation: [ '567', '+' ], 
                savedNumber: [ '5', '6', '7', '8', '8', '8' ], 
                savedOperator: [  ], 
                displayedInput: '567888', 
                savedDecimalStatus: false 
            })
        ]);
        expect(calculationsList).not.toEqual([ ]);
    }),
    it(`cant push Object into calculations list if list has 10 items; 
    A red border (through 'warning-border' class) is added to the save button and calculation description input;
    'warning-status' heading is returned as 'Can not save! Calculations List has exceeded it's data limit!';
    'calculator-status' and 'saveStatus' become equal to ""; green border ('success-border' class) is removed from the main calculator and its display if it exists;
    `, function(){
        calculationsList = [];
        calculation = ["567", "+"];
        newNumber = ["5","6","7","8","8","8"];
        newOperator = [];
        disableDec = false;
        const saveStatus = document.getElementById("save-status");
        const calculationDescriptionInput = document.getElementById("calculation-description-input");

        expect(saveCalculation.onclick()).toBe(calculatorStatus.innerHTML = "Calculator data saved to Calculation Backup!");
        expect(saveCalculation.onclick()).toBe("Calculator data saved to Calculation Backup!");
        expect(saveCalculation.onclick()).toBe("Calculator data saved to Calculation Backup!");
        expect(saveCalculation.onclick()).toBe("Calculator data saved to Calculation Backup!");
        expect(saveCalculation.onclick()).toBe("Calculator data saved to Calculation Backup!");
        expect(saveCalculation.onclick()).toBe("Calculator data saved to Calculation Backup!");
        expect(saveCalculation.onclick()).toBe("Calculator data saved to Calculation Backup!");
        expect(saveCalculation.onclick()).toBe("Calculator data saved to Calculation Backup!");
        expect(saveCalculation.onclick()).toBe("Calculator data saved to Calculation Backup!");

        expect(saveCalculation.onclick()).toBe("Calculator data saved to Calculation Backup!");
        expect(saveStatus.innerHTML).toBe("Calculator data saved below!");
        expect(mainCalculator.className.split(' ').includes("success-border")).toBe(true);
        expect(display.className.split(' ').includes("success-border")).toBe(true);

        expect(saveCalculation.onclick()).toBe(warningStatus.innerHTML = "Can not save! Calculations List has exceeded it's data limit!");
        expect(calculatorStatus.innerHTML).toBe("");
        expect(saveStatus.innerHTML).toBe("");
        expect(mainCalculator.className.split(' ').includes("success-border")).toBe(false);
        expect(display.className.split(' ').includes("success-border")).toBe(false);

        expect(saveCalculation.onclick()).toBe("Can not save! Calculations List has exceeded it's data limit!");

        expect(saveCalculation.className.split(' ').includes("warning-border")).toBe(true);
        expect(calculationDescriptionInput.className.split(' ').includes("warning-border")).toBe(true);
        expect(calculationsList.length).toBe(10);
        expect(calculationsList.length).not.toBe(12);
        expect(calculationsList.length).not.toBe(11);
    }),
    it(`when called twice, it pushes two objects into calculationList twice;
    The 2nd object is different to the first when the global arrays (newOperator, newNumber, calculation) are changed after the first object is pushed;
    `, function(){
       
        let operator = document.getElementById("subtract");
        let number = document.getElementById("num7");

        calculationsList = [];
        calculation = ["567", "+"];
        newNumber = ["5","6","7","8","8","8"];
        newOperator = [];
        disableDec = false;

        expect(saveCalculation.onclick()).toBe('Calculator data saved to Calculation Backup!');
        expect(number.onclick()).toBe(undefined);
        expect(operator.onclick()).toBe(undefined);
        expect(saveCalculation.onclick()).toBe('Calculator data saved to Calculation Backup!');
        expect(calculationsList).toEqual([
            Object({ 
                savedDescription: 'No Description Included',
                savedCalculation: [ '567', '+' ], 
                savedNumber: [ '5', '6', '7', '8', '8', '8' ], 
                savedOperator: [  ], 
                displayedInput: '567888', 
                savedDecimalStatus: false 
            }),
            Object({ 
                savedDescription: 'No Description Included',
                savedCalculation: [ '567', '+', '5678887'], 
                savedNumber: [ ], 
                savedOperator: ['-'], 
                displayedInput: '-', 
                savedDecimalStatus: false 
              })
        ]);
        expect(calculationsList).not.toEqual([
            Object({ 
                savedDescription: 'No Description Included',
                savedCalculation: [ '567', '+' ], 
                savedNumber: [ '5', '6', '7', '8', '8', '8' ], 
                savedOperator: [  ], 
                displayedInput: '567888', 
                savedDecimalStatus: false 
            }),
            Object({ 
                savedDescription: 'No Description Included',
                savedCalculation: [ '567', '+' ], 
                savedNumber: [ '5', '6', '7', '8', '8', '8' ], 
                savedOperator: [  ], 
                displayedInput: '567888', 
                savedDecimalStatus: false 
            }),
            Object({ 
                savedDescription: 'No Description Included',
                savedCalculation: [ '567', '+', '5678887'], 
                savedNumber: [ ], 
                savedOperator: ['-'], 
                displayedInput: '-', 
                savedDecimalStatus: false 
            }),
            Object({ 
                savedDescription: 'No Description Included',
                savedCalculation: [ '567', '+', '5678887'], 
                savedNumber: [ ], 
                savedOperator: ['-'], 
                displayedInput: '-', 
                savedDecimalStatus: false 
            })
    ]);
        expect(calculationsList).not.toEqual([
            Object({ 
                savedDescription: 'No Description Included',
                savedCalculation: [ '567', '+', '5678887'], 
                savedNumber: [ ], 
                savedOperator: ['-'], 
                displayedInput: '-', 
                savedDecimalStatus: false 
            }),
            Object({ 
                savedDescription: 'No Description Included',
                savedCalculation: [ '567', '+', '5678887'], 
                savedNumber: [ ], 
                savedOperator: ['-'], 
                displayedInput: '-', 
                savedDecimalStatus: false 
            })
        ]);
        expect(calculationsList).not.toEqual([       
            Object({ 
                savedDescription: 'No Description Included',
                savedCalculation: calculation, 
                savedNumber: newNumber, 
                savedOperator: newOperator, 
                displayedInput: '-', 
                savedDecimalStatus: false 
            }),
            Object({ 
                savedDescription: 'No Description Included',
                savedCalculation: calculation, 
                savedNumber: newNumber, 
                savedOperator: newOperator, 
                displayedInput: '-', 
                savedDecimalStatus: false 
            })
        ]);
    }),
    it(`The inputed value of the calculation description input, if it is not empty, is saved to 'savedDescription' value of the Obect; 
     `, function(){
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

        const calculationDescriptionInput = document.getElementById("calculation-description-input");
        calculationDescriptionInput.value = "answer delivered";

        expect(saveCalculation.onclick()).toBe('Calculator data saved to Calculation Backup!');
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
                savedDescription: 'No Description Included',
                savedCalculation: ["567", "+", "567888", "="],
                savedNumber: ["568455"], 
                savedOperator: [  ], 
                displayedInput: "568455", 
                savedDecimalStatus: false 
            })
        ]);
    }),
    it(`When newOperator array contains an opertator ("x"), the new saved Object's 'displayedInput' will contain the the operator value;
        When newNumber array contains a number ("5"), the new saved Object's 'displayedInput' will contain the number value;
        When both input arrays are empty, the new saved Object's 'displayedInput' will contain a string called "Input Empty";`, function(){
        calculationsList = [];
        calculation = ["567", "+", "567888"];
        newNumber = [];
        newOperator = ["x"];
        disableDec = false;

        let number = document.getElementById("num5");
        const remove = document.getElementById("remove");

        expect(saveCalculation.onclick()).toBe('Calculator data saved to Calculation Backup!');
        expect(number.onclick()).toBe(undefined);
        expect(saveCalculation.onclick()).toBe('Calculator data saved to Calculation Backup!');
        expect(remove.onclick()).toBe('removed');
        expect(saveCalculation.onclick()).toBe('Calculator data saved to Calculation Backup!');
        
        expect(newNumber).toEqual([]);
        expect(newOperator).toEqual([]);
         expect(calculation).toEqual(["567", "+", "567888"]);
        expect(calculationsList[0].displayedInput).toBe("x"); 
        expect(calculationsList[0].displayedInput).not.toBe("Input Empty");
        expect(calculationsList[0].displayedInput).not.toBe("5");

        expect(calculationsList[1].displayedInput).toBe("5");
        expect(calculationsList[1].displayedInput).not.toBe("x"); 
        expect(calculationsList[1].displayedInput).not.toBe("Input Empty");

        expect(calculationsList[2].displayedInput).toBe("Input Empty");
        expect(calculationsList[2].displayedInput).not.toBe("5");
        expect(calculationsList[2].displayedInput).not.toBe("x"); 
    }),
    it(`When the calculation array is cleared, the new saved object's savedCalculation will equal an array containing only 'Calculation Empty'.`, function(){
        calculationsList = [];
        calculation = ["567", "+", "567888"];
        newNumber = [];
        newOperator = ["x"];
        disableDec = false;
        const clear = document.getElementById("clear");
        expect(clear.onclick()).toBe('0');
        expect(saveCalculation.onclick()).toBe('Calculator data saved to Calculation Backup!');
        expect(calculationsList[0].savedCalculation).toEqual(['Calculation Empty']);
        expect(calculationsList[0].savedCalculation).not.toEqual([]);
        expect(calculationsList[0].savedCalculation).not.toEqual(["567", "+", "567888"]);
    })
})