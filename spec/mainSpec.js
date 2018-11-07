describe("mainSpec.js", function(){
    it("numbers added", function(){
        expect(addTogether(2)).toBe(4);
    }),
    it("Number Builder", function(){
        var newNumber = ["5", "6"];
        var disableDec = false;
        numberBuilder(".");
        function numberBuilder(i){
            if (i === "." && disableDec == false) { 
                disableDec = true;
                expect(disableDec).toBe(true);
                newNumber.push(i);
                expect(newNumber[newNumber.length - 1]).toBe(".");
                numberBuilder("5");
            } 
            if (i === "5") {
                disableDec = false;
                newNumber.push(i); 
                expect(disableDec).toBe(false);
                expect(newNumber[newNumber.length - 1]).toBe("5");
                expect(newNumber[newNumber.length - 1]).not.toBe(5);
            }	   
        }
    }),
    it("decimal not added", function(){
        var disableDec = false;
        var digit = "." /*value of button being pressed*/
        const newNumber = ["4", "4"];
            if (digit === "." && disableDec == false) {
                newNumber.push(digit);
            }
        expect(newNumber[newNumber.length - 1]).toBe(".");
    })
 })