describe("mainSpec.js", function(){
    it("numbers added", function(){
        expect(addTogether(2)).toBe(4);
    });
    it("decimal added and decimal button disabled", function(){
        /*addTogether(i);*/
        expect(number.onclick).toBe(newNumber.push(this.value));
       /* var disableDec = false;
        var digit = "." /*value of button being pressed*/
       /* const newNumber = ["4", "4"];
        if (digit === "." && disableDec == false) {
            newNumber.push(digit);
            disableDec = true;
        }
        expect(newNumber[newNumber.length - 1]).toBe(".")
        expect(disableDec).toBe(true)*/
    });
    it("decimal not added", function(){
        var disableDec = false;
        var digit = "." /*value of button being pressed*/
        const newNumber = ["4", "4"];
            if (digit === "." && disableDec == false) {
                newNumber.push(digit);
            }
        expect(newNumber[newNumber.length - 1]).toBe(".");
    });
 })