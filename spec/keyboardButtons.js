describe('document.onkeypress responses, while pressing the relevent keyboard buttons', function(){
    it(`Numbers 0 to 9 and '.' operate the numberButton(e) function with the keyboard 'key' or 'shiftKey' value being used as the 'e' value;
        Operator keyboard buttons '-', '+', '/', '=', and letter button 'x' (used for multiplying) all call utiliseOperator(e), with with each keyboard key value being used as the 'e' value; 
        Each of keyboard button value matches the calculator button value. A capital 'X' and operator '*' buttons also call utiliseOperator('x'), as an alternative for multiplying;
        'Enter' and 'Return' keyboard values also call utiliseOperator('=');
        Other keyboard buttons are used as short cuts: 
        'd' and 'D' call switchCalculationDisplay.onclick();
        '±' call plusMinus.onclick();
        's' and 'S' call saveCalculation.onclick();
        '%' call divide100.onclick();
        'r' and 'R' call remove.onclick();
        Other keys don't call anything back, i.e. 'v','j','g','l';
        A fake keyPress object and fake documentOnKeyPress function were used for this test, noth of which replicate the real document.onkeypress function (on main.js);
    `, function(){

        calculation = [];
        newNumber = [];
        mewOperator = [];
        calculationsList = [];

        let keyPress = {
            key: '4',
            defaultPrevented: false 
        }
        let documentOnKeyPress = function(e) {
          /* || e.shiftKey.toString();*/
            let key = e.key;
            if (e.defaultPrevented || document.activeElement.tagName == 'TEXTAREA') {
                return; // Do nothing if the event was already processed OR if the description input (node 'TEXTAREA') is Active;
            }
            switch (key) {
                // IE/Edge specific value
                case "d": case "D":
                switchCalculationDisplay.onclick();
                 break;
                case "s": case "S":
                 saveCalculation.onclick();
                 break;
                 case "%":
                 divide100.onclick();
                 break;
                 case "±":
                 plusMinus.onclick();
                 break;
                 case "r": case "R":
                 remove.onclick();
                  // Do something for "left arrow" key press.
                 break;
                 case "c": case "C":
                 clear.onclick();
                  // Do something for "left arrow" key press.
                 break
                 // IE/Edge specific value  
                 case "1": case "2": case "3": case "4": case "5": 
                 case "6": case "7": case "8": case "9": case "0": case ".":
                 numberBuilder(key);
                   // IE/Edge specific value
                 break;
                 case "Enter": case "Return": case "=":
                 utiliseOperator("=");
                  // Do something for "enter" or "return" key press.
                 break;
                 case "x": case "*":
                 utiliseOperator("x");
                 break;
                 case "-": case "/": case "+":
                 utiliseOperator(key);
                 break;
                 default:
                return; // Quit when this doesn't handle the key event.
            }
              // Cancel the default action to avoid it being handled twice
              e.preventDefault = true;
        }

        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newNumber).toEqual(['4','4']);
        expect(newNumber).not.toEqual([]);
        expect(newNumber).not.toEqual([4,4]);

        keyPress.key = '+';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newOperator).toEqual(['+']);
        expect(newNumber).toEqual([]);
        
        keyPress.key = '-';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newOperator).toEqual(['-']);
        expect(newNumber).toEqual([]);
        expect(calculation).toEqual(['44']);
        
        keyPress.key = 'v';/*nothing happens*/
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        keyPress.key = 'j';/*nothing happens*/
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        keyPress.key = 'g';/*nothing happens*/
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        keyPress.key = 'l';/*nothing happens*/
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newOperator).toEqual(['-']);
        expect(newNumber).toEqual([]);
        expect(calculation).toEqual(['44']);

        keyPress.key = '3';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newOperator).toEqual([]);
        expect(newNumber).toEqual(['3']);
        expect(calculation).toEqual(['44', '-']);

        keyPress.key = '*';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newOperator).toEqual(['x']);
        expect(newNumber).toEqual([]);
        expect(calculation).toEqual(['44', '-', '3']);

        keyPress.key = '5';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newOperator).toEqual([]);
        expect(newNumber).toEqual(['5']);
        expect(calculation).toEqual(['44', '-', '3', 'x']);

        keyPress.key = 'x';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newOperator).toEqual(['x']);
        expect(newNumber).toEqual([]);
        expect(calculation).toEqual(['44', '-', '3', 'x', '5']);

        keyPress.key = '.';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newOperator).toEqual([]);
        expect(newNumber).toEqual(['.']);
        expect(calculation).toEqual(['44', '-', '3', 'x', '5', 'x']);

        keyPress.key = '1';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newOperator).toEqual([]);
        expect(newNumber).toEqual(['.', '1']);
        expect(calculation).toEqual(['44', '-', '3', 'x', '5', 'x']);

        keyPress.key = '/';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newOperator).toEqual(['/']);
        expect(newNumber).toEqual([]);
        expect(calculation).toEqual(['44', '-', '3', 'x', '5', 'x', '.1']);

        keyPress.key = '9';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newOperator).toEqual([]);
        expect(newNumber).toEqual(['9']);
        expect(calculation).toEqual(['44', '-', '3', 'x', '5', 'x', '.1', '/']);

        keyPress.key = '8';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newOperator).toEqual([]);
        expect(newNumber).toEqual(['9', '8']);
        expect(calculation).toEqual(['44', '-', '3', 'x', '5', 'x', '.1', '/']);

        keyPress.key = '±';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newOperator).toEqual([]);
        expect(newNumber[0]).toBe('-9');
        expect(newNumber).toEqual(['-9','8']);  
        expect(calculation).toEqual(['44', '-', '3', 'x', '5', 'x', '.1', '/']);
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newOperator).toEqual([]);
        expect(newNumber).toEqual(['9','8']); 
        expect(calculation).toEqual(['44', '-', '3', 'x', '5', 'x', '.1', '/']);

        keyPress.key = '0';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newOperator).toEqual([]);
        expect(newNumber).toEqual(['9','8','0','0','0','0']); 
        expect(calculation).toEqual(['44', '-', '3', 'x', '5', 'x', '.1', '/']);

        keyPress.key = '%';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newOperator).toEqual([]);
        expect(newNumber).toEqual(['0','.','9','8']); 
        expect(calculation).toEqual(['44', '-', '3', 'x', '5', 'x', '.1', '/']);

        keyPress.key = 'r';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        keyPress.key = 'R';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(newOperator).toEqual([]);
        expect(newNumber).toEqual([]); 
        expect(displayedInput.innerHTML).toBe('removed');
        expect(calculation).toEqual(['44', '-', '3', 'x', '5']);

        keyPress.key = 'd';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(displayedEntireCalc.innerHTML).toBe('44 - 3 x 5');
        keyPress.key = 'D';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(displayedEntireCalc.innerHTML).toBe('');
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(displayedEntireCalc.innerHTML).toBe('44 - 3 x 5');
        
        //calling for answer
        keyPress.key = 'Enter';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(displayedInput.innerHTML).toBe('29');
        keyPress.key = '+';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        keyPress.key = '5';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(displayedInput.innerHTML).toBe('5');
        keyPress.key = 'Return';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(displayedInput.innerHTML).toBe('34');
        keyPress.key = '+';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        keyPress.key = '5';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(displayedInput.innerHTML).toBe('5');
        keyPress.key = '=';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(displayedInput.innerHTML).toBe('39');

        keyPress.key = 's';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(calculationsList.length).toBe(1);
        keyPress.key = 'S';
        expect(documentOnKeyPress(keyPress)).toBe(undefined);
        expect(calculationsList.length).toBe(2);
    })
})