describe("newNumber(array) building", function(){
    it("Basic test works!", function(){
        expect(addTogether(2)).toBe(4);
    }),
    it("Number or decimal added to newNumber array", function(){
        var newNumber = ["5", "6"];
        var disableDec = false;
        numberBuilder("5");/*tests number string*/
        function numberBuilder(i){
            if (i === "." && disableDec == false) { 
                disableDec = true;
                expect(disableDec).toBe(true);
                newNumber.push(i);
                expect(newNumber[newNumber.length - 1]).toBe(".")
            } 
            if (i === "5") {
                newNumber.push(i); 
                expect(disableDec).toBe(false);
                expect(newNumber[newNumber.length - 1]).toBe("5");
                expect(newNumber[newNumber.length - 1]).not.toBe(5);
                numberBuilder(".");/*tests decimal*/
            }	   
            if (i !== "5" || i !== ".") {
                    alert("not a number or decimal");
            }
        }
    }),
    it("Number or decimal NOT added to newNumber array", function(){
        var newNumber = ["5", "6"];
        var disableDec = false;
        /*tests number string*/
        function numberBuilder(i){
            if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(i) === false) { 
                return "not number string or decimal string";
            } 
        }
        expect(newNumber.length).toBe(2);
        expect(numberBuilder(5)).toBe("not number string or decimal string");
        expect(numberBuilder("*")).toBe("not number string or decimal string");
        expect(numberBuilder("-")).toBe("not number string or decimal string");
    })
 })