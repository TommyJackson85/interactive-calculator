describe("Results of negative button response", function(){
    /*number is NOT restarted from each test*/
    /*number is continuously being built*/
    it("if newNumber is already a negative", function(){ //will be removed, as it is just temporary
        newNumber = ["-", "5", "6"];
        expect(negative.onclick()).toBe("56");
        expect(newNumber[0]).toBe("5");
        expect(newNumber[0]).not.toBe("-");
    }),
    it("if newNumber is NOT a negative", function(){ //will be removed, as it is just temporary
        newNumber = ["5", "6"];
        expect(negative.onclick()).toBe("-56");
        expect(newNumber[0]).toBe("-");
        expect(newNumber[0]).not.toBe("5");
    }),
    it("the newNumber can be constantly change from negative to positive, when negative button is continuously  ", function(){ //will be removed, as it is just temporary
        newNumber = ["5", "6"];
        expect(negative.onclick()).toBe("-56");
        expect(negative.onclick()).toBe("56");
        expect(negative.onclick()).toBe("-56");
        expect(negative.onclick()).toBe("56");
    })
})