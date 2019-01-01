describe("Results of pressing number buttons", function(){
    /*number is NOT restarted from each test*/
    /*number is continuously being built*/
    it("key 'Dec' reflects button value '.' ", function(){ //will be removed, as it is just temporary
        /*Dec is short for decimal (i.e ".")*/
        let key = 'Dec';
        let number = document.getElementById("num" + key);
        expect(number.value).toBe(".");
        expect(number.value).not.toBe("5");
    });
    it("key 4 reflects button value '4' ", function(){
        key = 4;
        number = document.getElementById("num" + key);
        expect(number.value).toBe("4");
        expect(number.value).not.toBe(4);
    });
    it(`number.onclick() returns undefined but it calls the numberBuilder(this.value) function, in which this.value is equal to the specific number buttons 'value', that is clicked, 
    i.e. if number button '4' is clicked, numberBuilder('4') is called; numberBuilder('4'), when called, pushes '4' into the newNumber array;    
    newNumber length should not exceed 35 and calculator should message user when it has exceeded it's limit`, function(){
        newNumber = ["5", "5", "3", "4", "1", "5", "5", "4", "1", "5", "5", "3", "4", "1", "5", "5", "3", "4", "1", "5", "5", "3", "4", "1", "5", "5", "3", "4", ".", "5", "5", "3"]; 
        disableDec = true;/*array contains decimal*/
        key = 4;
        number = document.getElementById("num" + key);
        expect(number.onclick()).toBe(undefined);

        expect(numberBuilder("4")).toBe(newNumber.join("") 
            && "5534155415534155341553415534.55344");

        expect(numberBuilder("4")).toBe(
            "exceeds limit>>" + newNumber.join("").slice(13) 
            && "exceeds limit>>155341553415534.553444");
        expect(numberBuilder("4")).not.toBe(
            "exceeds limit>>155341553415534.5534444");
        expect(numberBuilder("4")).not.toBe(
            "5534155341553415534.55344444");
    });
    it("displayedInput.innerHTML length should increase from 0 to 1 after pushing '5' button once", function(){
        /*must empty newNumber Array and restart disableDec due to Jasmine's random testing*/
        newNumber = []; 
        console.log(newNumber);
        disableDec = false;
        number = document.getElementById("num" + 5);
        expect(number.onclick()).toBe(undefined);
     /*displayedInput.innerHTML is what's returned*/
        expect(displayedInput.innerHTML.length).toBe(1);
        expect(displayedInput.innerHTML.length).not.toBe(2);
        expect(displayedInput.innerHTML.length).not.toBe(0);
    });
    it("displayedInput.innerHTML length should increases from 1 to 4 after pushing number buttons 3 times", function(){
        newNumber = ["5"]; 
        console.log(newNumber);
        disableDec = false;
        number = document.getElementById("num" + 5);
        expect(number.onclick()).toBe(undefined);
        number = document.getElementById("num" + 8);
        expect(number.onclick()).toBe(undefined);
        number = document.getElementById("num" + 5);
        expect(number.onclick()).toBe(undefined);
        expect(newNumber).toEqual(["5","5","8","5"]);
        expect(displayedInput.innerHTML.length).toBe(4);
        expect(displayedInput.innerHTML.length).not.toBe(1);
        expect(displayedInput.innerHTML.length).not.toBe(5);
    });
    it("displayedInput.innerHTML length increases from 1 to 2 after pushing 'Dec' button once", function(){
        newNumber = ["5"];
        disableDec = false;
        number = document.getElementById("num" + "Dec");
        expect(number.onclick()).toBe(undefined);
        expect(newNumber).toEqual(["5","."])
        expect(displayedInput.innerHTML.length).toBe(2);
        expect(displayedInput.innerHTML.length).not.toBe(1);
        expect(displayedInput.innerHTML.length).not.toBe(3);
    });
    it("Dec button should not work after pressing it a second time while building a number", function(){ 
        newNumber = []; 
        disableDec = false; /*turns true once "Dec" is pressed once*/
        expect(disableDec).toBe(false);
        number = document.getElementById("num" + 5);
        expect(number.onclick()).toBe(undefined);
        number = document.getElementById("num" + "Dec");
        expect(number.onclick()).toBe(undefined);/*decimal is added*/
        expect(disableDec).toBe(true);
        number = document.getElementById("num" + 6);
        expect(number.onclick()).toBe(undefined);
        number = document.getElementById("num" + "Dec");
        expect(number.onclick()).toBe(undefined);/*No decimal is added*/
        expect(newNumber).toEqual(["5",".","6"]);
        expect(newNumber).not.toEqual(["5",".","6","."]);
        expect(newNumber[newNumber.length - 1]).toBe("6");
        expect(newNumber[newNumber.length - 1]).not.toBe(".");
    }),
    it("onclick pushes newOperator content to calculation array, after second click it doesn't push empty strings or push another operator or number", function(){
        calculation = ["3", "x", "6"];
        newOperator = ["-"];
        newNumber = [];
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
       
        number = document.getElementById("num" + 5);
        expect(number.onclick()).toBe(undefined);
        number = document.getElementById("num" + 7);
        expect(number.onclick()).toBe(undefined);
        expect(calculation[calculation.length - 1]).toBe("-");
        expect(calculation[calculation.length - 1]).not.toBe("");
        expect(calculation[calculation.length - 1]).not.toBe("6");

        expect(calculation[calculation.length - 2]).toBe("6");
        expect(calculation[calculation.length - 2]).not.toBe("");
        expect(calculation[calculation.length - 2]).not.toBe("-");
        expect(calculation.includes("")).toBe(false);
        expect(calculation.length).toBe(4);/*wrong, needs to be corrected*/
        expect(calculation).toEqual(["3", "x", "6", "-"]);/*wrong, needs to be corrected*/
        expect(newOperator).toEqual([]);
    }),
    it("onclick pushes newOperator content to calculation array, and then calls displayCalculation()", function(){
        calculation = ["3", "x", "6"];
        newOperator = ["-"];
        newNumber = [];
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
       
        number = document.getElementById("num" + 5);
        expect(number.onclick()).toBe(undefined);
        number = document.getElementById("num" + 7);
        expect(number.onclick()).toBe(undefined);
        expect(calculation).toEqual(["3", "x", "6", "-"]);
        expect(newOperator).toEqual([]);
        expect(displayedCalc.innerHTML).toBe("3 x 6 -");
    })
})


    /*it("Number or decimal added t", function(){
        newNumber = ["5", "6"];
        console.log(newNumber);
        disableDec = false;
        numberBuilder("5");
        function numberBuilder(i){
            if (i === "." && disableDec == false) { 
                disableDec = true;
                /*expect(disableDec).toBe(true);
                newNumber.push(i);
                expect(newNumber[newNumber.length - 1]).toBe(".")
            } 
            if (i === "5") {
                newNumber.push(i); 
                expect(disableDec).toBe(false);
                expect(newNumber[newNumber.length - 1]).toBe("5");
                expect(newNumber[newNumber.length - 1]).not.toBe(5);
                numberBuilder(".");/*tests decimal
            }	   
            if (i !== "5" || i !== ".") {
                    alert("not a number or decimal");
            }
        }
    });
    it("Number or decimal NOT added to newNumber array", function(){
        newNumber = ["5", "6"];
        disableDec = false;
        /*tests number string
        function numberBuilder(i){
            if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(i) === false) { 
                return "not number string or decimal string";
            } 
        }
        expect(newNumber.length).toBe(2);
        expect(numberBuilder(5)).toBe("not number string or decimal string");
        expect(numberBuilder("*")).toBe("not number string or decimal string");
        expect(numberBuilder("-")).toBe("not number string or decimal string");
    })*/